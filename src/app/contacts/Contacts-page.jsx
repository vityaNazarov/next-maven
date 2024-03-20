"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

function Contactspage() {
  const { t } = useTranslation();

  return (
    <>
      <svg
        className="nonsense-svg"
        width="48"
        height="808"
        viewBox="0 0 48 808"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_418_5358)">
          <line
            x1="24.5"
            y1="-2.18557e-08"
            x2="24.5"
            y2="400"
            stroke="#A8A198"
          />
          <line x1="24.5" y1="448" x2="24.5" y2="800" stroke="#A8A198" />
          <path
            d="M14 430.857L17.3333 441.143V444.571L24 448L30.6667 444.571V441.143L34 430.857L37.3333 441.143L44 437.714V406.857C44 403.069 35.0466 400 24 400C12.9534 400 4 403.069 4 406.857V437.714L10.6667 441.143L14 430.857ZM5.66619 406.857C5.66619 406.301 6.65275 404.913 10.3826 403.634C13.9962 402.397 18.8327 401.715 23.999 401.715C29.1654 401.715 34.0029 402.397 37.6155 403.634C41.3453 404.913 42.3319 406.302 42.3319 406.857C42.3319 407.412 41.3453 408.801 37.6155 410.08C34.0019 411.317 29.1654 412 23.999 412C18.8327 412 13.9952 411.317 10.3826 410.08C6.65275 408.801 5.66619 407.412 5.66619 406.857Z"
            fill="#A8A198"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_418_5358"
            x="0"
            y="0"
            width="48"
            height="808"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_418_5358"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_418_5358"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <main>
        {/* В2В */}

        <section className="projects">
          <div className="container projects-container">
            <div className="container-nav">
              <Link className="container-nav-link" href="/">
                {t("Breadcrumbs_main_page")}
              </Link>
              <svg
                className="container-nav-link-arrow"
                width="18"
                height="18"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0637 11.6136L9.24834 10.8232L13.5445 6.52703H0.29834V5.39245H13.5445L9.23297 1.0809L10.0483 0.290527L15.7175 5.95975L10.0637 11.6136Z"
                  fill="#232427"
                />
              </svg>
              <Link className="container-nav-link" href="/contacts">
                {t("Breadcrumbs_contacts")}
              </Link>
            </div>

            <h2 className="title contacts-title">{t("Contacts_title")}</h2>

            <div className="contacts-block">
              <div className="contacts">
                <div className="contacts-section">
                  <h3 className="contacts-section-title">
                    {t("Contacts_production_address")}
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/U9Y8wB2YKvuxLfnu8"
                    target="_blank"
                    className="contacts-section-link"
                  >
                    {t("Contacts_production_address_street")}
                  </a>
                </div>
                <div className="contacts-section">
                  <h3 className="contacts-section-title">
                    {t("Contacts_phone_number")}
                  </h3>
                  <a
                    className="contacts-section-link"
                    href="tel:+380995316690"
                    target="_blank"
                  >
                    +38 &#40;099&#41; 531 66 90
                  </a>
                </div>
                <div className="contacts-section">
                  <h3 className="contacts-section-title">
                    {t("Contacts_Email")}
                  </h3>
                  <a
                    className="contacts-section-link"
                    href="mailto:maven.furniture.group@gmail.com"
                    target="_blank"
                  >
                    maven.furniture.group@gmail.com
                  </a>
                </div>
                <div className="contacts-section">
                  <h3 className="contacts-section-title">
                    {t("Contacts_social_media")}
                  </h3>
                  <div className="contacts-section-social-links">
                    <a
                      className="contacts-section-link"
                      href="https://www.instagram.com/katalog.mebeli_maven.group"
                      target="_blank"
                    >
                      {t("Contacts_social_media_inst")} @maven.furniture.group
                    </a>
                    <a
                      className="contacts-section-link"
                      href="https://www.instagram.com/maven.furniture.group"
                      target="_blank"
                    >
                      {t("Contacts_social_media_projects")}{" "}
                      @maven.furniture.group
                    </a>
                    <a
                      className="contacts-section-link"
                      href="https://www.tiktok.com/@maven.furniture.group"
                      target="_blank"
                    >
                      TikTok: @maven.furniture.group
                    </a>
                  </div>
                </div>
              </div>

              <div className="contacts-map">
                <iframe
                  className="contacts-map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5197.810017003558!2d30.635766190904434!3d46.31519109395907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7c951b6fd7df1%3A0xf291d4d7347723c8!2z0LLRg9C7LiDQn9GA0L7QvNC40YHQu9C-0LLQsCwgMSwg0KfQvtGA0L3QvtC80L7RgNGB0YzQuiwg0J7QtNC10YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDY4MDAw!5e0!3m2!1suk!2sua!4v1696445159503!5m2!1suk!2sua"
                  width="737"
                  height="504"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contactspage;
