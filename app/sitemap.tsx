import type { MetadataRoute } from "next"
import fs from "fs";

const siteUrl = "https://mxshun.github.io";
const topDirName = "app";
const pageFileName = "page.tsx";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getPageInfoList(topDirName, []);
}

const getUrlObjList = (path: string) => {
  return {
    url: siteUrl + path.replace(new RegExp(`${topDirName}|/${pageFileName}`, "g"), ""),
    lastModified: fs.statSync(path).mtime
  };
};

const getPageInfoList = (pathName: string, list: any[]) => {
  const dirents = fs.readdirSync(pathName, { withFileTypes: true });

  for (const dirent of dirents) {
    if (dirent.name.startsWith("[") || dirent.name.startsWith("_")) continue;

    const currentPath = `${pathName}/${dirent.name}`;

    if (dirent.isDirectory()) getPageInfoList(currentPath, list);
    if (dirent.name === pageFileName) list.push(getUrlObjList(currentPath));
  }

  return list;
};
