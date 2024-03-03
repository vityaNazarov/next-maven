"use client";

import Head from "next/head";
import "@/sass/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <head>
        <title>Maven Group</title>
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
        <meta
          property="og:image"
          content="../../public/images/img/about-company/about-company-desctop/company-img1.jpg"
        />
        <meta property="og:image:alt" content="Collective" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
