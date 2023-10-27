import Image from "next/image";

function Projects() {
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
        {/* ПРОЕКТИ */}

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
                Проекти
              </a>
            </div>
            <div>
              <h2 className="title">Проекти</h2>
              <div className="projects-block">
                <ul className="projects-block-list list">
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/miya.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/miya.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/miya.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">miya</h3>
                        <p className="projects-block-text">kyiv / 2022</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="./project.html">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/virgin-izakaya.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/virgin-izakaya.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/virgin-izakaya.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">virgin izakaya</h3>
                        <p className="projects-block-text">Dubai / 2022</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/radisson-blu-hotel.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/radisson-blu-hotel.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/radisson-blu-hotel.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">
                          Radisson Blu Hotel
                        </h3>
                        <p className="projects-block-text">kyiv / 2022</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/dragonfly.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/dragonfly.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/dragonfly.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">dragonfly</h3>
                        <p className="projects-block-text">almaty / 2021</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/frou-frou.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/frou-frou.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/frou-frou.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">frou-frou</h3>
                        <p className="projects-block-text">kiev / 2021</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/mad-coffee.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/mad-coffee.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/mad-coffee.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">mad coffee</h3>
                        <p className="projects-block-text">
                          chornomorsk / 2020
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/dacha.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/dacha.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/dacha.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">dacha</h3>
                        <p className="projects-block-text">kamyanske / 2022</p>
                      </div>
                    </a>
                  </li>
                  <li className="projects-block-item">
                    <a className="projects-block-link" href="">
                      <picture>
                        <source
                          media="(min-width:1300px)"
                          width="411"
                          height="415"
                          srcSet="
                            /images/img/projects/projects-desctop/frou-frou2.jpg
                          "
                        />
                        <source
                          media="(min-width:768px)"
                          width="343"
                          height="343"
                          srcSet="
                            /images/img/projects/projects-mobile/frou-frou2.jpg
                          "
                        />
                        <Image
                          className="projects-block-img"
                          width="342"
                          height="342"
                          src="/images/img/projects/projects-mobile/frou-frou2.jpg"
                          alt=""
                        />
                      </picture>

                      <div className="projects-info">
                        <h3 className="projects-block-title">frou-frou</h3>
                        <p className="projects-block-text">kiev / 2021</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;