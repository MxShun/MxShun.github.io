import type { MetadataRoute } from "next"
import fs from "fs";

export const dynamic = "force-static";

const siteUrl = "https://mxshun.github.io";
const topDirName = "app";
const pageFileName = "page.tsx";

type site = {
  url: string;
  lastModified: Date;
}

const buildSite = (path: string) => {
  return {
    url: siteUrl + path.replace(new RegExp(`${topDirName}|/${pageFileName}`, "g"), ""),
    lastModified: fs.statSync(path).mtime
  };
};

const listSites = (pathName: string, sites: site[]) => {
  const dirents = fs.readdirSync(pathName, { withFileTypes: true });

  for (const dirent of dirents) {
    if (dirent.name.startsWith("[") || dirent.name.startsWith("_")) continue;

    const currentPath = `${pathName}/${dirent.name}`;

    if (dirent.isDirectory()) listSites(currentPath, sites);
    if (dirent.name === pageFileName) sites.push(buildSite(currentPath));
  }

  return sites;
};

export default function sitemap(): MetadataRoute.Sitemap {
  return listSites(topDirName, []);
}
