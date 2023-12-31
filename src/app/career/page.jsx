"use client";

import Link from "next/link";
import { useState } from "react";

function Career() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

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
        {/* КАР’ЄРА */}

        <section className="career">
          <div className="container container-career">
            <div className="container-nav">
              <Link className="container-nav-link" href="/">
                Головна
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
                Про Нас
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
              <Link className="container-nav-link" href="/career">
                Кар’єра
              </Link>
            </div>
            <div className="career-block">
              <div className="career-info">
                <h2 className="title">Кар’єра</h2>
                <p className="career-text">
                  Ми завжди раді амбітним, захопленим своєю справою людям. Ви
                  зможете максимально використовувати свої таланти в різних
                  напрямках нашої діяльності. Від створення меблів до їх
                  реалізації.
                </p>
                <p className="career-text">
                  Зв&#39;яжіться з нами якщо Ви хочете потрапити в дружній
                  колектив, працювати з якісною продукцією та стати частиною
                  Maven Group.
                </p>
              </div>
              <div className="career-form-block">
                <h2 className="career-form-title">
                  Ви би хотіли працювати у нас?
                </h2>
                <form className="career-form">
                  <label htmlFor="" className="career-form-label">
                    Ім‘я
                  </label>
                  <input
                    className="career-form-input"
                    type="text"
                    placeholder="Введіть ім‘я*"
                    name="user_name"
                    required
                  />

                  <label htmlFor="" className="career-form-label">
                    Електронна пошта
                  </label>
                  <input
                    className="career-form-input"
                    type="email"
                    placeholder="Введіть електронну пошту*"
                    name="user_email"
                    required
                  />

                  <label htmlFor="" className="career-form-label">
                    Телефон
                  </label>
                  <input
                    className="career-form-input"
                    type="tel"
                    placeholder="Введіть телефон*"
                    name="user_phone"
                    required
                  />

                  <label htmlFor="" className="career-form-label">
                    Місто
                  </label>
                  <input
                    className="career-form-input"
                    type="text"
                    placeholder="Введіть місто*"
                    name="user_city"
                    required
                  />

                  <div className="textarea-input-block">
                    <label htmlFor="" className="career-form-label-textarea">
                      Повідомлення
                    </label>
                    <textarea
                      className="career-form-input-textarea"
                      name="user_message"
                      placeholder="Введіть повідомлення"
                    ></textarea>
                    <label className="custom-file">
                      <input
                        type="file"
                        onChange={({ target: { files } }) => {
                          files[0] && setFileName(files[0].name);
                          if (files) {
                            setFile("null");
                          }
                        }}
                      />
                      <span className="input-file-span">
                        {file ? (
                          ""
                        ) : (
                          <svg
                            className="input-file-svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59723 21.9983 8.00505 21.9983C6.41286 21.9983 4.88589 21.3658 3.76005 20.24C2.6342 19.1141 2.00171 17.5872 2.00171 15.995C2.00171 14.4028 2.6342 12.8758 3.76005 11.75L12.95 2.55998C13.7006 1.80942 14.7186 1.38776 15.78 1.38776C16.8415 1.38776 17.8595 1.80942 18.61 2.55998C19.3606 3.31054 19.7823 4.32852 19.7823 5.38998C19.7823 6.45144 19.3606 7.46942 18.61 8.21998L9.41005 17.41C9.03476 17.7853 8.52577 17.9961 7.99505 17.9961C7.46432 17.9961 6.95533 17.7853 6.58005 17.41C6.20476 17.0347 5.99393 16.5257 5.99393 15.995C5.99393 15.4643 6.20476 14.9553 6.58005 14.58L15.07 6.09998"
                              stroke="#979797"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </label>
                  </div>
                  <span className="uploaded">
                    <p className="uploaded-text">{fileName}</p>
                    <svg
                      className="uploaded-delete"
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        setFileName("No selected file");
                        setFile(null);
                      }}
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
                  </span>

                  <p className="career-textarea-text">
                    *Нажавши кнопку “Відправити” Ви погоджуєтесь на обробку
                    персональних даних
                  </p>
                  <button className="career-form-btn" type="submit">
                    Відправити
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Career;
