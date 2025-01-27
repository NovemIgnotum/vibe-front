//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// REMETTRE LE STRICT MODE EN PRODUCTION
// <StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
// </StrictMode>
