# CodeMark

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/codemark)  
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)  
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/codemark/actions)

A blazing-fast, plugin-ready Markdown editor with live preview, line numbers, and HTML export—powered by React, Vite, Tailwind CSS & shadcn/ui.

---

## 🚀 Features

- **Split-pane editor** with line numbering and JetBrains Mono font
- **Live preview** of your Markdown with GitHub-flavored syntax (tables, task lists, footnotes)
- **Toggle view**: switch between rendered preview and raw HTML
- **Export** your document as Markdown, HTML, or PDF
- **Dark mode** support via CSS `prefers-color-scheme` (no JS toggle required)
- **Plugin-ready**: easily add remark/rehype plugins for diagrams, math, and more

---

## 🛠 Tech Stack

- **React** – component-based UI
- **Vite** – lightning-fast dev server & bundler
- **TypeScript** – type safety & IntelliSense
- **Tailwind CSS** – utility-first styling
- **shadcn/ui** – accessible UI primitives
- **React Router** – in-app routing
- **React Markdown** + **remark-gfm** – Markdown → React nodes
- **Unified** + **rehype-stringify** – Markdown → HTML conversion
- **Lucide** – iconography

---

## 💻 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/codemark.git
cd codemark

# Install dependencies
npm install
# or
yarn install
```

## ⚙️ Development

```bash
# Start the dev server
npm run dev
# or
yarn dev
```

## 📦 Production

# Build for production

npm run build

# or

yarn build

# Preview the production build locally

npm run preview

# or

yarn preview

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
