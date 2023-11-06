"use client";

import { Inter } from "next/font/google";
import FlowbiteContext from "../context/FlowbiteContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
}
