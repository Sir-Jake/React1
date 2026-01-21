import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import GithubUsers from "./3GithubUsers/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubUsers />
  </StrictMode>,
);
