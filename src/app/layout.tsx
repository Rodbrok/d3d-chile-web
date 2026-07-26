import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D3D Chile",
  description: "Impresión 3D, corte y grabado láser en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
