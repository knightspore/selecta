import { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/provider/AuthProvider";
import SignInProvider from "@/provider/SignInProvider";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Selecta",
  description:
    "Create a song Aura to find the tracks you didn't know you were looking for.",
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
        className={`relative text-shell-700 bg-shell-100 ${dmsans.className}`}
      >
        <AuthProvider>
          <SignInProvider>
            <AudioPlayerContextProvider>
              <RecommendationsContextProvider>
                {children}
              </RecommendationsContextProvider>
            </AudioPlayerContextProvider>
          </SignInProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
