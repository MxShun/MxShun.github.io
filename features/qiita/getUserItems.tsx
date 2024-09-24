import { endpointBase, userId } from "@/features/qiita/const";
import { extractRegex } from "@/utils/strings";
import { formatDate } from "@/utils/dates";

type QiitaPost = {
  title: string;
  url: string;
  thumbnailUrl?: string;
  createdAt: string;
};

export const getQiitaPosts = async () => {
  const items = await (
    await fetch(`${endpointBase}/users/${userId}/items?per_page=100`, {
      cache: "no-store",
    })
  ).json();

  return (await Promise.all(
    items.map(async (item: any) => {
      return {
        title: item.title,
        url: item.url,
        thumbnailUrl: await getThumbnailUrl(item.url),
        createdAt: formatDate(item.created_at),
      };
    }),
  )) as QiitaPost[];
};

const getThumbnailUrl = async (url: string) => {
  const ogImages = extractRegex(
    await (await fetch(url)).text(),
    /<meta property="og:image" content="(.*?)"/g,
  );

  return ogImages.length > 0 ? decodeThumbnailUrl(ogImages[0]) : undefined;
};

const decodeThumbnailUrl = (url: string) => {
  return url.replaceAll("&amp;", "&");
};
