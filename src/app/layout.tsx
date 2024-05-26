import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../styles/globals.scss";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  );
}