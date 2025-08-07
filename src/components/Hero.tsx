import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-8xl p-2 font-bold font-jetbrains text-foreground">
          &lt;CodeMark/&gt;
        </h1>
        <h2 className="mt-4 text-4xl font-medium">Fast. Clean. Markdown.</h2>
        <p className="text-muted text-lg">
          Your notes, docs, and posts in one streamlined editor.
        </p>
        <Link to="/editor">
          <ShimmerButton>Get started for free</ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
