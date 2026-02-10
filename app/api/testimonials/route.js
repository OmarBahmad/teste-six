import { NextResponse } from "next/server";

const testimonials = [
  {
    id: 1,
    quote: "Em 2 semanas eu já tinha vendido mais do que no mês inteiro antes do curso.",
    name: "Camila R.",
    city: "Belo Horizonte, MG",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_1.webp",
    rating: 5,
  },
  {
    id: 2,
    quote: "Achei que precificação era só somar material. Agora meu lucro triplicou.",
    name: "Fernanda S.",
    city: "Curitiba, PR",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_2.webp",
    rating: 5,
  },
  {
    id: 3,
    quote: "O módulo de WhatsApp é absurdo. Fecho 3 a 4 pedidos por semana só com os scripts.",
    name: "Juliana M.",
    city: "Recife, PE",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_3.webp",
    rating: 5,
  },
  {
    id: 4,
    quote: "Finalmente me sinto profissional. Tenho catálogo, preço certo e cliente voltando.",
    name: "Mariana L.",
    city: "Goiânia, GO",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_4.webp",
    rating: 5,
  },
  {
    id: 5,
    quote: "Comecei do zero no crochê e em 1 mês já tinha lista de espera.",
    name: "Patricia A.",
    city: "Florianópolis, SC",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_5.webp",
    rating: 5,
  },
  {
    id: 6,
    quote: "O melhor investimento que fiz no meu negócio. Paga no primeiro pedido.",
    name: "Renata V.",
    city: "São Paulo, SP",
    photo: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_6.webp",
    rating: 5,
  },
];

export async function GET() {
  return NextResponse.json(testimonials);
}
