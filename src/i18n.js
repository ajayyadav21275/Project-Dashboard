import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./localisation/eng.json";
import hi from "./localisation/Hindi.json";


i18n.use(initReactI18next).init({
  resources: {
    eng: { translation: en },
    hindi: { translation: hi },
  },
  lng: "eng",
  fallbackLng: "hindi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;