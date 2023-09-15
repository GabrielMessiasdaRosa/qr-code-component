import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Try Frontend Mentor",
  description:
    "Try Frontend Mentor is a website that helps you improve your front-end coding skills by building real projects.",
  icons: [
    {
      url: "/images/favicon.ico",
      rel: "icon",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 dark:bg-gray-800 px-6`}>
        {children}
      </body>
    </html>
  );
}
