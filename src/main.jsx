import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes.jsx";
import MainLayout from "./Layout/MainLayout/MainLayout.jsx";
import App from "./App.jsx";
import ShopContextProvider from "./Context/Shop_Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
