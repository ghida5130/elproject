import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { suit } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "코끼리공장",
    description: "코끼리공장",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={suit.className}>
            <head></head>
            <body>{children}</body>
        </html>
    );
}
