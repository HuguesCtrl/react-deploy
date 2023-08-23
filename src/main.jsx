import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UseCallAPI from "./theme/UseCallAPI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UseCallAPI>
    <App />
  </UseCallAPI>
);
