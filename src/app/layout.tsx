import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UCS Repo",
  description: "UCS Repo - Repositório de estudos da UCS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
