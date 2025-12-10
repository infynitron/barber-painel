import { Period } from "@/modules/shared/shared";

export const periods: { [key in Period]: string } = {
  day: "Dia",
  week: "Semana",
  month: "Mês",
  year: "Ano",
};

export const formatCurrency = (value: any) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatDate = (dateString: any) => {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
