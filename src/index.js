import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/font-awesome/css/all.min.css?ver=1.2.0";
import "./css/bootstrap.min.css?ver=1.2.0";
import "./css/main.css?ver=1.2.0";
import "./js/main.js";
// import "./particle/particle.min.js";
// import "./css/";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
