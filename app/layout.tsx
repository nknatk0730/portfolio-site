import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A web developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        {/* Next top loader */}
        <NextTopLoader color="#5700FF" showSpinner={false} />
        {/* init aos */}
        <AOSInit />
        {children}
        </body>
    </html>
  );
}
