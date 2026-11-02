import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vsriram.me',
  output: 'static',
  trailingSlash: 'never',
  // Astro 7 defaults to 'jsx', which strips spaces between inline elements; keep v6 output.
  compressHTML: true,
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: false,
    },
  },
});
