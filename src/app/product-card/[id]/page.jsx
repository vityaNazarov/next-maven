"use client";
import { useEffect, useState } from "react";
import ImageViewer from "@/components/imageViewer/ImageViewer";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useCartStore } from "@/utils/store";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

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

  const [addedToCartMap, setAddedToCartMap] = useState({});

  const { products, addToCart } = useCartStore();

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

  useEffect(() => {
    // Проверка наличия товара в корзине при каждом изменении products
    const cartMap = {};
    products.forEach((product) => {
      cartMap[product.id] = true;
    });
    setAddedToCartMap(cartMap);
  }, [products]);

  const handleCart = () => {
    addToCart({
      id: data._id,
      title: data.name,
      code: data.code,
      price: data.price,
      img: data.img1,
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
              <Link
                className="container-nav-link"
                href={`/serial-products-section/${data.category}`}
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
                href={`/serial-products-section/${data.category}`}
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

                  <div className="product-card-gallery-info">
                    <a
                      className="product-card-gallery-link product-card-gallery-link-none"
                      href=""
                    >
                      {t("Product_id_product_colors")}
                    </a>
                    <div className="product-card-gallery-price-block">
                      <div className="product-card-price-none">
                        <h2 className="product-card-info-title">{data.name}</h2>
                        <p className="product-card-info-number">
                          {t("Product_id_code")} {data.code}
                        </p>
                      </div>
                      <div className="product-card-price-info">
                        <p className="product-card-gallery-price">
                          <svg
                            className="product-card-gallery-price-svg"
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
                          <span className="product-card-gallery-price-cost">
                            {data.price}
                          </span>
                        </p>
                        <p className="product-card-gallery-pricetext">
                          {t("Product_id_individual_changes")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-card-info">
                  <div className="product-card-info-none">
                    <h2 className="product-card-info-title">{data.name}</h2>
                    <p className="product-card-info-number">
                      {t("Product_id_code")} {data.code}
                    </p>
                  </div>

                  <table className="product-card-info-table">
                    <tbody>
                      <tr>
                        <td className="product-card-info-sizes">
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
                  <div className="product-materials">
                    <p className="product-card-info-materials">
                      {t("Product_id_materials")}
                    </p>
                    <ul className="product-card-info-materials-list">
                      <li className="product-card-info-materials-item">
                        {t("Product_id_materials_legs")}{" "}
                        {i18next.language === "ua" ? data.legs : data.legsEng}
                      </li>
                      <li className="product-card-info-materials-item">
                        {t("Product_id_materials_upholstery")}{" "}
                        {i18next.language === "ua"
                          ? data.upholstery
                          : data.upholsteryEng}
                      </li>
                      <li className="product-card-info-materials-item">
                        {t("Product_id_materials_frame")}
                        {i18next.language === "ua" ? data.frame : data.frameEng}
                      </li>
                    </ul>
                    <p className="product-card-info-materials-text">
                      {t("Product_id_certificates_of_quality")}
                    </p>

                    {addedToCartMap[data._id] ? (
                      <Link href="/cart">
                        <button className=" product-card-gallery-btn-added">
                          {t("Product_id_btn_goto_cart")}
                        </button>
                      </Link>
                    ) : (
                      <>
                        <button
                          className="product-card-gallery-btn"
                          onClick={handleCart}
                        >
                          <svg
                            className="product-card-gallery-btn-svg"
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
                          {t("Product_id_btn_add_to_cart")}
                        </button>
                      </>
                    )}
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
