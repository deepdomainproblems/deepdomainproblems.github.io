import type { MDXComponents } from "mdx/types";
import { Button } from "@/components/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>
    ),
    Button: Button,
    ...components,
  };
}
