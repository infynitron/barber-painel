import { Calendar, Clock, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

import settings from "@/data";

const Booking = () => {
  return (
    <section id="booking" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Agendamento <span className="text-primary">Online</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Agende seu horário de forma rápida e prática
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant animate-scale-in">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Escolha a Data
                </h3>
                <p className="text-muted-foreground text-sm">
                  Selecione o melhor dia para você
                </p>
              </div>

              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Horário
                </h3>
                <p className="text-muted-foreground text-sm">
                  Vários horários disponíveis
                </p>
              </div>

              <div className="text-center p-6 bg-secondary/50 rounded-lg">
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Confirmação
                </h3>
                <p className="text-muted-foreground text-sm">
                  Receba confirmação imediata
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Clique no botão abaixo para ser direcionado ao nosso sistema de
                agendamento online
              </p>
              <Button size="lg" className="text-lg">
                Agendar Agora
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ou ligue para:{" "}
                <span className="text-primary font-semibold">
                  {settings.contact.phone}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
