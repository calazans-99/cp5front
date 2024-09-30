import type { ReactNode } from 'react';
import Head from 'next/head'; // Importação do componente Head do Next.js

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <h1>NASA Image Viewer</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 NASA Image Viewer</p>
        </footer>
      </div>
    </>
  );
}
