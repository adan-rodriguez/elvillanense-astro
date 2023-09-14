import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.elvillanense.com.ar",
  output: "server",
  adapter: vercel(),
});
