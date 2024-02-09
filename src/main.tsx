import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme_context_provider } from "../src/context/theme-context.tsx";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import {  initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { CourseContextProvider } from "./context/course-context.tsx";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Good Morning"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bonjour"
        }
      },
    },
    fallbackLng: "en",
    detection: {
      order :  ['htmlTag', 'cookie', 'localStorage','path', 'subdomain'],
      caches: ['cookie'],
    }
    
  });




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme_context_provider>
        <CourseContextProvider>
        < App />
        </CourseContextProvider>
      </Theme_context_provider>
    </BrowserRouter>
  </React.StrictMode>
);
