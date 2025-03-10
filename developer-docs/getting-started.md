# Getting Started with Deep Domain Problems Project

This guide will help you set up your development environment and get started with the Deep Domain Problems (DDP) project, a resource dedicated to understanding and solving complex industry challenges that exist at the intersection of domain expertise, technical implementation, and organizational complexity.

## Prerequisites

Before you begin, ensure you have the following:

- **Git**: For version control and cloning the repository
- **Node.js**: Version 18 or higher recommended (the project may specify exact version requirements in package.json)
- **A code editor**: We recommend Visual Studio Code
- **Basic knowledge of MDX**: The project content is written in MDX format, which combines Markdown with JSX

## Installation Steps

### 1. Install Visual Studio Code

Visual Studio Code (VSCode) is the recommended code editor for this project due to its excellent support for web development.

1. Download VSCode from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Follow the installation instructions for your operating system
3. After installation, launch VSCode

#### Configure VSCode for the Project

For an optimal development experience with this project:

1. Open VSCode settings (`Ctrl+,` or `Cmd+,` on Mac)
2. Configure these recommended settings for MDX development:

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[markdown]": {
    "editor.wordWrap": "on"
  },
  "[mdx]": {
    "editor.wordWrap": "on"
  }
}
```

#### Recommended VSCode Extensions

Install these extensions to enhance your development experience:

- **ESLint**: For JavaScript/TypeScript linting
- **Prettier**: For code formatting
- **MDX**: For MDX file syntax highlighting
- **Tailwind CSS IntelliSense**: If the project uses Tailwind CSS

To install extensions, click on the Extensions icon in the sidebar (or press `Ctrl+Shift+X`), search for the extension name, and click "Install".

### 2. Clone the Repository

1. Open your terminal or command prompt
2. Clone the repository:

```bash
git clone https://github.com/deepdomainproblems/deepdomainproblems.github.io.git
cd deepdomainproblems.github.io
```

### 3. Install pnpm

This project uses pnpm as its package manager. Install it globally on your system:

```bash
npm install -g pnpm
```

### 4. Install Project Dependencies

1. Navigate to the project directory (if not already there)
2. Install dependencies:

```bash
pnpm install
```

### 5. Configure the Environment

1. Create a `.env.local` file in the root of the project (if not already present)
2. Add any required environment variables (refer to `.env.example` if available)

## Running the Project

1. Start the development server:

```bash
pnpm dev
```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

The project contains multiple MDX files that serve as content for the Deep Domain Problems website.

### Directory Structure

```
deepdomainproblems.github.io/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   │   ├── chapter/      # Individual chapter pages
│   │   └── index.js      # Homepage
│   └── content/          # MDX content files
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

### Key Content Articles

- **Introduction to Deep Domain Problems**: Explains what DDPs are and why they matter
- **Data Modeling and DDP Solutions**: How data modeling differs for DDPs versus conventional software
- **Ubiquitous Language**: The foundation for solving DDPs through shared vocabulary
- **Software Packaging**: How packaging strategy affects DDP solution success in enterprise environments
- **Technical Patterns**: Implementation strategies for DDP solutions
- **Case Studies**: Real-world examples from lending, supply chain optimization, and more

### URL Structure

The project uses a chapter-based URL structure, with links following the pattern `/chapter/article-slug`. Understanding this is important when creating internal links between documents.

## Development Workflow

### Framework Details

This project is built using Next.js.

The specific framework will determine some aspects of development, such as file structure and routing patterns.

### TypeScript Support

The project includes TypeScript examples in its content, suggesting TypeScript is used for development. Key TypeScript configuration files to be aware of:

- `tsconfig.json`: Contains TypeScript compiler options
- `.d.ts` files: Type declaration files

### Adding New Content

To add a new article or case study:

1. Create a new MDX file in the appropriate directory (likely `src/content` or similar)
2. Add frontmatter with title, publishedAt date, and summary
3. Write your content using Markdown syntax
4. Use internal links with the `/chapter/slug` pattern for cross-referencing other articles

