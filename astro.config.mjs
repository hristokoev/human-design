import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
  output: 'server',
  adapter: vercelServerless(),
	redirects: {
		"/blog": "/blog/1",
	}
});