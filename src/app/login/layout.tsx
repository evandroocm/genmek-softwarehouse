import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Genmek Software House",
  description: "Genmek Software House is a software development company that specializes in creating innovative and high-quality software solutions for businesses of all sizes. With a team of experienced developers, designers, and project managers, Genmek Software House is committed to delivering exceptional results that meet the unique needs of each client. Whether it's developing custom software applications, providing IT consulting services, or offering ongoing support and maintenance, Genmek Software House is dedicated to helping businesses succeed in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
