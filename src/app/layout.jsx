"use client";

import "@/sass/main.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

// export const metadata = {
//   title: "Maven Group",
//   description: "Furniture",
//   openGraph: {
//     title: "Maven",
//     description: "The React Framework for the Web",
//     url: "",
//     siteName: "Next.js",
//     images: [
//       {
//         url: "/images/img/about-company/about-company-desctop/company-img1.jpg", // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "/images/img/about-company/about-company-desctop/company-img1.jpg", // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "My custom alt",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <head>
        <title>Maven Group</title>
        <meta property="og:title" content="MAVEN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maven-group.ua/" />
        <meta
          property="og:image"
          content="/images/img/about-company/about-company-desctop/company-img1.jpg"
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
