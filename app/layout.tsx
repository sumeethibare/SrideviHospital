import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigate from "@/components/Navigation/Navigate";
import PageLoader from "@/components/Pageloader/PageLoader";
import Base from "@/components/Footer/Base";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Shridevi City Hospital",
  description: "Shridevi City Hospital, Tumkur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-selection-none noscrollbar scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased h-dvh`}
      >
        <PageLoader />
        <Navigate />
        {children}
        <Base />
      </body>
    </html>
  );
}
