import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Patrick Clothings — Empowering Fashion',
  description: 'Premium fashion brand offering high-quality clothes, shoes & accessories',
};

import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}