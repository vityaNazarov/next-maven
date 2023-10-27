import Image from "next/image";

function IndividualProjects() {
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
        {/* ІНДИВІДУАЛЬНІ ПРОЕКТИ */}
        <section className="projects">
          <div className="container projects-container">
            <div className="container-nav">
              <a className="container-nav-link" href="">
                Головна
              </a>
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
              <a className="container-nav-link" href="">
                Індивідуальні проекти
              </a>
            </div>
            <div>
              <h2 className="title">індивідуальні проекти</h2>
              <p className="individual-suptitle">
                Яким шляхом ми можемо здійснити Ваш індивідуальний проект?
              </p>
              <div className="steps-block">
                <div className="steps-section">
                  <span className="steps-section-num">01</span>
                  <p className="steps-section-text steps-section-text-first">
                    Ви залишаєте нам заявку для зворотнього зв’язку
                  </p>
                </div>
                <div className="steps-section">
                  <span className="steps-section-num">02</span>
                  <p className="steps-section-text">
                    Ми зв’язуємся з вами та обговорюємо всі деталі вашого
                    індивідуального проекта
                  </p>
                </div>
                <div className="steps-section">
                  <span className="steps-section-num">03</span>
                  <p className="steps-section-text">
                    Надішліть проект, або фото з розмірами, ми підготуєм
                    комерційну пропозицію
                  </p>
                </div>
                <div className="steps-section">
                  <span className="steps-section-num">04</span>
                  <p className="steps-section-text">
                    Узгоджений проект запускається в роботу і Ви отримуєте саме
                    той результат, який ви хотіли
                  </p>
                </div>
              </div>
              <div className="individual-projects-all">
                <div className="individual-projects-one">
                  <div className="individual-projects-one-text-block">
                    <p className="individual-projects-one-text">
                      Наша компанія може виготовити меблі за індивідуальним
                      дизайном та розмірами, щоб створити ваш унікальний
                      простір.
                    </p>
                    <p className="individual-projects-one-text individual-projects-one-text-secondary">
                      Надсилайте запит ми обов’язково втілимо Вашу мрію в життя!
                    </p>
                  </div>
                  <picture>
                    <source
                      width="733"
                      height="210"
                      media="(min-width: 1300px)"
                      srcSet="
                        /images/img/individual-projects/ind-desctop/ind-img2.jpg
                      "
                    />
                    <source
                      width="344"
                      height="160"
                      media="(min-width: 768px)"
                      srcSet="
                        /images/img/individual-projects/ind-tablet/ind-img2.jpg
                      "
                    />
                    <Image
                      className="individual-projects-one-img"
                      width="343"
                      height="305"
                      src="/images/img/individual-projects/ind-mobile/ind-img2.jpg"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="individual-projects-two">
                  <picture>
                    <source
                      width="519"
                      height="270"
                      media="(min-width: 1300px)"
                      srcSet="
                        /images/img/individual-projects/ind-desctop/ind-img1.jpg
                      "
                    />
                    <source
                      width="344"
                      height="384"
                      media="(min-width: 768px)"
                      srcSet="
                        /images/img/individual-projects/ind-tablet/ind-img1.jpg
                      "
                    />
                    <Image
                      className="individual-projects-two-img"
                      width="343"
                      height="449"
                      src="/images/img/individual-projects/ind-mobile/ind-img1.jpg"
                      alt=""
                    />
                  </picture>
                  <div className="individual-projects-two-text-block">
                    <p className="individual-projects-two-text">
                      Виготовлення меблів за індивідуальними проектами гарантує
                      якісний підхід до кожного замовлення. Ви можете самостійно
                      обрати дизайн, конструкцію та матеріали, наші фахівці
                      завжди готові надати професійну консультацію щодо вибору
                      оптимального варіанту. Замовлення меблів за індивідуальним
                      проектом - це вдале капіталовкладення, оскільки вони
                      будуть служити вам на протязі багатьох років, не лише
                      прикрашати ваш інтерʼєр, а й максимально ефективно
                      використовувати кожен сантиметр простору. Наша компанія
                      використовує тільки якісні та сучасні матеріали, які
                      гарантують довговічність та ефективність використання.
                    </p>
                  </div>
                </div>
              </div>
              <div className="individual-projects-form-block">
                <h2 className="individual-form-title">зв’яжіться з нами</h2>
                <form className="career-form">
                  <label htmlFor="" className="career-form-label">
                    Ім‘я
                  </label>
                  <input
                    className="career-form-input individual-career-form-input"
                    type="text"
                    placeholder="Введіть ім‘я*"
                    name="user_name"
                    required
                  />
                  <label htmlFor="" className="career-form-label">
                    Електронна пошта
                  </label>
                  <input
                    className="career-form-input individual-career-form-input"
                    type="email"
                    placeholder="Введіть електронну пошту*"
                    name="user_email"
                    required
                  />
                  <label htmlFor="" className="career-form-label">
                    Телефон
                  </label>
                  <input
                    className="career-form-input individual-career-form-input"
                    type="tel"
                    placeholder="Введіть телефон*"
                    name="user_phone"
                    required
                  />
                  <label htmlFor="" className="career-form-label">
                    Місто
                  </label>
                  <input
                    className="career-form-input individual-career-form-input"
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
                      className="career-form-input-textarea individual-career-form-input"
                      name="user_message"
                      placeholder="Введіть повідомлення"
                    ></textarea>
                    <label className="custom-file">
                      <input type="file" />
                      <span className="input-file-span">
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
                      </span>
                    </label>
                  </div>
                  <p className="career-textarea-text individual-textarea-text">
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

export default IndividualProjects;
