import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  rewrites() {
    return [
      {
        source: "/cliente",
        destination: "/customer",
      },
      {
        source: "/barbeiro",
        destination: "/producer",
      },
      {
        source: "/barbeiro/agenda",
        destination: "/producer/agenda",
      },
      {
        source: "/barbeiro/pagar",
        destination: "/producer/cash-flow/accounts-receivable",
      },
      {
        source: "/barbeiro/receber",
        destination: "/producer/cash-flow/accounts-payable",
      },
      {
        source: "/barbeiro/relatorios",
        destination: "/producer/cash-flow/reports",
      },
      {
        source: "/configuracoes",
        destination: "/settings",
      },
      {
        source: "/perfil",
        destination: "/profile",
      },
      {
        source: "/barbeiro/time",
        destination: "/producer/settings/team",
      },
      {
        source: "/barbeiro/servicos",
        destination: "/producer/settings/services",
      },
      {
        source: "/barbeiro/pagamento",
        destination: "/producer/settings/billing",
      },
    ];
  },
};

export default nextConfig;
