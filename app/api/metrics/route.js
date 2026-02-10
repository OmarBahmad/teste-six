import { NextResponse } from "next/server";

const metrics = {
  hero: {
    accompanyDays: 30,
    activeStudents: 320,
    price: 497,
    socialProofExtra: 316,
    socialProofAvatars: [
      "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_1.webp",
      "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_2.webp",
      "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_3.webp",
      "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/prof_4.webp",
    ],
  },
  results: [
    { id: 1, value: "+38%", label: "crescimento em pedidos" },
    { id: 2, value: "+120%", label: "vendas no primeiro mês" },
    { id: 3, value: "+55%", label: "aumento no lucro líquido" },
  ],
  steps: [
    {
      id: 1,
      number: "01",
      title: "Oferta Irresistível",
      description: "Crie pacotes e kits que valorizam cada peça e fazem o cliente querer mais.",
    },
    {
      id: 2,
      number: "02",
      title: "Atração e Vitrine",
      description: "Publique fotos e stories com técnicas simples que geram desejo e atraem mensagens.",
    },
    {
      id: 3,
      number: "03",
      title: "Conversão no WhatsApp",
      description: "Use os scripts prontos para transformar cada conversa em um pedido confirmado.",
    },
    {
      id: 4,
      number: "04",
      title: "Escala Lucrativa",
      description: "Fidelize clientes e crie uma base que compra todo mês no automático.",
    },
  ],
  audience: [
    { id: 1, text: "Quem cansou de postar e não vender nada." },
    { id: 2, text: "Quem quer precificar com segurança." },
    { id: 3, text: "Quem busca renda extra previsível." },
    { id: 4, text: "Quem está pronta para profissionalizar o hobby." },
  ],
};

export async function GET() {
  return NextResponse.json(metrics);
}
