"use client";
import dynamic from "next/dynamic";
import React from "react";
import { useTranslation } from "react-i18next";
import Spinner from "@/components/spinner/Spinner";
import i18next from "i18next";

// Динамический импорт для использования на клиентской стороне
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));

async function GetFetch(id) {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

const ProjectId = ({ params }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true); // Состояние загрузки данных

  const { t } = useTranslation();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetFetch(params.id);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // После завершения запроса устанавливаем loading в false
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    // Если данные загружаются, отображаем спиннер
    return (
      <div className="spinner-container">
        <Spinner loading={loading} />
      </div>
    );
  }

  // Когда данные загружены, отображаем контент

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
        <section className="project">
          <div className="container container-project">
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
              <Link className="container-nav-link" href="/projects">
                {t("Breadcrumbs_projects")}
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
              <div className="project-info">
                <Link href="/projects" className="arrow-back-link">
                  <svg
                    className="arrow-back"
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

                <div className="project-info-about">
                  <h2 className="project-title">{data.name}</h2>
                  <p className="project-place">{data.place}</p>
                </div>

                <div className="project-inst-link">
                  <svg
                    className="project-link-svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9999 18.6666C15.2376 18.6666 16.4246 18.1749 17.2998 17.2998C18.1749 16.4246 18.6666 15.2376 18.6666 13.9999C18.6666 12.7622 18.1749 11.5753 17.2998 10.7001C16.4246 9.82492 15.2376 9.33325 13.9999 9.33325C12.7622 9.33325 11.5753 9.82492 10.7001 10.7001C9.82492 11.5753 9.33325 12.7622 9.33325 13.9999C9.33325 15.2376 9.82492 16.4246 10.7001 17.2998C11.5753 18.1749 12.7622 18.6666 13.9999 18.6666Z"
                      stroke="#232427"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 18.6667V9.33333C3.5 7.78624 4.11458 6.30251 5.20854 5.20854C6.30251 4.11458 7.78624 3.5 9.33333 3.5H18.6667C20.2138 3.5 21.6975 4.11458 22.7915 5.20854C23.8854 6.30251 24.5 7.78624 24.5 9.33333V18.6667C24.5 20.2138 23.8854 21.6975 22.7915 22.7915C21.6975 23.8854 20.2138 24.5 18.6667 24.5H9.33333C7.78624 24.5 6.30251 23.8854 5.20854 22.7915C4.11458 21.6975 3.5 20.2138 3.5 18.6667Z"
                      stroke="#232427"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20.4167 7.59511L20.4284 7.58228"
                      stroke="#232427"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href={data.inst} target="_blank" className="project-link">
                    {t("Project_id_inst")}
                  </a>
                </div>
              </div>

              <p className="project-text-about">
                {i18next.language === "ua" ? data.text : data.textEng}
              </p>

              <div className="project-gallery">
                <ul className="project-gallery-list list">
                  <li className="project-gallery-item">
                    <picture>
                      <source
                        media="(min-width: 1300px)"
                        width="411"
                        height="415"
                        srcSet={data.imgDesk1}
                      />
                      <source
                        media="(min-width: 768px)"
                        width="226"
                        height="228"
                        srcSet={data.imgMob1}
                      />
                      <Image
                        width="167"
                        height="170"
                        className="project-img"
                        src={data.imgMob1}
                        alt={data.name}
                      />
                    </picture>
                  </li>
                  <li className="project-gallery-item">
                    <picture>
                      <source
                        media="(min-width: 1300px)"
                        width="411"
                        height="415"
                        srcSet={data.imgDesk2}
                      />
                      <source
                        media="(min-width: 768px)"
                        width="226"
                        height="228"
                        srcSet={data.imgMob2}
                      />
                      <Image
                        width="167"
                        height="170"
                        className="project-img"
                        src={data.imgMob2}
                        alt={data.name}
                      />
                    </picture>
                  </li>
                  <li className="project-gallery-item">
                    <picture>
                      <source
                        media="(min-width: 1300px)"
                        width="411"
                        height="415"
                        srcSet={data.imgDesk3}
                      />
                      <source
                        media="(min-width: 768px)"
                        width="226"
                        height="228"
                        srcSet={data.imgMob3}
                      />
                      <Image
                        width="167"
                        height="170"
                        className="project-img"
                        src={data.imgMob3}
                        alt={data.name}
                      />
                    </picture>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="project-title-used-items">
                {t("Project_id_used_items")}
              </h2>
              <ul className="project-used list">
                {data.usedItems && data.usedItems[0]?.img ? (
                  data.usedItems.map((item, ind) => (
                    <li className="project-used-item" key={ind}>
                      <Link
                        className="project-used-link"
                        href={`/serial-products-section/${item.link}`}
                      >
                        <Image
                          className="project-used-furniture"
                          width="167"
                          height="167"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="project-used-info">
                          <h3 className="project-used-title">{item.name}</h3>
                          <p className="project-used-text">
                            {t("Project_id_code")} {item.code}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className="used_items_text">
                    {t("Project_used_items_text")}
                  </p>
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectId;
