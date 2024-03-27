"use client";

import "@/sass/main.scss";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Используйте next/router вместо next/navigation
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
// import * as FacebookPixel from "react-facebook-pixel";

// export const metadata = {
//   title: "Maven Group - HoReCa Furniture",
//   description:
//     "Виробництво та продаж мяких меблів для готелів, ресторанів, кафе та індивідуальних просторів. Оберіть свій ідеальний варіант крісла, дивана або барного стільця для вашого простору.",
//   keywords:
//     "купить, мебель украина, для ресторанов, кафе, цена, меблі україна, для ресторанів, кафе, ціна",
// };

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // const facebookPixel = FacebookPixel.default.init(
    //   "1414671689923095" // Замените на свой ID Facebook Pixel
    // );
    import("react-facebook-pixel")
      .then((module) => module.default)
      .then((ReactPixel) => {
        ReactPixel.init("1414671689923095");
        ReactPixel.pageView();
      });

    // Отслеживание события на каждой смене маршрута
    // const handleRouteChange = () => {
    //   facebookPixel.pageView();
    // };

    // if (router.events) {
    //   router.events.on("routeChangeComplete", handleRouteChange);

    //   return () => {
    //     router.events.off("routeChangeComplete", handleRouteChange);
    //   };
    // }
  }, [router.events]);

  return (
    <html lang="ua">
      <head>
        <title>Maven Group - HoReCa Furniture</title>
        <meta property="og:title" content="Maven Group - HoReCa Furniture" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maven-group.ua/" />
        <meta
          property="og:image"
          content="https://maven-group.ua/images/img/Main-logo.jpg"
        />
        <meta
          property="og:description"
          content="Виробництво та продаж мяких меблів для готелів, ресторанів, кафе та індивідуальних просторів. Оберіть свій ідеальний варіант крісла, дивана або барного стільця для вашого простору."
        />
        <meta
          name="facebook-domain-verification"
          content="7xdf9e31cx899ou4fqk0oywsxiitje"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="google-site-verification"
          content="pDE-Dp4K0pnbSWJAeM1v-nTIakdqXMV_jGBWEaE2eGY"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/assets/img/design/logo.svg"
          type="image/svg+xml"
        />
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
