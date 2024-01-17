"use client";

import React from "react";
import i18next from "i18next";

export default function TranslateBlock({ setTranslate }) {
  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="translate-block">
      <button
        onClick={() => {
          handleChangeLng("ua");
          setTranslate(false);
        }}
        className={
          i18next.language === "ua"
            ? "translate-block-btn active"
            : "translate-block-btn"
        }
      >
        ua
      </button>
      <button
        onClick={() => {
          handleChangeLng("eng");
          setTranslate(false);
        }}
        className={
          i18next.language === "eng"
            ? "translate-block-btn active"
            : "translate-block-btn"
        }
      >
        eng
      </button>
    </div>
  );
}
