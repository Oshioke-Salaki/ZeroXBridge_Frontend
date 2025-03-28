"use client";
import { usePathname } from "next/navigation";
import type React from "react";

import { Geist, Geist_Mono, Manrope, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./components/navbar";
import NavigationBar from "./components/mobile-navigator";
import { StarknetProvider } from "./components/Starknet-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar =
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${robotoSerif.variable} antialiased bg-[#09050E]`}
      >
        <StarknetProvider>
          <ThemeProvider>
            <LayoutContent showSidebar={showSidebar}>
              {children}
            </LayoutContent>
          </ThemeProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}

// Extract the inner content to a new component where hooks can be used
function LayoutContent({ 
  children, 
  showSidebar 
}: { 
  children: React.ReactNode;
  showSidebar: boolean;
}) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <>
      {showSidebar && <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      <div className="flex">
        {showSidebar && <Sidebar />}
        <div
          className={`${isDarkMode ? 'bg-black' : 'bg-white'} min-h-screen relative flex flex-col w-full ${
            showSidebar ? "lg:ml-[320px]" : ""
          }`}
        >
          <main
            className={`flex-1 ${
              showSidebar ? "mt-[4rem] mb-[4rem]" : ""
            }`}
          >
            {children}
          </main>
          {showSidebar && <NavigationBar />}
        </div>
      </div>
    </>
  );
}
