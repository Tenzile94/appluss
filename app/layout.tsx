import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import StatsSection from "./components/ClientSatisfaction";

export const metadata: Metadata = {
  title: "Applus Appliace Repair Service",
  description: "Same-day appliance repair services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="" style={{ fontFamily: "Inter Regular" }}>
        <Navbar />

        {children}
        <StatsSection />
        <Footer />
      </body>
    </html>
  );
}
