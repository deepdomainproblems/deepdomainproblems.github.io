import { BlogPosts } from "@/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Deep Domain Problems (DDPs)
      </h1>
      <p className="mb-4">
        {`Deep Domain Problems represent the complex challenges that power critical industry systems, requiring both extensive domain expertise and technical prowess to solve. These problems thrive on deep understanding of industry intricacies, regulations, and decades of accumulated knowledge. I advocate for meaningful collaboration between seasoned domain experts and dedicated technologists, believing that transformation comes from bridging traditional wisdom with modern technical capabilities.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
