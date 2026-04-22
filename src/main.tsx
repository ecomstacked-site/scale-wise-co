import React from "react";
import type { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

const HelmetProviderCompat = HelmetProvider as unknown as ({ children }: { children: ReactNode }) => ReactElement;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProviderCompat>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProviderCompat>
  </React.StrictMode>
);
