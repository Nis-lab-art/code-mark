import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background border-b border-border z-10">
      <div className="w-full flex items-center px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-jetbrains text-foreground">
          &lt;CodeMark /&gt;
        </Link>
      </div>
    </header>
  );
}
