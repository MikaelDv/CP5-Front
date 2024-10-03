import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Rodape from '@/components/Rodape/Rodape';
import React from 'react';
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <main className="main">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}
