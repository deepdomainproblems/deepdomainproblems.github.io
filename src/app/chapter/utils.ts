import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

// Parse frontmatter from MDX content
function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

// Get all MDX files from directory
function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Read and parse a single MDX file
function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// Process all MDX files in directory
function getMDXData(dir: string): {
  metadata: Metadata;
  slug: string;
  content: string;
}[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): {
  metadata: Metadata;
  slug: string;
  content: string;
}[] {
  return getMDXData(path.join(process.cwd(), "src", "app", "chapter", "posts"));
}

export function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date();
  const formattedDate = !date.includes("T") ? `${date}T00:00:00` : date;
  const targetDate = new Date(formattedDate);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let relativeDate = "";

  if (yearsAgo > 0) {
    relativeDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    relativeDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    relativeDate = `${daysAgo}d ago`;
  } else {
    relativeDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return !includeRelative ? fullDate : `${fullDate} (${relativeDate})`;
}
