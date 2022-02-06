import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import configureProductStore from "./store/items-store";
import configureCartStore from "./store/cart-item-store";
import customizeItemStore from "./store/customize-item";
import configurePriceStore from "./store/price-store";
import configureUserKioskStore from "./store/init-user-data";

configureProductStore();
configureCartStore();
// customizeItemStore();
configurePriceStore();
configureUserKioskStore();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
