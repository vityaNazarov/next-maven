"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useCartStore } from "@/utils/store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Category = ({ params }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialAddedToCartMap = {};
  const [addedToCartMap, setAddedToCartMap] = useState(initialAddedToCartMap);

  const { t } = useTranslation();
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products`, {
          mode: "cors",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        const { category } = params;
        const filteredData = data.filter((item) => item.category === category);
        setDataCategory(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  const handleAddToCart = (item) => {
    addToCart({
      id: item._id,
      title: item.name,
      code: item.code,
      img: item.img1,
      price: item.price,
    });

    toast.success(t("Product_id_btn_added_to_cart"), { autoClose: 1500 });
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner loading={loading} />
      </div>
    );
  }

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
        <section className="catalog">
          <div className="container catalog-container">
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
              <Link className="container-nav-link" href="/catalog">
                {t("Breadcrumbs_catalog")}
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
              <Link
                className="container-nav-link"
                href="/serial-products-section"
              >
                {t("Breadcrumbs_serial_products")}
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
              <Link className="container-nav-link" href="">
                {i18next.language === "ua"
                  ? dataCategory[0].categoryname
                  : dataCategory[0].categorynameEng}
              </Link>
            </div>

            <div>
              <h2 className="title serial-products-title">
                <Link
                  href="/serial-products-section"
                  className="arrow-back-link"
                >
                  <svg
                    className="arrow-back-products"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0637 11.6136L9.24834 10.8232L13.5445 6.52703H0.29834V5.39245H13.5445L9.23297 1.0809L10.0483 0.290527L15.7175 5.95975L10.0637 11.6136Z"
                      fill="#232427"
                    />
                  </svg>
                </Link>

                {i18next.language === "ua"
                  ? dataCategory[0].categoryname
                  : dataCategory[0].categorynameEng}
              </h2>

              <div className="subsection-caegories">
                <ul className="subsection-caegories-list list">
                  {dataCategory.map((item) => (
                    <li className="subsection-caegories-item" key={item._id}>
                      <div className="serial-caegories-img-wrapper">
                        <Link
                          className="subsection-caegories-link"
                          href={`/product-card/${item._id}`}
                        >
                          <Image
                            width={150}
                            height={150}
                            className="subsection-caegories-img"
                            src={item.img1}
                            alt={item.name}
                          />
                        </Link>
                      </div>
                      <div className="subsection-caegories-info">
                        <div className="subsection-caegories-infoproduct">
                          <h3 className="subsection-caegories-nameproduct">
                            {item.name}
                          </h3>
                          <div className="priceproduct">
                            <svg
                              className="subsection-caegories-priceproduct-svg"
                              width="16"
                              height="20"
                              viewBox="0 0 16 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.88 19.24C6.568 19.24 5.44 19.048 4.496 18.664C3.568 18.264 2.856 17.696 2.36 16.96C1.864 16.208 1.616 15.32 1.616 14.296C1.616 13.576 1.8 12.904 2.168 12.28C2.536 11.64 3.072 11.112 3.776 10.696C4.496 10.28 5.368 10.048 6.392 10L7.76 8.968C8.64 8.968 9.352 8.848 9.896 8.608C10.456 8.368 10.888 8.056 11.192 7.672C11.512 7.288 11.728 6.864 11.84 6.4C11.968 5.936 12.032 5.488 12.032 5.056C12.032 4.112 11.68 3.416 10.976 2.968C10.272 2.504 9.392 2.28 8.336 2.296C7.6 2.296 6.952 2.392 6.392 2.584C5.832 2.76 5.344 3.008 4.928 3.328C4.528 3.648 4.176 4.04 3.872 4.504C3.696 4.808 3.432 5.016 3.08 5.128C2.728 5.24 2.4 5.2 2.096 5.008C1.824 4.832 1.664 4.592 1.616 4.288C1.584 3.968 1.68 3.632 1.904 3.28C2.352 2.624 2.864 2.056 3.44 1.576C4.032 1.096 4.72 0.719999 5.504 0.447999C6.304 0.175999 7.224 0.0399995 8.264 0.0399995C9.432 0.0399995 10.48 0.231999 11.408 0.615999C12.352 0.999999 13.096 1.56 13.64 2.296C14.2 3.032 14.48 3.928 14.48 4.984C14.48 5.496 14.384 6.04 14.192 6.616C14.016 7.176 13.736 7.704 13.352 8.2C12.968 8.696 12.48 9.096 11.888 9.4C11.296 9.704 10.592 9.856 9.776 9.856L8.672 11.2C7.584 11.2 6.696 11.352 6.008 11.656C5.336 11.96 4.84 12.36 4.52 12.856C4.216 13.336 4.064 13.84 4.064 14.368C4.064 15.2 4.4 15.848 5.072 16.312C5.744 16.76 6.68 16.984 7.88 16.984C8.616 16.984 9.32 16.888 9.992 16.696C10.68 16.488 11.28 16.216 11.792 15.88C12.32 15.528 12.68 15.152 12.872 14.752C13.016 14.448 13.224 14.224 13.496 14.08C13.784 13.92 14.072 13.872 14.36 13.936C14.776 14.016 15.056 14.2 15.2 14.488C15.36 14.776 15.368 15.088 15.224 15.424C14.888 16.192 14.336 16.864 13.568 17.44C12.816 18.016 11.944 18.464 10.952 18.784C9.96 19.088 8.936 19.24 7.88 19.24ZM1.232 11.2C0.896 11.2 0.616 11.096 0.392 10.888C0.184 10.664 0.08 10.384 0.08 10.048C0.08 9.712 0.184 9.44 0.392 9.232C0.616 9.008 0.896 8.896 1.232 8.896H14.792C15.128 8.896 15.4 9.008 15.608 9.232C15.832 9.44 15.944 9.712 15.944 10.048C15.944 10.384 15.832 10.664 15.608 10.888C15.4 11.096 15.128 11.2 14.792 11.2H1.232Z"
                                fill="#979797"
                              />
                            </svg>
                            <p className="subsection-caegories-priceproduct">
                              {item.price}
                            </p>
                          </div>
                        </div>

                        {!addedToCartMap[item._id] ? (
                          <button
                            className="subsection-caegories-btn"
                            onClick={() => handleAddToCart(item)}
                          >
                            <svg
                              className="subsection-caegories-svg"
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
                          </button>
                        ) : (
                          <button className="subsection-caegories-btn-done">
                            <svg
                              className="subsection-caegories-svg"
                              width="24"
                              height="22"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.55 31L11.85 25.3L13.275 23.875L17.55 28.15L26.725 18.975L28.15 20.4L17.55 31Z"
                                fill="#232427"
                              />
                              <path
                                d="M9.16663 36.6667C8.49996 36.6667 7.91663 36.4167 7.41663 35.9167C6.91663 35.4167 6.66663 34.8334 6.66663 34.1667V12.5C6.66663 11.8334 6.91663 11.25 7.41663 10.75C7.91663 10.25 8.49996 10 9.16663 10H13.75V9.58337C13.75 7.83337 14.3541 6.35421 15.5625 5.14587C16.7708 3.93754 18.25 3.33337 20 3.33337C21.75 3.33337 23.2291 3.93754 24.4375 5.14587C25.6458 6.35421 26.25 7.83337 26.25 9.58337V10H30.8333C31.5 10 32.0833 10.25 32.5833 10.75C33.0833 11.25 33.3333 11.8334 33.3333 12.5V34.1667C33.3333 34.8334 33.0833 35.4167 32.5833 35.9167C32.0833 36.4167 31.5 36.6667 30.8333 36.6667H9.16663ZM9.16663 34.1667H30.8333V12.5H26.25V16.25C26.25 16.6042 26.1295 16.9011 25.8885 17.1407C25.6475 17.3802 25.3489 17.5 24.9927 17.5C24.6364 17.5 24.3402 17.3802 24.1041 17.1407C23.868 16.9011 23.75 16.6042 23.75 16.25V12.5H16.25V16.25C16.25 16.6042 16.1295 16.9011 15.8885 17.1407C15.6475 17.3802 15.3489 17.5 14.9927 17.5C14.6364 17.5 14.3402 17.3802 14.1041 17.1407C13.868 16.9011 13.75 16.6042 13.75 16.25V12.5H9.16663V34.1667ZM16.25 10H23.75V9.58337C23.75 8.52782 23.3888 7.63893 22.6666 6.91671C21.9444 6.19448 21.0555 5.83337 20 5.83337C18.9444 5.83337 18.0555 6.19448 17.3333 6.91671C16.6111 7.63893 16.25 8.52782 16.25 9.58337V10Z"
                                fill="#232427"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
