import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 sm:py-24 lg:py-32 bg-background">
      <div className="w-full max-w-3xl text-center space-y-6 select-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-jetbrains text-foreground">
          &lt;CodeMark/&gt;
        </h1>
        <h2 className="mt-2 text-lg sm:text-3xl md:text-4xl font-medium text-foreground">
          Fast. Clean. Markdown.
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-muted">
          Your notes, docs, and posts in one streamlined editor.
        </p>
        <div className="mt-6">
          <Link to="/editor">
            <button className="px-4 py-2 text-foreground backdrop-blur-sm border border-border rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-background text-sm transition duration-200 cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
