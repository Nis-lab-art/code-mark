import "./App.css";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Editor from "./components/Editor";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-1 flex-col w-full">
              <div className="flex flex-1 items-center justify-center">
                <Hero />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </main>
  );
}
