// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import az from "./locales/az.json";
// import en from "./locales/en.json";

// const resources = {
//   az: { translation: az },
//   en: { translation: en },
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: "az",
//     fallbackLng: "az",
//     interpolation: { escapeValue: false },
//   });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import az from "./locales/az.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json"; // 🔥 Rus dilini import et

const resources = {
  az: { translation: az },
  en: { translation: en },
  ru: { translation: ru }, // 🔥 Burada da əlavə et
};

i18n.use(initReactI18next).init({
  resources,
  lng: "az", // sayt ilk açıldıqda Azərbaycan dilində
  fallbackLng: "az",
  interpolation: { escapeValue: false },
});

export default i18n;
