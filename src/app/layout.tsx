import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/ui/preloader";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollToTop from "@/components/sections/scrollToTop";
import BootstrapForBrowser from "@/components/sections/bootstrapForBrowser";

export const metadata: Metadata = {
  title: "Chekquik - Background Checks Built for Platforms",
  description: "Fast, reliable background checks designed for platforms and marketplaces. Chekquik integrates seamlessly into your workflow.",
  keywords: "background check, background screening, platform background check, API background check, criminal background check, employment screening"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
