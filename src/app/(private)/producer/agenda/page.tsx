"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { format, startOfDay, endOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, Clock, User, Scissors, Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface Appointment {
  id: string;
  scheduled_at: string;
  status: string;
  notes: string;
  customer: {
    id: string;
    name: string;
    phone: string;
  };
  service: {
    id: string;
    name: string;
    duration_minutes: number;
    price: number;
  };
}

const statusConfig = {
  confirmado: { label: "Confirmado", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  em_atendimento: { label: "Em Atendimento", color: "bg-primary/10 text-primary border-primary/20" },
  concluido: { label: "Concluído", color: "bg-success/10 text-success border-success/20" },
  cancelado: { label: "Cancelado", color: "bg-muted text-muted-foreground border-muted/20" },
  faltou: { label: "Faltou", color: "bg-destructive/10 text-destructive border-destructive/20" },
};

export default function Agenda() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchAppointments();
  }, [selectedDate]);

  const fetchAppointments = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const startDate = startOfDay(selectedDate);
      const endDate = endOfDay(selectedDate);

      const { data, error } = await supabase
        .from("appointments")
        .select(`
          *,
          customer:customers(id, name, phone),
          service:services(id, name, duration_minutes, price)
        `)
        .eq("barber_id", user.id)
        .gte("scheduled_at", startDate.toISOString())
        .lte("scheduled_at", endDate.toISOString())
        .order("scheduled_at", { ascending: true });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando agenda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Agenda</h1>
          <p className="text-muted-foreground">Gerencie seus agendamentos diários</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Novo Agendamento
        </Button>
      </div>

      <Card className="glass border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-display flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {format(selectedDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePreviousDay}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleToday}>
                Hoje
              </Button>
              <Button variant="outline" size="sm" onClick={handleNextDay}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-display text-xl font-semibold mb-2">Nenhum agendamento</h3>
              <p className="text-muted-foreground mb-4">
                Não há agendamentos para esta data
              </p>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Adicionar Agendamento
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {appointments.map((appointment, index) => (

                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{appointment.customer?.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>
                              {format(new Date(appointment.scheduled_at), "HH:mm", { locale: ptBR })}
                            </span>
                            <span>•</span>
                            <span>{appointment.service?.duration_minutes} min</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 ml-13">
                        <div className="flex items-center gap-2 text-sm">
                          <Scissors className="w-4 h-4 text-muted-foreground" />
                          <span>{appointment.service?.name}</span>
                        </div>
                        <div className="text-sm font-medium text-success">
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(appointment.service?.price || 0)}
                        </div>
                      </div>

                      {appointment.notes && (
                        <p className="text-sm text-muted-foreground ml-13 mt-2">
                          {appointment.notes}
                        </p>
                      )}
                    </div>

                    <Badge 
                      variant="outline" 
                      className={statusConfig[appointment.status as keyof typeof statusConfig].color}
                    >
                      {statusConfig[appointment.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
