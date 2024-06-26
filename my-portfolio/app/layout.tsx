import type { Metadata } from "next";
import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight:["100","200", "300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Ashutosh",
  description: "Know ablout me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={jetbrainsMono.variable}>
        <Header/>
        {/*<StairTransition/>*/}
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
