import { jsx as _jsx } from "react/jsx-runtime";
// paste di: src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./styles/main.css";
import "./styles/animations.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
