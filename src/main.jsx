import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import APP from "./2TributeProjectNamedExport/TributeProjectDefaultExport";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APP />
  </StrictMode>,
);
