import type { Metadata } from "next";
import { pretendard } from "@/styles/font";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FloatingButtonGroup } from "@/components/FloatingButtonGroup";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "승계랜드",
  description: "자동차 리스, 렌트 차량 큰 손해 없이 판매하는 방법!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} `}>
      <body className={`font-paperlogy w-full overflow-auto text-black`}>
        <Navbar />
        {children}
        <FloatingButtonGroup />
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
