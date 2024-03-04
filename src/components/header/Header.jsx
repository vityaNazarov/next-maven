"use client";

import Link from "next/link";
import MobileMenu from "../mobile-menu/MobileMenu";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TranslateBlock from "../translateBlock/translateBlock";
import "../../app/i18n";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useCartStore } from "@/utils/store";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { totalItems } = useCartStore();

  const { t } = useTranslation();

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!dropdownActive && !translate) {
      return;
    }

    const handleClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownActive(false);
        setTranslate(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropdownActive, translate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`page-header ${headerVisible ? "visible" : "hidden"}`}>
      <div className="container page-header-container">
        <nav className="page-nav">
          <Link className="header-logo" href="/">
            <Image
              className="logo-img"
              src="/images/svg/logo.svg"
              alt="логотип"
              // priority={true}
              width="112"
              height="48"
            />
          </Link>
          <ul className="menu list">
            <li className="menu-item">
              <div
                className="dropdown"
                onClick={() => setDropdownActive(!dropdownActive)}
                ref={dropdownRef}
              >
                <span className="menu-link link">{t("About_us")}</span>
                <svg
                  className={`dropdown-chevron ${
                    dropdownActive ? "active" : ""
                  }`}
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
              <div
                className={`desktop-dropdown-block ${
                  dropdownActive ? "active" : ""
                }`}
              >
                <ul className="desktop-dropdown list">
                  <li className="desktop-dropdown-item">
                    <Link href="/about-us">{t("About_the_company")} </Link>
                  </li>
                  <li className="desktop-dropdown-item">
                    <Link href="/career">{t("Career")} </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-item">
              <Link className="menu-link link" href="/projects">
                <span className="menu-link-text">{t("Projects")}</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link link" href="/catalog">
                <span className="menu-link-text">{t("Catalogue")}</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link link" href="/individual-projects">
                <span className="menu-link-text">
                  {t("Individual_projects")}
                </span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link link" href="/business">
                <span className="menu-link-text">В2В</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link link" href="/contacts">
                <span className="menu-link-text">{t("Contacts")}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="page-header-container-elements">
          <Link className="cart-link" href="/cart">
            <svg
              className="cart"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 22C5.1 22 4.75 21.85 4.45 21.55C4.15 21.25 4 20.9 4 20.5V7.5C4 7.1 4.15 6.75 4.45 6.45C4.75 6.15 5.1 6 5.5 6H8.25V5.75C8.25 4.7 8.6125 3.8125 9.3375 3.0875C10.0625 2.3625 10.95 2 12 2C13.05 2 13.9375 2.3625 14.6625 3.0875C15.3875 3.8125 15.75 4.7 15.75 5.75V6H18.5C18.9 6 19.25 6.15 19.55 6.45C19.85 6.75 20 7.1 20 7.5V20.5C20 20.9 19.85 21.25 19.55 21.55C19.25 21.85 18.9 22 18.5 22H5.5ZM5.5 20.5H18.5V7.5H15.75V9.75C15.75 9.9625 15.6777 10.1406 15.5331 10.2844C15.3885 10.4281 15.2094 10.5 14.9956 10.5C14.7819 10.5 14.6042 10.4281 14.4625 10.2844C14.3208 10.1406 14.25 9.9625 14.25 9.75V7.5H9.75V9.75C9.75 9.9625 9.67771 10.1406 9.53313 10.2844C9.38853 10.4281 9.20936 10.5 8.99563 10.5C8.78188 10.5 8.60417 10.4281 8.4625 10.2844C8.32083 10.1406 8.25 9.9625 8.25 9.75V7.5H5.5V20.5ZM9.75 6H14.25V5.75C14.25 5.11667 14.0333 4.58333 13.6 4.15C13.1667 3.71667 12.6333 3.5 12 3.5C11.3667 3.5 10.8333 3.71667 10.4 4.15C9.96667 4.58333 9.75 5.11667 9.75 5.75V6Z"
                fill="#232427"
              />
            </svg>

            {totalItems ? (
              <div className="header-total-items-circle">
                <span className="header-total-items-count">{totalItems}</span>
              </div>
            ) : (
              ""
            )}
          </Link>

          <button
            onClick={() => {
              setTranslate(!translate);
            }}
            ref={dropdownRef}
            type="button"
            className="translate-btn"
          >
            {i18next.language}
          </button>
          <div
            className={
              !translate ? " dropdown-translate" : " dropdown-translate active"
            }
          >
            <TranslateBlock setTranslate={setTranslate} />
          </div>

          <button
            type="button"
            className="mobile-menu-open"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <Image
              width="40"
              height="40"
              className="mobile-menu-open-burger"
              src="/images/svg/burger-menu.svg"
              alt="burger"
            />
          </button>
        </div>
      </div>
      <MobileMenu
        active={menuActive}
        setActive={setMenuActive}
        className="mobile-menu-nav"
      />
    </header>
  );
}

export default Header;
