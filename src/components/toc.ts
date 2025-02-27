// lib/book-structure.ts
export type Part = {
  title: string;
  posts: string[];
};

export const bookStructure: Part[] = [
  {
    title: "Part I: Understanding Deep Domain Problems",
    posts: [
      "introduction-to-deep-domain-problems",
      "how-to-identify-deep-domain-problems-worth-solving",
      "how-to-break-down-a-deep-domain-problem",
    ],
  },
  {
    title: "Part II: Technical Approaches",
    posts: [
      "technical-patterns-for-solving-deep-domain-problems",
      "discovery-coding-in-ddp",
      "coding-with-ai-and-sunk-cost-fallacy",
      "ubiquitous-language-the-foundation-for-solving-deep-domain-problems",
    ],
  },
  {
    title: "Part III: Solutions & Case Studies",
    posts: [
      "case-study-breakdown-a-ddp",
      "deep-domain-problems-in-lending-a-decision-making-case-study",
    ],
  },
  {
    title: "Part IV: Evolution & Future of DDP",
    posts: [
      "the-evolution-of-programming-from-code-to-deep-domain-problems",
      "the-evolving-role-of-programmers-in-solving-deep-domain-problems",
      "software-packaging-the-game-changer-for-deep-domain-problem-solutions",
      "how-to-take-ddps-solutions-to-market",
    ],
  },
];
