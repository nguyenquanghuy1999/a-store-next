import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import { Toaster } from "../components/ui/toast";
import Footer from "./_components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),
  title: "AStore - Điện thoại, laptop, tablet, phụ kiện chính hãng",
  description:
    "Mua sắm trực tuyến các sản phẩm công nghệ. Giá tốt & Miễn phí vận chuyển. Voucher Xtra | Freeship 0Đ | AStore Đảm Bảo",
  applicationName: "AStore",
  openGraph: {
    type: "website",
    siteName: "AStore",
    locale: "vi_VN",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: { google: "Bq1Km_TdPQywzZGcl3uq16Znhoeu-3ULxyqMWN5UmUQ" },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AStore",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AStore",
    url: `${BASE_URL}`,
  };

  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <div className="mt-20 min-h-screen px-2.5 md:mt-30.5 md:px-12.5 lg:px-17.5 xl:px-25">
          {children}
        </div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
