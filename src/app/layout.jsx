"use client";

import "@/sass/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <head>
        <title>Maven Group</title>
        <meta property="og:title" content="Maven Group" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maven-group.ua/" />
        <meta
          property="og:image"
          content="https://maven-group.ua/images/img/Main-logo.jpg"
        />
        <meta
          property="og:description"
          content="Виробництво та продаж мяких меблів для готелів, ресторанів, кафе та індивідуальних просторів."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Виробництво та продаж мяких меблів в Україні, для готелів, ресторанів, кафе та індивідуальних просторів."
        ></meta>
        <meta
          name="keywords"
          content="купить, мебель украина, для ресторанов, кафе, цена, меблі україна, для ресторанів, кафе, ціна"
        />

        <meta
          name="google-site-verification"
          content="pDE-Dp4K0pnbSWJAeM1v-nTIakdqXMV_jGBWEaE2eGY"
        />

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
