// lib/book-structure.ts
export type Part = {
  title: string;
  posts: string[];
};

export const bookStructure: Part[] = [
  {
    title: "Part I: Understanding Deep Domain Problems",
    posts: [
      "how-to-identify-deep-domain-problems-worth-solving",
      "how-to-break-down-a-deep-domain-problem",
      "deep-domain-problems-in-lending-a-decision-making-case-study",
    ],
  },
  {
    title: "Part II: Technical Approaches & Solutions",
    posts: [
      "technical-patterns-for-solving-deep-domain-problems",
      "discovery-coding-in-ddp",
      "coding-with-ai-and-sunk-cost-fallacy",
      "case-study-breakdown-a-ddp",
    ],
  },
  {
    title: "Part III: Evolution & Future of DDP",
    posts: [
      "the-evolution-of-programming-from-code-to-deep-domain-problems",
      "the-evolving-role-of-programmers-in-solving-deep-domain-problems",
      "ubiquitous-language-the-foundation-for-solving-deep-domain-problems",
      "how-to-take-ddps-solutions-to-market",
    ],
  },
];
