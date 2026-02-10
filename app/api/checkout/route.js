import { NextResponse } from "next/server";

const checkout = {
  course: {
    name: "Curso Crochet Direto",
    price: 497,
    currency: "BRL",
  },
  bonus: {
    name: "Bônus - Mensagens prontas no WhatsApp",
    price: 0,
  },
  total: 497,
  guarantee: {
    days: 7,
    label: "Garantia de 7 dias",
  },
  benefits: [
    "Plano de vendas diretas para fechar pedidos semanais.",
    "Guia de preço, margem e kits lucrativos.",
    "Scripts para conversas e fechamento no WhatsApp.",
  ],
  onboarding: [
    {
      id: 1,
      title: "1. Assista a aula zero",
      description: "Defina o público e o tipo de peça ideal.",
    },
    {
      id: 2,
      title: "2. Baixe os templates",
      description: "Mensagens prontas e modelo de catálogo.",
    },
    {
      id: 3,
      title: "3. Publique hoje",
      description: "Checklist para abrir pedidos ainda hoje.",
    },
  ],
};

export async function GET() {
  return NextResponse.json(checkout);
}
