import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raigo Hõim | Full-Stack Developer & Systems Specialist",
  description:
    "Professional portfolio of Raigo Hõim, showcasing full-stack development projects and IT systems expertise",
  openGraph: {
    type: "website",
    title: "Raigo Hõim | Developer Portfolio",
    description: "Full-stack developer and systems specialist portfolio",
    images: ["/images/my-portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
