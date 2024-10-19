import type { Metadata } from "next";
import "./styles/globals.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Hind_Madurai } from 'next/font/google'

const HindMadurai = Hind_Madurai({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty page with a list of its characters",
  icons: {
    icon: '/images/rickymortyLogo.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={HindMadurai.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
