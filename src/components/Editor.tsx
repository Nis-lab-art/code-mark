import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { Eye, Code } from "lucide-react";

import Appbar from "./Appbar";
import { initialMarkdown } from "@/constants/initialMarkdown";

export default function Editor() {
  const [markdown, setMarkdown] = useState<string>(initialMarkdown);
  const [view, setView] = useState<"preview" | "html">("preview");

  const html = useMemo(() => {
    return unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .processSync(markdown)
      .toString();
  }, [markdown]);

  return (
    <section className="flex flex-col h-screen w-full pt-16 pb-4 bg-background">
      <Appbar />

      <div
        className="
          flex
          flex-1
          flex-col      /* stack on mobile */
          md:flex-row   /* side-by-side from md up */
          overflow-hidden
          divide-y
          md:divide-y-0
          md:divide-x
          divide-border
          hover:divide-primary
          transition-colors duration-200
        "
      >
        {/* Markdown Pane */}
        <div className="flex flex-col flex-1 overflow-hidden rounded-md shadow-sm bg-background">
          <div className="px-4 py-2 bg-muted/10 dark:bg-muted/20 border-b border-border font-medium text-muted transition-colors duration-200">
            Markdown
          </div>
          <div className="flex flex-1 overflow-hidden">
            {/* Line Numbers */}
            <div
              className="
                flex-shrink-0
                bg-muted/5
                text-muted
                select-none
                text-right
                font-jetbrains
                tabular-nums
                pl-4 pr-4
                overflow-hidden
                transition-colors duration-200
              "
            >
              {markdown.split("\n").map((_, idx) => (
                <div key={idx} className="h-6 leading-7">
                  {idx + 1}
                </div>
              ))}
            </div>

            {/* Editor */}
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Write your markdown here..."
              className="
                flex-1
                p-6
                bg-background
                text-foreground
                resize-none
                outline-none
                focus:outline-none focus:ring-0
                scrollbar-thin scrollbar-thumb-muted scrollbar-track-background
                font-jetbrains
                leading-7
                transition-colors duration-200
              "
            />
          </div>
        </div>

        {/* Preview Pane */}
        <div className="flex flex-col flex-1 overflow-hidden rounded-md shadow-sm bg-card">
          <div className="px-4 py-2 bg-muted/10 dark:bg-muted/20 border-b border-border flex items-center justify-between transition-colors duration-200">
            <span className="font-medium text-muted">Preview</span>
            <div className="flex space-x-3">
              <button
                onClick={() => setView("preview")}
                aria-label="Rendered preview"
                className={`
                  p-1 rounded-sm transition-colors duration-200
                  ${
                    view === "preview"
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  }
                `}
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => setView("html")}
                aria-label="View HTML source"
                className={`
                  p-1 rounded-sm transition-colors duration-200
                  ${
                    view === "html"
                      ? "text-primary"
                      : "text-muted hover:text-foreground"
                  }
                `}
              >
                <Code size={18} />
              </button>
            </div>
          </div>

          {view === "preview" ? (
            <article
              className="
                flex-1 p-4 overflow-auto
                bg-card text-card-foreground
                prose prose-lg dark:prose-invert
                max-w-none
                scrollbar-thin scrollbar-thumb-muted scrollbar-track-background
                transition-colors duration-200
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </article>
          ) : (
            <pre
              className="
                flex-1 p-4 overflow-auto
                bg-card text-card-foreground
                whitespace-pre-wrap break-words
                scrollbar-thin scrollbar-thumb-muted scrollbar-track-background
                transition-colors duration-200
              "
            >
              {html}
            </pre>
          )}
        </div>
      </div>
    </section>
  );
}
