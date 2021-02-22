import "windi.css";
import "./styles/main.css";
import { ViteSSG } from "vite-ssg";
import generatedRoutes from "pages-generated";
import { setupLayouts } from "layouts-generated";
import App from "./App.vue";
import "progressive-image.js/dist/progressive-image.js";
import "progressive-image.js/dist/progressive-image.css";

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager("./modules/*.ts")).map((i) =>
    i.install?.(ctx)
  );
});
