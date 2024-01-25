"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { eng } from "./copies/eng";
import { ua } from "./copies/ua";

const resources = {
  eng: { translation: eng },
  ua: { translation: ua },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua" || localStorage.getItem("lng"),
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
