import { BlogPosts } from "@/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Deep Domain Problems (DDPs)
      </h1>
      <p className="mb-4">
        {`Deep Domain Problems drive critical industry systems, requiring specialized expertise and technical abilities to solve. These challenges require navigating industry-specific complexities, regulatory constraints, and institutional knowledge. I support strategic partnerships between domain experts and technologists, as innovation emerges when field experience combines with technical capabilities.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
