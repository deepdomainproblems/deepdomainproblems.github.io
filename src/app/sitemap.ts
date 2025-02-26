import { getBlogPosts } from "@/app/chapter/utils";
import type { MetadataRoute } from "next";

export const baseUrl = "https://deepdomainproblems.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/chapter/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/chapter"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
