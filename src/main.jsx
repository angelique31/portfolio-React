// import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./store/reducers/rootReducer";
import App from "./App";

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
