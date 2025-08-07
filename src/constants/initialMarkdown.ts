// src/constants/initialMarkdown.ts

export const initialMarkdown = `# CodeMark  
## _Your Next-Gen Markdown Playground_

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Stars](https://img.shields.io/badge/stars-⭐️-yellow.svg)
CodeMark is a lightning-fast, plugin-ready Markdown editor with live preview, themes, and built-in export—no setup required.

- Type Markdown on the left  
- See styled HTML on the right  
- ✨ Instant feedback, zero friction ✨

## Features

- **Live Preview** with GitHub-flavored syntax (tables, task lists, footnotes)  
- **Split-pane Editor** with line numbers and code font  
- **Custom Themes** powered by Tailwind CSS variables  
- **Import/Export** as Markdown, HTML or PDF  
- **Plugin-ready**: add remark/rehype plugins for diagrams, math, and more  

> “Compose with confidence—see every change in real time.”  

## Tech Stack

- **React** – UI library for components  
- **Vite** – fast bundler & dev server  
- **Tailwind CSS** – utility-first styling, dark mode via \`prefers-color-scheme\`  
- **shadcn/ui** – accessible component primitives  
- **React-Router** – in-app routing  
- **React-Markdown** + **remark-gfm** – Markdown parsing & rendering  
- **Unified** + **rehype-stringify** – Markdown → HTML conversion for “View HTML”  

## Installation

\`\`\`sh
# clone & install
git clone https://github.com/your-repo/codemark.git
cd codemark
npm install

# run in dev mode
npm run dev
\`\`\`

_For production build:_

\`\`\`sh
npm run build
npm run preview
\`\`\`

## Usage

1. Click **Get started** on the home screen  
2. Write Markdown in the left pane  
3. Toggle between **rendered preview** and **raw HTML**  
4. Export via **File → Export** menu  

## Contributing

Love CodeMark? Contributions are welcome!  

\`\`\`sh
# fork, then:
git checkout -b feature/awesome
npm install
npm run dev
\`\`\`

Submit a PR and drop by our **#dev** channel on Slack.  

---

Built with ❤️ by **Nishan, Giri** | [GitHub](https://github.com/your-repo/codemark)  
`;
