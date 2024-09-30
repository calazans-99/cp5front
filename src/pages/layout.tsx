import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

// Carregando fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadados do layout
export const metadata: Metadata = {
  title: "NASA Images",
  description: "Projeto com imagens da NASA usando Next.js",
};

// Definição de tipos para o componente de Layout
interface LayoutProps {
  children: ReactNode;
}

// Componente de Layout com cabeçalho, corpo e rodapé
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header className="bg-gray-800 text-white p-4">
        <h1>NASA Image Viewer</h1>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 NASA Image Viewer</p>
      </footer>
    </div>
  );
}
