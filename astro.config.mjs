import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://buildwelllabs.com",
  // One small stylesheet: inline it so the page renders in a single request.
  build: { inlineStylesheets: "always" },
});
