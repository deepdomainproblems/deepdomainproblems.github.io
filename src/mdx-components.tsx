import type { MDXComponents } from "mdx/types";
// import { components as StyledMDXComponents } from "@/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ...StyledMDXComponents,
    ...components,
  };
}
