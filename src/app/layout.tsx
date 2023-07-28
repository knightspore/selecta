import { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/provider/AuthProvider";
import SignInProvider from "@/provider/SignInProvider";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "auto",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: {
    default: "Selecta",
    template: "%s | Selecta",
  },
  description:
    "Create a song Aura to find the tracks you didn't know you were looking for.",
  metadataBase: new URL("https://selecta.ciaran.co.za"),
  openGraph: {
    siteName: "Selecta",
    title: {
      default: "Selecta",
      template: "%s | Selecta",
    },
    description:
      "Create a song Aura to find the tracks you didn't know you were looking for.",
    images: ["https://selecta.ciaran.co.za/api/og"],
  },
  twitter: {
    creator: "@parabyl",
    card: "summary_large_image",
    title: {
      default: "Selecta",
      template: "%s | Selecta",
    },
    description:
      "Create a song Aura to find the tracks you didn't know you were looking for.",
    images: ["https://selecta.ciaran.co.za/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`relative text-shell-700 bg-shell-100 ${dmsans.variable} font-sans font-sans`}
      >
        <main>
          <AuthProvider>
            <SignInProvider>{children}</SignInProvider>
          </AuthProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
