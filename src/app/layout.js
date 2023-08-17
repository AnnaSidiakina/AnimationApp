import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import { Menu } from "@/components/navigation/Navigation";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animated loader",
  description: "animated loader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <StyledComponentsRegistry>
          <main className="app">
            <Menu />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
