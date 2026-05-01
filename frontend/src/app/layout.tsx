import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
  title: "GoLink",
  description: "Internal URL shortener and browser shortcut tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}