When linking to other articles, use the established URL pattern:

```markdown
[Link text](/chapter/article-slug)
```

For example:

```markdown
As outlined in [How to Break Down a Deep Domain Problem](/chapter/how-to-break-down-a-deep-domain-problem), the first step is...
```

This ensures consistent navigation throughout the site.

Example frontmatter:

```mdx
---
title: "Your Article Title"
publishedAt: "2025-03-10"
summary: "A brief summary of your article"
---
```

### Content Guidelines

When creating content:

1. Follow the established ubiquitous language of the project
2. Use code examples with proper language tags (`typescript, `jsx, etc.)
3. Maintain cross-referencing links to related articles using the `/chapter/article-slug` format
4. Include real-world examples and case studies where possible

### Building for Production

To create a production build:

```bash
pnpm build
```

Depending on the framework used, the output will be generated in the `dist` or `out` directory.

### Testing

Run tests (if implemented) with:

```bash
pnpm test
```

This will execute any unit, integration, or content validation tests in the project.

## Contributing Guidelines

### Git Workflow

1. Create a new branch for your changes following the naming convention:

```bash
git checkout -b feature/your-feature-name  # For new features
git checkout -b fix/issue-description      # For bug fixes
git checkout -b content/article-name       # For content additions or updates
```

2. Make your changes following the project's code style
3. Commit your changes with meaningful commit messages using conventional commits:

```
feat: add a new article on domain modeling
fix: correct the broken link in the introduction
docs: update setup instructions
```

4. Push your branch and create a pull request

### Documentation Standards

When adding or editing documentation:

1. Maintain consistent formatting across all MDX files
2. Follow the established frontmatter pattern with title, publishedAt, and summary
3. Use the ubiquitous language established in the project
4. Include proper cross-references to related articles
5. Format code examples with appropriate language tags

### Code Review Process

1. Ensure all automated checks pass
2. Address any feedback from reviewers
3. Maintain consistent code style and documentation standards
4. Update any related documentation when changing code

## Website Structure & Resources

### Main Sections

The Deep Domain Problems website is organized into the following sections:

#### Getting Started

