import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/providers'
const inter = Inter({ subsets: ['latin'] })
import './globals.css';

export const metadata: Metadata = {
  title: 'Ocso',
  description: 'Pagina web de administracion de Ocsos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
    </html>
  );
}
