"use client";

import React from "react";
import i18next from "i18next";

export default function TranslateBlock({ setTranslate }) {
  return (
    <div className="translate-block">
      <button
        disabled={i18next.language === "ua"}
        onClick={() => {
          i18next.changeLanguage("ua");
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
          i18next.changeLanguage("eng");
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
