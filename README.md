# VolatileSounds Simulations

This repository contains a collection of **real-time audio-visual simulations**, each built as an independent React project.  

Each simulation is deployed to **GitHub Pages** under the `/simulations` folder and follows a standardized naming convention.

## Project Conventions

- All simulations are prefixed with `sim-`, e.g., `sim-particles-test`.
- Each project name in `package.json` must follow this convention.
- Simulations are independent apps and do **not** automatically mount to any container on the page.

## Creating a New Simulation from Template

New simulations can be created from the template project "sim-temp".
The following commands must be called from the repository's root.

1. Link the simulations root folder npm package:
    ```json
    npm link
    ```
2. Run a script to generate a new simulation project.
    ```json
    create-sim
    ```
3. Follow the prompts to provide the project name.
The process will copy the template, configure the project structure, and set up the mount function correctly.

4. Once created, you install dependencies and run the project
    ```json
    cd sim-my-new-project
    npm install
    npm run dev
    ```

## Mounting Simulations

Each simulation exposes a **mount function** that allows it to be rendered into an `html` container dynamically.  

- The mount function name is generated automatically based on the project name in `src/main.jsx`.
- Multiple simulations can be mounted on the same page independently.
- This allows embedding simulations in standard HTML pages, CMS environments like WordPress, or any web container.

Exmaple of mounting:
```html
<div id="vsounds-render"></div>

<script>
window.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("vsounds-render");

  const mountFn = window.mountSimTempApp; // based on project name
  if (!mountFn) {
    console.error("mountSimTempApp() is not available.");
    return;
  }

  mountFn(target);
});
</script>
```

## Build & Deployment

- Each simulation is built using Vite. All simulations share the same Vite setup: `/vite.config.js`. In this config, the output directory resulting from building the app is specified. This is the same also in the deployed folder structure on github pages.
```js
build: {
  outDir: `dist/simulations/${pkg.name}`,
},
```
- Build outputs are published to GitHub Pages under `/simulations/[project-name]`.
  (`--add` ensures that the existing content in the folder is not overwritten).
```json
  "deploy": "npm run build && gh-pages -d dist --add"
```

This setup allows all simulations to coexist on the same website, while still being fully independent.

## Summary

- Simulations are **independent React apps**.
- Each exposes a **mount function** for dynamic rendering.
- Deployment is handled via **GitHub Pages** under a standardized folder structure.
- New simulations are created from a template for consistency and maintainability.
