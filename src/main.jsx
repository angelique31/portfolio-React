// import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./store/reducers/rootReducer";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/en/translation.json";
import frTranslations from "../locales/fr/translation.json";

// Initialization of i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
  },
  lng: "fr", // langue par défaut
  interpolation: {
    escapeValue: false,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "highlight"],
  },
});

// const store = configureStore({
//   reducer: rootReducer,
// });

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <Provider>
//     <App />
//   </Provider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
