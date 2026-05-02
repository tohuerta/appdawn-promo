import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppDawn — Planos para construir cualquier producto digital",
  description:
    "Boilerplate open source con app móvil, landing page, backoffice y backend API. Preconfigurado con React Native, Next.js, NestJS, Prisma y Docker.",
  openGraph: {
    title: "AppDawn — Boilerplate para startups",
    description: "App móvil + Landing + Backoffice + Backend API. Todo listo en minutos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-[#0a1628]`}>
        {children}
      </body>
    </html>
  );
}
