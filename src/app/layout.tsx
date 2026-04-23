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

const baseUrl = new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000');

export const metadata: Metadata = {
    title: {
        default: 'Kenji | Dev',
        template: '%s | Kenji',
    },
    description: 'Portfólio animado do desenvolvedor Vinicius Kenji. Confira projetos, stacks e entre em contato!',
    keywords: ['desenvolvedor', 'portfolio', 'frontend', 'react', 'next.js', 'Vinicius Kenji'],
    authors: [{ name: 'Vinicius Kenji' }],

    alternates: {
        canonical: baseUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },

    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: baseUrl,
        siteName: 'Kenji | Dev',
        title: 'Kenji | Dev',
        description: 'Portfólio animado do desenvolvedor Vinicius Kenji. Confira projetos, stacks e entre em contato!',
        images: [
            {
                url: '/image.svg',
                width: 1200,
                height: 630,
                alt: 'Kenji | Dev',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Kenji | Dev',
        description: 'Portfólio animado do desenvolvedor Vinicius Kenji. Confira projetos, stacks e entre em contato!',
        images: ['/image.svg'],
    },

    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    }
};

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
