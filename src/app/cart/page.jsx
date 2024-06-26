"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";
import i18next from "i18next";

function CartItem() {
  const [urIsOpen, setUrIsOpen] = useState(false);
  const [fizIsOpen, setFizIsOpen] = useState(false);
  const { products, removeFromCart, clearCart } = useCartStore();
  const { t } = useTranslation();
  const [loadingSubmit, setLoadingSubmit] = useState(false); // Новое состояние для отслеживания загрузки
  const [deliveryMethod, setDeliveryMethod] = useState("Нова пошта");
  const [paymentMethod, setPaymentMethod] = useState("Передоплата");
  const [successMessage, setSuccessMessage] = useState(false);
  const [quantities, setQuantities] = useState(1);
  const [formData, setFormData] = useState({
    legal_entity_name: "",
    legal_entity_phone: "",
    legal_entity_company_name: "",
    legal_entity_city: "",
    legal_entity_register_code: "",
    fiz_person_name: "",
    fiz_person_phone: "",
    fiz_person_email: "",
    fiz_person_city: "",
  });

  // Обработчик изменения quantity для конкретного товара
  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 1; // Если значение undefined, устанавливаем 0

      const newQuantity = currentQuantity + change;

      // Проверяем, чтобы новое количество не было меньше 1
      const updatedQuantities = {
        ...prevQuantities,
        [productId]: Math.max(1, newQuantity),
      };

      return updatedQuantities;
    });
  };

  useEffect(() => {
    // Создаем объект начальных значений, где каждый productId устанавливается в 1
    const initialQuantities = products.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});

    setQuantities(initialQuantities);
  }, [products]);

  function parcedNumber(num, quantity) {
    const numWithoutSpaces = num.replace(/\s/g, "") * quantity;
    let number = parseInt(numWithoutSpaces, 10);
    let formattedNumber = number.toLocaleString();
    return formattedNumber.replace(/,/g, " ");
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!fizIsOpen) {
      setFizIsOpen(true);
    } else {
      setLoadingSubmit(true);

      try {
        const response = await axios.post(
          "https://api.telegram.org/bot6647104359:AAFnou6kdnQ4uNo2npcjBxsXKVAmW1rIPVo/sendMessage",
          {
            chat_id: "-1002107177880",
            text: `Нова заявка!!! (Товар з кошика)\n\n${products.map(
              (item) =>
                `Товар: ${item.title} (Код: ${item.code}), Кількість: ${
                  quantities[item.id]
                }, Ціна: ${item.price} * ${quantities[item.id]}\n`
            )}
            \nІм'я юридичної особи: ${formData.legal_entity_name}
            \nТелефон юридичної особи: ${formData.legal_entity_phone}
            \nНазва компанії юридичної особи: ${
              formData.legal_entity_company_name
            }
            \nМісто юридичної особи: ${formData.legal_entity_city}
            \nКод ЄДРПОУ юридичної особи: ${formData.legal_entity_register_code}
            \n
            \nІм'я фізичної особи: ${formData.fiz_person_name}
            \nТелефон фізичної особи: ${formData.fiz_person_phone}
            \nЕлектронна пошта фізичної особи: ${formData.fiz_person_email}
            \nМiсто фізичної особи: ${formData.fiz_person_city}
            \n
            \nОбраний метод доставки: ${deliveryMethod}
            \nОбраний метод оплати: ${paymentMethod}
            \n\n`,
          }
        );

        if (!response.data.ok) {
          throw new Error("Failed to send message");
        }

        setFormData({
          legal_entity_name: "",
          legal_entity_phone: "",
          legal_entity_company_name: "",
          legal_entity_city: "",
          legal_entity_register_code: "",
          fiz_person_name: "",
          fiz_person_phone: "",
          fiz_person_email: "",
          fiz_person_city: "",
        });

        setUrIsOpen(false);
        setFizIsOpen(false);
        setDeliveryMethod("Нова пошта");
        setPaymentMethod("Передоплата");
        clearCart();
        setSuccessMessage(true);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        // После завершения запроса устанавливаем состояние загрузки в false
        setLoadingSubmit(false);
      }
    }
  };

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

      <div
        className={
          !successMessage ? "ind-modal-backdrop" : "ind-modal-backdrop active"
        }
        onClick={() => setSuccessMessage(false)}
      >
        <div
          className="success-block"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            onClick={() => setSuccessMessage(false)}
            className="success-block-close-btn"
          >
            <svg
              className="success-block-close-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6067 6.20659C18.8312 5.98204 18.8312 5.61797 18.6067 5.39342C18.3821 5.16887 18.0181 5.16887 17.7935 5.39342L12.0001 11.1868L6.20668 5.39342C5.98213 5.16887 5.61806 5.16887 5.39351 5.39342C5.16896 5.61797 5.16896 5.98204 5.39351 6.20659L11.1869 12L5.39351 17.7934C5.16896 18.018 5.16896 18.382 5.39351 18.6066C5.61806 18.8311 5.98213 18.8311 6.20668 18.6066L12.0001 12.8132L17.7935 18.6066C18.0181 18.8311 18.3821 18.8311 18.6067 18.6066C18.8312 18.382 18.8312 18.018 18.6067 17.7934L12.8133 12L18.6067 6.20659Z"
                fill="#232427"
              />
            </svg>
          </button>
          <h2 className="success-block-title">{t("Success_block_title")}</h2>
          <p className="success-block-text">{t("Success_block_text")}</p>
          <p className="success-block-text-thanks">
            {t("Success_block_text_thanks")}
          </p>
          <Link href="/" className="success-block-btn">
            {t("Success_block_btn")}
          </Link>
        </div>
      </div>

      <main>
        {/* КАТАЛОГ */}

        <section className="section-cart">
          <div className="container container-cart">
            {/* NAV-BAR */}

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
              <Link className="container-nav-link" href="/cart">
                {t("Breadcrumbs_cart")}
              </Link>
            </div>
            {/* CART */}

            <div>
              <h2 className="title cart-title">
                <Link href="/" className="arrow-back-link">
                  <svg
                    className="arrow-back-products "
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
                {t("Cart_title")}
              </h2>

              {products.length > 0 ? (
                <>
                  {products.map((item) => (
                    <div className="cart-product" key={item.id}>
                      <div className="cart-product-block">
                        <div>
                          <p className="cart-product-title">
                            {t("Cart_product")}
                          </p>
                        </div>
                        <div>
                          {item.img && (
                            <Image
                              className="cart-product-img"
                              width="80"
                              height="80"
                              src={item.img}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="b-bottom">
                        <div className="cart-product-name-of-product">
                          <div>
                            <p className="cart-product-title">
                              {t("Cart_product_name")}
                            </p>
                          </div>
                          <div className="cart-product-title-info-block">
                            <h3 className="cart-product-name-title">
                              {item.title}
                            </h3>
                            <p className="cart-product-name-subtitle">
                              {item.code}
                            </p>
                          </div>
                        </div>

                        <div className="cart-product-counter">
                          <div>
                            <p className="cart-product-title">
                              {t("Cart_product_quantity")}
                            </p>
                          </div>
                          <div className="cart-product-counter-block">
                            <button
                              className="cart-product-counter-btn"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <svg
                                className="cart-product-counter-svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12H19"
                                  stroke="#232427"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>

                            <p className="cart-product-counter-count">
                              {quantities[item.id]}
                            </p>

                            <button
                              className="cart-product-counter-btn"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <svg
                                className="cart-product-counter-svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 5V19"
                                  stroke="#232427"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5 12H19"
                                  stroke="#232427"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="cart-product-price">
                          <div>
                            <p className="cart-product-title">
                              {t("Cart_product_price")}
                            </p>
                          </div>
                          <div>
                            <div className="cart-product-price-block">
                              {/* <svg
                                className="cart-product-price-svg"
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
                              </svg> */}
                              {i18next.language === "ua" ? (
                                <svg
                                  className="cart-product-price-svg"
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.88 19.24C6.568 19.24 5.44 19.048 4.496 18.664C3.568 18.264 2.856 17.696 2.36 16.96C1.864 16.208 1.616 15.32 1.616 14.296C1.616 13.576 1.8 12.904 2.168 12.28C2.536 11.64 3.072 11.112 3.776 10.696C4.496 10.28 5.368 10.048 6.392 10L7.76 8.968C8.64 8.968 9.352 8.848 9.896 8.608C10.456 8.368 10.888 8.056 11.192 7.672C11.512 7.288 11.728 6.864 11.84 6.4C11.968 5.936 12.032 5.488 12.032 5.056C12.032 4.112 11.68 3.416 10.976 2.968C10.272 2.504 9.392 2.28 8.336 2.296C7.6 2.296 6.952 2.392 6.392 2.584C5.832 2.76 5.344 3.008 4.928 3.328C4.528 3.648 4.176 4.04 3.872 4.504C3.696 4.808 3.432 5.016 3.08 5.128C2.728 5.24 2.4 5.2 2.096 5.008C1.824 4.832 1.664 4.592 1.616 4.288C1.584 3.968 1.68 3.632 1.904 3.28C2.352 2.624 2.864 2.056 3.44 1.576C4.032 1.096 4.72 0.719999 5.504 0.447999C6.304 0.175999 7.224 0.0399995 8.264 0.0399995C9.432 0.0399995 10.48 0.231999 11.408 0.615999C12.352 0.999999 13.096 1.56 13.64 2.296C14.2 3.032 14.48 3.928 14.48 4.984C14.48 5.496 14.384 6.04 14.192 6.616C14.016 7.176 13.736 7.704 13.352 8.2C12.968 8.696 12.48 9.096 11.888 9.4C11.296 9.704 10.592 9.856 9.776 9.856L8.672 11.2C7.584 11.2 6.696 11.352 6.008 11.656C5.336 11.96 4.84 12.36 4.52 12.856C4.216 13.336 4.064 13.84 4.064 14.368C4.064 15.2 4.4 15.848 5.072 16.312C5.744 16.76 6.68 16.984 7.88 16.984C8.616 16.984 9.32 16.888 9.992 16.696C10.68 16.488 11.28 16.216 11.792 15.88C12.32 15.528 12.68 15.152 12.872 14.752C13.016 14.448 13.224 14.224 13.496 14.08C13.784 13.92 14.072 13.872 14.36 13.936C14.776 14.016 15.056 14.2 15.2 14.488C15.36 14.776 15.368 15.088 15.224 15.424C14.888 16.192 14.336 16.864 13.568 17.44C12.816 18.016 11.944 18.464 10.952 18.784C9.96 19.088 8.936 19.24 7.88 19.24ZM1.232 11.2C0.896 11.2 0.616 11.096 0.392 10.888C0.184 10.664 0.08 10.384 0.08 10.048C0.08 9.712 0.184 9.44 0.392 9.232C0.616 9.008 0.896 8.896 1.232 8.896H14.792C15.128 8.896 15.4 9.008 15.608 9.232C15.832 9.44 15.944 9.712 15.944 10.048C15.944 10.384 15.832 10.664 15.608 10.888C15.4 11.096 15.128 11.2 14.792 11.2H1.232Z"
                                    fill="#232427"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="cart-product-price-svg-euro"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15 21C13.0333 21 11.2833 20.4417 9.75 19.325C8.21667 18.2083 7.13333 16.7667 6.5 15H3V13H6.05C6 12.6 5.97933 12.2293 5.988 11.888C5.99667 11.5467 6.01733 11.2507 6.05 11H3V9H6.5C7.13333 7.23333 8.21667 5.79167 9.75 4.675C11.2833 3.55833 13.0333 3 15 3C16.15 3 17.2377 3.20433 18.263 3.613C19.2883 4.02167 20.2007 4.584 21 5.3L19.575 6.7C18.9583 6.16667 18.2627 5.75 17.488 5.45C16.7133 5.15 15.884 5 15 5C13.5833 5 12.3167 5.371 11.2 6.113C10.0833 6.855 9.24167 7.81733 8.675 9H15V11H8.075C8.00833 11.45 7.98333 11.846 8 12.188C8.01667 12.53 8.04167 12.8007 8.075 13H15V15H8.675C9.24167 16.1833 10.0833 17.146 11.2 17.888C12.3167 18.63 13.5833 19.0007 15 19C15.8833 19 16.7127 18.85 17.488 18.55C18.2633 18.25 18.959 17.8333 19.575 17.3L21 18.7C20.2 19.4167 19.2873 19.9793 18.262 20.388C17.2367 20.7967 16.1493 21.0007 15 21Z"
                                    fill="#232427"
                                  />
                                </svg>
                              )}
                              <p className="cart-product-price-title">
                                {/* {parcedNumber(item.price, quantities[item.id])} */}
                                {i18next.language === "ua"
                                  ? parcedNumber(
                                      item.price,
                                      quantities[item.id]
                                    )
                                  : parcedNumber(
                                      Math.floor(
                                        parseInt(
                                          item.price.replace(/\s/g, "")
                                        ) / 42
                                      ).toLocaleString("ua-UA"),
                                      quantities[item.id]
                                    )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="cart-product-bin">
                        <button
                          className="cart-product-btn-bin"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg
                            className="cart-product-btn-bin-svg"
                            width="48"
                            height="49"
                            viewBox="0 0 48 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12.5H10H42"
                              stroke="#979797"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M38.0003 12.5V40.5C38.0003 41.5609 37.5788 42.5783 36.8287 43.3284C36.0786 44.0786 35.0611 44.5 34.0003 44.5H14.0003C12.9394 44.5 11.922 44.0786 11.1718 43.3284C10.4217 42.5783 10.0003 41.5609 10.0003 40.5V12.5M16.0003 12.5V8.5C16.0003 7.43913 16.4217 6.42172 17.1718 5.67157C17.922 4.92143 18.9394 4.5 20.0003 4.5H28.0003C29.0611 4.5 30.0786 4.92143 30.8287 5.67157C31.5788 6.42172 32.0003 7.43913 32.0003 8.5V12.5"
                              stroke="#979797"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.9997 22.5V34.5"
                              stroke="#979797"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.0003 22.5V34.5"
                              stroke="#979797"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  <p className="cart-undertable-text cart-undertable-text-mobile">
                    {t("Cart_individual_changes")}
                  </p>
                  <form className="cart-form-order" onSubmit={handleFormSubmit}>
                    <h2 className="title">{t("Cart_placing_an_order")}</h2>
                    <div>
                      <div>
                        <p className="order-title">
                          <span className="order-title-num">1</span>
                          {t("Cart_your_data")}
                        </p>
                      </div>
                      <div className="type-of-customer-block">
                        <span
                          className="type-of-customer legal_entity"
                          onClick={() => setUrIsOpen(!urIsOpen)}
                        >
                          <p className="type-of-customer-title">
                            {t("Cart_legal_entity")}
                          </p>

                          <svg
                            className={`type-of-customer-chevron ${
                              urIsOpen ? "active" : ""
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
                        </span>

                        <span
                          className="type-of-customer individual_entrepreneur"
                          onClick={() => setFizIsOpen(!fizIsOpen)}
                        >
                          <p className="type-of-customer-title">
                            {t("Cart_individual_entrepreneur")}
                          </p>

                          <svg
                            className={`type-of-customer-chevron ${
                              fizIsOpen ? "active" : ""
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
                        </span>
                      </div>
                      <div>
                        {urIsOpen ? (
                          <div className="cart-person-info">
                            <div className="cart-person-fieldsblock">
                              <label
                                htmlFor="name"
                                className="cart-person-label"
                              >
                                {t("Cart_form_contact_person")}
                              </label>
                              <input
                                id="name"
                                placeholder={t(
                                  "Cart_form_contact_person_placeholder"
                                )}
                                type="text"
                                className="cart-person-input"
                                name="legal_entity_name"
                                value={formData.legal_entity_name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    legal_entity_name: e.target.value,
                                  })
                                }
                              />
                              <label
                                htmlFor="tel"
                                className="cart-person-label"
                              >
                                {t("Cart_form_phone_number")}
                              </label>
                              <input
                                id="tel"
                                placeholder={t(
                                  "Cart_form_phone_number_placeholder"
                                )}
                                type="text"
                                className="cart-person-input"
                                name="legal_entity_phone"
                                value={formData.legal_entity_phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    legal_entity_phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="cart-person-fieldsblock">
                              <label
                                htmlFor="company-name"
                                className="cart-person-label"
                              >
                                {t("Cart_form_company_name")}
                              </label>
                              <input
                                id="company-name"
                                placeholder={t(
                                  "Cart_form_company_name_placeholder"
                                )}
                                type="text"
                                className="cart-person-input"
                                name="legal_entity_company_name"
                                value={formData.legal_entity_company_name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    legal_entity_company_name: e.target.value,
                                  })
                                }
                              />
                              <label
                                htmlFor="town"
                                className="cart-person-label"
                              >
                                {t("Cart_form_city")}
                              </label>
                              <input
                                id="town"
                                placeholder={t("Cart_form_city_placeholder")}
                                type="text"
                                className="cart-person-input"
                                name="legal_entity_city"
                                value={formData.legal_entity_city}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    legal_entity_city: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="cart-person-fieldsblock">
                              <label
                                htmlFor="code"
                                className="cart-person-label"
                              >
                                {t("Cart_form_register_code")}
                              </label>
                              <input
                                id="code"
                                placeholder={t(
                                  "Cart_form_register_code_placeholder"
                                )}
                                type="text"
                                className="cart-person-input last"
                                name="legal_entity_register_code"
                                value={formData.legal_entity_register_code}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    legal_entity_register_code: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {fizIsOpen ? (
                          <div className="cart-person-info-fiz">
                            <div className="cart-person-fieldsblock cart-person-fieldsblock-fiz ">
                              <label
                                htmlFor="name"
                                className="cart-person-label"
                              >
                                {t("Form_name")}
                              </label>
                              <input
                                id="name"
                                placeholder={t("Form_name_placeholder")}
                                type="text"
                                className="cart-person-input"
                                name="fiz_person_name"
                                value={formData.fiz_person_name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fiz_person_name: e.target.value,
                                  })
                                }
                                required
                              />
                              <label
                                htmlFor="tel"
                                className="cart-person-label"
                              >
                                {t("Form_tel")}
                              </label>
                              <input
                                id="tel"
                                placeholder={t("Form_tel_placeholder")}
                                type="text"
                                className="cart-person-input"
                                name="fiz_person_phone"
                                value={formData.fiz_person_phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fiz_person_phone: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div className="cart-person-fieldsblock">
                              <label
                                htmlFor="email"
                                className="cart-person-label"
                              >
                                {t("Form_email")}
                              </label>
                              <input
                                id="email"
                                placeholder={t("Form_email_placeholder")}
                                type="text"
                                className="cart-person-input"
                                name="fiz_person_email"
                                value={formData.fiz_person_email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fiz_person_email: e.target.value,
                                  })
                                }
                                required
                              />
                              <label
                                htmlFor="town"
                                className="cart-person-label"
                              >
                                {t("Form_city")}
                              </label>
                              <input
                                id="town"
                                placeholder={t("Form_city_placeholder")}
                                type="text"
                                className="cart-person-input last"
                                name="fiz_person_city"
                                value={formData.fiz_person_city}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    fiz_person_city: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="shipping-and-payment">
                      <div className="type-of-ordery">
                        <p className="order-title">
                          <span className="order-title-num">2</span>
                          {t("Cart_delivery")}
                        </p>
                        <div className="type-of-ordery-form">
                          <input
                            checked={deliveryMethod === "Нова пошта"}
                            className="order-info-input"
                            type="radio"
                            name="Нова пошта"
                            id="new-posht"
                            value="Нова пошта"
                            onChange={() => setDeliveryMethod("Нова пошта")}
                          />
                          <label
                            htmlFor="new-posht"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_nova_poshta")}
                            </span>
                          </label>
                          <input
                            checked={deliveryMethod === "Meest Express"}
                            className="order-info-input"
                            type="radio"
                            name="Meest Express"
                            id="meest-posht"
                            value="Meest Express"
                            onChange={() => setDeliveryMethod("Meest Express")}
                          />
                          <label
                            htmlFor="meest-posht"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_meest_express")}
                            </span>
                          </label>
                          <input
                            checked={deliveryMethod === "Delivery"}
                            className="order-info-input"
                            type="radio"
                            name="Delivery"
                            id="delivery-posht"
                            value="Delivery"
                            onChange={() => setDeliveryMethod("Delivery")}
                          />
                          <label
                            htmlFor="delivery-posht"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_delivery")}
                            </span>
                          </label>
                          <input
                            checked={deliveryMethod === "Самовивіз"}
                            className="order-info-input"
                            type="radio"
                            name="Самовивіз"
                            id="by-myself"
                            value="Самовивіз"
                            onChange={() => setDeliveryMethod("Самовивіз")}
                          />
                          <label
                            htmlFor="by-myself"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_pickup")}
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="type-of-payment">
                        <p className="order-title">
                          <span className="order-title-num">3</span>
                          {t("Cart_payment")}
                        </p>
                        <div className="type-of-payment-form">
                          <input
                            checked={paymentMethod === "Передоплата"}
                            className="order-info-input"
                            type="radio"
                            name="Передоплата"
                            id="advance-payment"
                            value="Передоплата"
                            onChange={() => setPaymentMethod("Передоплата")}
                          />
                          <label
                            htmlFor="advance-payment"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_advance_payment")}
                            </span>
                          </label>

                          <input
                            checked={paymentMethod === "Повна оплата"}
                            className="order-info-input"
                            type="radio"
                            name="Повна оплата"
                            id="full-payment"
                            value="Повна оплата"
                            onChange={() => setPaymentMethod("Повна оплата")}
                          />
                          <label
                            htmlFor="full-payment"
                            className="order-info-label"
                          >
                            <span className="order-info-title">
                              {t("Cart_full_payment")}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="order-submit-reverse">
                      <button
                        className="order-btn"
                        type="submit"
                        disabled={loadingSubmit}
                      >
                        {loadingSubmit ? (
                          <ClipLoader color="#232427" size={30} />
                        ) : (
                          t("Cart_order_btn")
                        )}
                      </button>

                      <p className="personal-info">
                        {t("Cart_text_under_btn")}
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="cart-page-empty">{t("Cart_page_empty")}</div>
                  <Link
                    href="/catalog"
                    className="chevron-btn chevron-btn-carousel"
                  >
                    <p>{t("to_the_catalogue")}</p>
                    <svg
                      className="chevron-svg"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5129 23.5384L11.4258 22.4513L17.8976 15.9795L11.4258 9.49485L12.5129 8.40771L20.0719 15.9795L12.5129 23.5384Z"
                        fill="#232427"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CartItem;
