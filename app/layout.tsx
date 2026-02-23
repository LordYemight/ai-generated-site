import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Lavie du Vivants — It\'s All About The TASTE',
  description: 'A food and spice shop with a passion for delivering the best taste',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}