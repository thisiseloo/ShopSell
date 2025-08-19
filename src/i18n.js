import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import az from "./locales/az.json";
import en from "./locales/en.json";

const resources = {
  az: { translation: az },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",
    fallbackLng: "az",
    interpolation: { escapeValue: false },
  });

export default i18n;
