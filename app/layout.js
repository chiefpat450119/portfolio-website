import { Space_Mono, VT323 } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${spaceMono.variable} ${vt323.variable} font-body bg-[#0a0c10] text-[#e2e8f0]`}>
        {children}
      </body>
    </html>
  );
}
