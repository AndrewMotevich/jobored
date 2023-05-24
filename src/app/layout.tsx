import Header from "@/components/Header/Header";
import "../sass/global.scss";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobored",
  description: "application to find job",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
