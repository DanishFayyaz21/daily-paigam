import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "./Context/theme";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import "./themeing/variables.scss";
import "./themeing/custom.scss";

ReactDOM.render(
  <SoftUIControllerProvider>
    <App />
  </SoftUIControllerProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
