import { ThemeProvider } from "@/src/interfaces/layouts/themeProvider";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Rubik } from 'next/font/google';
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
}); 

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kenji!',
  description: 'Este é o Portfólio Animado do Desenvolvedor Vinicius Kenji e nele, contém seus projetos, stacks e informações gerais. Entre em contato caso goste!',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.className} ${rubik.className} antialiased w-full overflow-x-hidden h-full`}>        
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster position="top-right" />
      </body>
    </html>
  );
}
