import type { Metadata } from "next";
import Script from "next/script";
import { Zen_Old_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const zenMincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fukugyo-mbti.vercel.app"),
  title: "副業MBTI診断｜あなたにぴったりの高収入副業がわかる！",
  description:
    "全10問・約1分であなたのMBTIタイプから、ぴったりの高収入副業がわかる無料診断。16タイプ別のおすすめ職種と月収目安をチェック！",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "副業MBTI診断",
    title: "副業MBTI診断｜あなたにぴったりの高収入副業がわかる！",
    description:
      "全10問・約1分であなたのMBTIタイプから、ぴったりの高収入副業がわかる無料診断。",
    images: [{ url: "/ogp.jpg", width: 1200, height: 655, alt: "副業MBTI診断" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "副業MBTI診断｜あなたにぴったりの高収入副業がわかる！",
    description:
      "全10問・約1分であなたのMBTIタイプから、ぴったりの高収入副業がわかる無料診断。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMincho.variable} ${zenKaku.variable} h-full antialiased`}
    >
      {GA_MEASUREMENT_ID && (
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
          </Script>
        </head>
      )}
      <body className="min-h-full flex flex-col bg-[#fff0f5] text-[#4a2040]">
        {children}
      </body>
    </html>
  );
}
