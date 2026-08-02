import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata = {
  title: "Patrick Zhou — Game Developer & Software Engineer",
  description:
    "Portfolio of Patrick Zhou, a game developer, software engineer, and sci-fi enthusiast. UBC Computer Science, Shopify, Godot, Unity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
