import { getBlogPosts } from "@/app/blog/utils";
import type { MetadataRoute } from "next";

export const baseUrl = "https://deepdomainproblems.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
