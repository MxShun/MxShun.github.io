import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "out",

  // NOTE: disable next/image optimization for "next dev" 
  // see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
  images: { 
    unoptimized: true
  },
};

module.exports = nextConfig;
