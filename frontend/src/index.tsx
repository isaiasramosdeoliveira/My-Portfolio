import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ThemeGlobal from "./global/themes/ThemeGlobal";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./index.css";
import store from "redux/store";
import { Provider } from "react-redux/es/exports";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeGlobal />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
