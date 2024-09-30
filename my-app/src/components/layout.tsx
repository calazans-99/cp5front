import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import './globals.css';

// Carregando as fontes locais
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

interface LayoutProps {
  children: ReactNode;
}

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
