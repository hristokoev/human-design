import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	output: "server",
  adapter: vercel(),
	redirects: {
		"/blog": "/blog/1",
		"/admin": "https://humandesign-admin.occamy.cz/",
	}
});