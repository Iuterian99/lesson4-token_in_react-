import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"
import { LoginProvider } from "./context/Authorization"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
          <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
