import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../medias/translations/en.json";
import uk from "../../medias/translations/uk.json";

const resources = {
  en: { translation: { ...en } },
  uk: { translation: { ...uk } },
};

export type AvailableLang = "en" | "uk";

const languagePriority: AvailableLang[] = ["uk", "en"];

export const availableLangs = Object.keys(resources).sort();

function getInitLang(): AvailableLang {
  let choice: AvailableLang = "uk";
  const prevSession = localStorage.getItem("languageSetting");
  if (prevSession != null && availableLangs.includes(prevSession)) {
    // use language from previous session
    choice = prevSession as AvailableLang;
  } else {
    const browserLangs = navigator.languages.map((lang) => lang.split("-")[0].toLowerCase());
    // Pick first language from `languagePriority` occurring in browser settings.
    // This is done because the majority of users is ukrainian and there seem to
    // be users with their browser settings pointing to en while preferring uk.
    for (let lang of languagePriority) {
      if (browserLangs.includes(lang)) {
        choice = lang;
        break;
      }
    }
  }
  storeLanguage(choice);
  return choice;
}

export function storeLanguage(language: AvailableLang) {
  localStorage.setItem("languageSetting", language);
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getInitLang(),
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
