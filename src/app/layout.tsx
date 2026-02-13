import type { Metadata } from "next";
import "./globals.css";
import { AudioProvider } from "@/lib/AudioContext";

export const metadata: Metadata = {
  title: "Happy Valentine's Day, Dieu Phuong, my Love!!",
  description:
    "Play a unique Valentine's card game. Complete the collection to reveal a romantic proposal!",
  keywords: [
    "Valentine's card game",
    "romantic proposal game",
    "photo card challenge",
    "Valentine's Day surprise",
    "couples game",
    "valentine's day game",
    "proposal game",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
