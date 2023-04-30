import "./globals.css";
import { Inter } from "next/font/google";
import AppContextProvider from "@/provider/AppContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* @ts-ignore RSC */}
      <AppContextProvider>
        <body className={inter.className}>
          <header className="flex items-center justify-between p-2 gap-4">
            <span className="flex items-center gap-4">
              <h1>Username Goes Here</h1>
            </span>
          </header>
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
