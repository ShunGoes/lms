import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme_context_provider } from "../src/context/theme-context.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme_context_provider>
        <App />
      </Theme_context_provider>
    </BrowserRouter>
  </React.StrictMode>
);
