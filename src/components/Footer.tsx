export default function Footer() {
  return (
    <footer className="w-full py-4 text-center text-sm text-muted flex flex-wrap justify-center gap-x-2 gap-y-1">
      Built with{" "}
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        React
      </a>{" "}
      ·{" "}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        Tailwind CSS
      </a>{" "}
      ·{" "}
      <a
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        shadcn/ui
      </a>{" "}
      ·{" "}
      <a
        href="https://github.com/remarkjs/react-markdown"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        React Markdown
      </a>{" "}
      and more!
    </footer>
  );
}
