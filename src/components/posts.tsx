import Link from "next/link";
import { getBlogPosts } from "@/app/chapter/utils";
import { bookStructure } from "@/components/toc";

export function BlogPosts() {
  const allBlogs = getBlogPosts();
  const blogPostsBySlug: { [key: string]: (typeof allBlogs)[0] } = {};
  allBlogs.forEach((post) => (blogPostsBySlug[post.slug] = post));

  return (
    <div className="flex flex-col space-y-6">
      {bookStructure.map((part) => (
        <div key={part.title} className="flex flex-col space-y-2">
          <h2 className="font-semibold text-xl tracking-tight">{part.title}</h2>

          {part.posts.map((slug) => {
            if (blogPostsBySlug[slug]) {
              const post = blogPostsBySlug[slug];
              return (
                <Link
                  key={slug}
                  className="flex flex-col space-y-1"
                  href={`/chapter/${slug}`}
                >
                  <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    {/* <p className="text-neutral-600 dark:text-neutral-400 w-full md:w-[100px] tabular-nums">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p> */}
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {post.metadata.title}
                    </p>
                  </div>
                </Link>
              );
            } else {
              console.warn(`Post with slug "${slug}" not found.`);
              return null; // Or render a placeholder message
            }
          })}
        </div>
      ))}
    </div>
  );
}
