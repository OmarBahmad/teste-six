import "./globals.css";

export const metadata = {
  title: "Atelie Linha & Lucro | Crochet",
  description:
    "Landing page de crochet com foco em marketing direto, conversao e preservacao de UTMs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
