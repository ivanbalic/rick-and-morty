import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./state/store";
import { App } from "./view/pages/App/App";

import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/popper.js/dist/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
