import "./globals.css";
import { Bangers } from "@next/font/google";

const bangers = Bangers({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Anime Quote Generator",
  description: "Generate random anime quotes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bangers.className}>{children}</body>
    </html>
  );
}
