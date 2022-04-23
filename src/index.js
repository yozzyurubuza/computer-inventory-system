import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

createRoot(document.querySelector("#root")).render(<App tab="home" />);
