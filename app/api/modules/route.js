import { NextResponse } from "next/server";

const modules = [
  {
    id: 1,
    tag: "Módulo 1",
    title: "Produtos que vendem rápido",
    description: "Descubra quais peças têm maior saída e foque no que dá resultado.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_1.png",
  },
  {
    id: 2,
    tag: "Módulo 2",
    title: "Preço certo e lucro real",
    description: "Precifique sem medo e pare de vender barato. Margem de verdade.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_2.png",
  },
  {
    id: 3,
    tag: "Módulo 3",
    title: "Fotos irresistíveis",
    description: "Fotografe com o celular e faça suas peças parecerem de vitrine.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_3.png",
  },
  {
    id: 4,
    tag: "Módulo 4",
    title: "Funil no WhatsApp",
    description: "Scripts prontos para abordar, negociar e fechar pelo celular.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_4.png",
  },
  {
    id: 5,
    tag: "Módulo 5",
    title: "Catálogo campeão",
    description: "Monte um catálogo digital profissional que vende sozinho.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_5.png",
  },
  {
    id: 6,
    tag: "Módulo 6",
    title: "Vendas recorrentes",
    description: "Faça clientes voltarem todo mês sem precisar correr atrás.",
    image: "https://kubcfxcadepyyukiocmv.supabase.co/storage/v1/object/public/pessoal/mod_6.png",
  },
];

export async function GET() {
  return NextResponse.json(modules);
}
