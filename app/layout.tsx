import Navbar from "@/components/global/navbar";
import "./globals.css";
import { ray } from "@/next-persian-fonts/ray";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ray.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
