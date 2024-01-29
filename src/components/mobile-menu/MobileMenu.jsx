"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function MobileMenu({ active, setActive }) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [active]);

  return (
    <div
      className={active ? "mobile-backdrop active" : "mobile-backdrop"}
      onClick={() => setActive(false)}
    >
      <div
        className="mobile-section"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="mobile-section-list list">
          <li className="mobile-section-item mobile-section-item-about">
            <div
              className="mobile-section-item-about-chevron"
              onClick={() => setOpen(!open)}
            >
              {t("About_us")}
              <svg
                className={
                  !open ? "mobile-menu-chevron" : "mobile-menu-chevron active"
                }
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5129 23.5384L11.4258 22.4513L17.8976 15.9795L11.4258 9.49485L12.5129 8.40771L20.0719 15.9795L12.5129 23.5384Z"
                  fill="#232427"
                />
              </svg>
            </div>

            {open ? (
              <ul className="mobile-section-list-secondary list">
                <li
                  className="mobile-section-item-secondary"
                  onClick={() => setActive(false)}
                >
                  <Link href="/about-us">{t("About_the_company")}</Link>
                </li>
                <li
                  className="mobile-section-item-secondary"
                  onClick={() => setActive(false)}
                >
                  <Link href="/career">{t("Career")}</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
          <li className="mobile-section-item" onClick={() => setActive(false)}>
            <Link href="/projects">{t("Projects")}</Link>
          </li>
          <li className="mobile-section-item" onClick={() => setActive(false)}>
            <Link href="/catalog">{t("Catalogue")}</Link>
          </li>
          <li className="mobile-section-item" onClick={() => setActive(false)}>
            <Link href="/individual-projects">{t("Individual_projects")}</Link>
          </li>
          <li className="mobile-section-item" onClick={() => setActive(false)}>
            <Link href="/business">В2В</Link>
          </li>
          <li className="mobile-section-item" onClick={() => setActive(false)}>
            <Link href="/contacts">{t("Contacts")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
