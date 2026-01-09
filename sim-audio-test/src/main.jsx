// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';

export function mountApp(element) {
    const root = createRoot(element);
    root.render(<App container={element} />);
}

function normalizePascalCaseName(name) {
    return name
      .split(/[^a-zA-Z0-9]+/)      // split on hyphens, underscores, dots, etc.
      .filter(Boolean)             // remove empty segments
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join("");                   // join as PascalCase
  }

// This will export a function mountSimTempApp - if the name of the project is sim-temp
const globalName = "mount" + normalizePascalCaseName(__APP_NAME__) + "App";
window[globalName] = mountApp;