import { ThemeProvider } from "@/src/interfaces/layouts/themeProvider";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Rubik } from 'next/font/google';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.className} ${rubik.className} antialiased w-full overflow-x-hidden h-full`}>        
          <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
