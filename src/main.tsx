import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./sass/main.scss";
import "./index.css";
import { ProductProvider } from "./context/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