- [Introduction to Deep Domain Problems](https://deepdomainproblems.com/chapter/introduction-to-deep-domain-problems)
- [How to Identify DDPs Worth Solving](https://deepdomainproblems.com/chapter/how-to-identify-deep-domain-problems-worth-solving)

#### Methodology

- [How to Break Down a DDP](https://deepdomainproblems.com/chapter/how-to-break-down-a-deep-domain-problem)
- [Ubiquitous Language: The Foundation for Solving DDPs](https://deepdomainproblems.com/chapter/ubiquitous-language-the-foundation-for-solving-deep-domain-problems)
- [Discovery Coding in DDPs: A Synthesis](https://deepdomainproblems.com/chapter/discovery-coding-in-ddp)

#### Technical Implementation

- [Data Modeling and Why DDPs Shouldn't Be Built Like Any Other Software](https://deepdomainproblems.com/chapter/data-modeling-and-why-ddps-shouldnt-be-built-like-any-other-software)
- [Technical Patterns for Solving DDPs](https://deepdomainproblems.com/chapter/technical-patterns-for-solving-deep-domain-problems)
- [Software Packaging: The Game Changer for DDP Solutions](https://deepdomainproblems.com/chapter/software-packaging-the-game-changer-for-deep-domain-problem-solutions)

#### Case Studies

- [Case Study: Decomposing a DDP in Supply Chain Optimization](https://deepdomainproblems.com/chapter/case-study-breakdown-a-ddp)
- [DDPs in Lending: A Decision-Making Case Study](https://deepdomainproblems.com/chapter/deep-domain-problems-in-lending-a-decision-making-case-study)

#### Industry Perspectives

- [DDP Programmers](https://deepdomainproblems.com/chapter/the-evolving-role-of-programmers-in-solving-deep-domain-problems)
- [DDP Programming](https://deepdomainproblems.com/chapter/the-evolution-of-programming-from-code-to-deep-domain-problems)
- [Coding with AI and Sunk Cost Fallacy](https://deepdomainproblems.com/chapter/coding-with-ai-and-sunk-cost-fallacy)

#### Go To Market

- [GTM for DDPs](https://deepdomainproblems.com/chapter/how-to-take-ddps-solutions-to-market)

### Key Resources to Understand the Project

When working on the codebase, familiarize yourself with these key concepts:

- Start with the [Introduction](https://deepdomainproblems.com/chapter/introduction-to-deep-domain-problems) to understand the core concepts
- Study the [Ubiquitous Language article](https://deepdomainproblems.com/chapter/ubiquitous-language-the-foundation-for-solving-deep-domain-problems) to ensure consistent terminology
- Review the [Technical Patterns](https://deepdomainproblems.com/chapter/technical-patterns-for-solving-deep-domain-problems) for implementation approaches

## Troubleshooting

### Common Issues

1. **Installation errors**: Make sure you have the correct versions of Node.js and pnpm installed

   ```bash
   node --version  # Verify Node.js version
   pnpm --version  # Verify pnpm version
   ```

2. **Build errors**: Check for any missing dependencies or syntax errors in your code

   ```bash
   pnpm install     # Reinstall dependencies
   pnpm lint        # Run linting to check for errors
   ```

3. **MDX content issues**: Verify frontmatter format and check for syntax errors

   ```bash
   # Install mdx linting tools if needed
   pnpm add -D eslint-plugin-mdx
   ```

4. **TypeScript errors**: Ensure type definitions are correct

   ```bash
   pnpm tsc --noEmit  # Type-check without generating output files
   ```

5. **Runtime errors**: Look for error messages in the console for guidance

### Dependency Management

If you encounter issues with dependencies:

```bash
pnpm store prune    # Clean pnpm store
pnpm install --force  # Force reinstallation of dependencies
```

### Deployment Issues

For GitHub Pages deployment issues:

```bash
# Check if GitHub Actions workflow is configured
cat .github/workflows/deploy.yml

# Manually trigger deployment if needed
pnpm deploy
```

If you encounter persistent issues, check the project's issues page on GitHub or reach out to the project maintainers.

## Deployment Process

The project likely uses GitHub Pages for deployment, as suggested by the repository name (deepdomainproblems.github.io).

### Manual Deployment

To manually deploy the project:

```bash
pnpm build  # Build production assets
pnpm deploy  # If a deploy script is configured
```

### Automated Deployment

The project may utilize GitHub Actions for automated deployment. Check the `.github/workflows` directory for workflow configuration files.

## Performance Optimization

To ensure optimal performance of the deployed site:

1. Optimize images before adding them to the project
2. Keep JavaScript bundles small and efficient
3. Utilize code splitting where appropriate
4. Implement proper lazy loading for components

## Conclusion

You're now set up to work on the Deep Domain Problems project. This platform focuses on helping organizations tackle complex domain challenges that require deep understanding of industry-specific processes, regulatory frameworks, and organizational dynamics.

Remember that DDPs require a fundamentally different approach than conventional software development. Focus on domain fidelity, embrace complexity, and build for discovery and evolution to create solutions that effectively capture both explicit and tacit knowledge.

### Key Resources

- **GitHub Repository**: [https://github.com/deepdomainproblems/deepdomainproblems.github.io](https://github.com/deepdomainproblems/deepdomainproblems.github.io)
- **Live Site**: [https://deepdomainproblems.com](https://deepdomainproblems.com)
- **Issues**: [https://github.com/deepdomainproblems/deepdomainproblems.github.io/issues](https://github.com/deepdomainproblems/deepdomainproblems.github.io/issues)

Happy coding and domain exploring!
