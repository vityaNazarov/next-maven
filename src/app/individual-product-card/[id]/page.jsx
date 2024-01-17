"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IndividualBtn from "@/components/individual-btn/individual-btn";
import ImageViewer from "@/components/imageViewer/ImageViewer";
import Spinner from "@/components/spinner/Spinner";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    mode: "cors",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ProductId = ({ params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(params.id);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

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
                href="/individual-products-section"
              >
                {t("Breadcrumbs_individual_products")}
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
                href={`/individual-products-section/${data.category}`}
              >
                {i18next.language === "ua"
                  ? data.categoryname
                  : data.categorynameEng}
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
                {data.name}
              </Link>
            </div>

            <div>
              <Link
                href={`/individual-products-section/${data.category}`}
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

              <div className="product-card-block">
                <div className="product-card-img">
                  <ImageViewer imgs={data.images} />

                  <div className="product-card-gallery-info ind-product-card-gallery-info">
                    <div className="product-card-gallery-price-block ind-product-card-gallery-price-block">
                      <div className="product-card-price-none">
                        <h2 className="product-card-info-title ind-product-card-info-title">
                          {data.name}
                        </h2>
                        <p className="product-card-info-number">
                          {t("Product_id_code")} {data.code}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card-info">
                  <div className="product-card-info-none ind-product-card-info-none">
                    <h2 className="product-card-info-title">{data.name}</h2>
                    <p className="product-card-info-number">
                      {t("Product_id_code")} {data.code}
                    </p>
                  </div>

                  <table className="product-card-info-table ind-product-card-info-table">
                    <tbody>
                      <tr>
                        <td className="ind-product-card-info-sizes" colspan="2">
                          {t("Product_id_sizes")}
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_length")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.length} mm
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_width")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.width} mm
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_height")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.height} mm
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_seatheight")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.seatheight} mm
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_weight")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.weight} kg
                        </td>
                      </tr>
                      <tr className="product-card-info-table-tr">
                        <td className="product-card-info-table-th1">
                          {t("Product_id_volume")}
                        </td>
                        <td className="product-card-info-table-th2">
                          {data.volume} m3
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="ind-materials-text">
                    <div className="product-card-info-none ind-product-card-info-block">
                      <h2 className="product-card-info-title">{data.name}</h2>
                      <p className="product-card-info-number">
                        {t("Product_id_code")} {data.code}
                      </p>
                    </div>

                    <p className="ind-product-card-info-materials-text">
                      {t("Individual_product_all_details")}
                    </p>

                    <IndividualBtn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductId;
