// Static Exports https://nextjs.org/docs/app/building-your-application/deploying/static-exports
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/MxShun",
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "out",
};

module.exports = nextConfig;
