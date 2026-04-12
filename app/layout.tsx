import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JIM TOUCH — Building Your Vision Into Reality",
  description:
    "Expert construction, civil engineering, and project management services for residential, commercial, and infrastructure developments across Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
