import {
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Smartphone,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProducerPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400 text-base">Visão geral do seu dia</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 - Agendamentos Hoje */}
        <Card className="bg-backgroud/90 border-backgroud-90 p-5 rounded-xl">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-gray-400 text-xs mb-2">Agendamentos Hoje</p>
              <h3 className="text-3xl font-bold text-white">0</h3>
            </div>
            <div className="bg-red-500/20 p-2 rounded-lg">
              <Smartphone className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className="bg-gray-700/50 text-gray-300 hover:bg-gray-700/50 text-xs px-2 py-0.5"
            >
              0 confirmados
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gray-700/50 text-gray-300 hover:bg-gray-700/50 text-xs px-2 py-0.5"
            >
              0 cancelados
            </Badge>
          </div>
        </Card>

        {/* Card 2 - Faturamento Hoje */}
        <Card className="bg-backgroud/90 border-backgroud-90 p-5 rounded-xl">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-gray-400 text-xs mb-2">Faturamento Hoje</p>
              <h3 className="text-3xl font-bold text-white">R$ 0,00</h3>
            </div>
            <div className="bg-green-500/20 p-2 rounded-lg">
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
          </div>
          <p className="text-gray-400 text-xs">Baseado em 0 atendimentos</p>
        </Card>

        {/* Card 3 - Taxa de Conclusão */}
        <Card className="bg-backgroud/90 border-backgroud-90 p-5 rounded-xl">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-gray-400 text-xs mb-2">Taxa de Conclusão</p>
              <h3 className="text-3xl font-bold text-white">0%</h3>
            </div>
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <TrendingUp className="w-4 h-4 text-orange-400" />
            </div>
          </div>
          <p className="text-gray-400 text-xs">0 cancelados, 0 faltas</p>
        </Card>

        {/* Card 4 - Em Atendimento */}
        <Card className="bg-backgroud/90 border-backgroud-90 p-5 rounded-xl">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-gray-400 text-xs mb-2">Em Atendimento</p>
              <h3 className="text-3xl font-bold text-white">0</h3>
            </div>
            <div className="bg-red-500/20 p-2 rounded-lg">
              <Clock className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <p className="text-gray-400 text-xs">
            Clientes sendo atendidos agora
          </p>
        </Card>
      </div>

      <Card className="bg-backgroud/90 border-backgroud-90 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6">
          Próximos Agendamentos
        </h2>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-gray-700/30 p-5 rounded-2xl mb-4">
            <Calendar className="w-12 h-12 text-gray-500" />
          </div>
          <p className="text-gray-400">Nenhum agendamento próximo</p>
        </div>
      </Card>
    </div>
  );
}
