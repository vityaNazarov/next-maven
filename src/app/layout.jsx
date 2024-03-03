"use client";

import "@/sass/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
// import { Metadata } from "next";

export const metadata = {
  title: "Maven Group",
  description: "#",
  ogImage: {
    url: "/images/img/about-company/about-company-desctop/company-img1.jpg",
    alt: "Collective",
    type: "image/jpg",
    width: "1200",
    height: "630",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <head>
        {/* <title>Maven Group</title> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/android-chrome-512x512.png"
        />

        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/site.webmanifest"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Comfortaa:wght@300;400;500;600;700&family=Lato&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Добавляем мета-теги Open Graph для изображения */}
        <meta property="og:image" content={metadata.ogImage.url} />
        <meta property="og:image:alt" content={metadata.ogImage.alt} />
        <meta property="og:image:type" content={metadata.ogImage.type} />
        <meta property="og:image:width" content={metadata.ogImage.width} />
        <meta property="og:image:height" content={metadata.ogImage.height} />
      </head>
      <body>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
