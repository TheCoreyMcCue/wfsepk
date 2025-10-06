import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Waiting for Smith — Official EPK",
  description:
    "The official Electronic Press Kit for Waiting for Smith. Discover the joy-filled indie pop of the I Like Life EP — tour dates, bio, press, and contact info.",
  openGraph: {
    title: "Waiting for Smith — Official EPK",
    description:
      "The official EPK for Waiting for Smith, featuring uplifting indie pop tracks, tour info, photos, and contact details.",
    url: "https://www.waitingforsmith.co.uk/epk",
    siteName: "Waiting for Smith",
    images: [
      {
        url: "/assets/portwater.jpg",
        width: 1200,
        height: 630,
        alt: "Waiting for Smith by the water",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waiting for Smith — I Like Life EP",
    description:
      "Discover the I Like Life EP and the uplifting sound of Waiting for Smith.",
    images: ["/assets/portwater.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
