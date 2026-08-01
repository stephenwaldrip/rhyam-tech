import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Rhyam Tech Co — Software that keeps the shelves honest",
  description:
    "Rhyam Tech Co builds practical operational software. Our flagship product, Inventory Manager Pro, turns messy stock into numbers you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}