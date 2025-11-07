import Hero from "./components/Hero";
import Solution from "./components/Solution";
import Impact from "./components/Impact";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-600" />
            <span className="font-semibold tracking-tight">InsightOS</span>
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#solution" className="hover:text-gray-900">Solution</a>
            <a href="#impact" className="hover:text-gray-900">Impact</a>
            <a href="#get-demo" className="hover:text-gray-900">Get a demo</a>
          </nav>
          <a
            href="#get-demo"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 sm:inline-block"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Solution />
        <Impact />
        <CTA />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} InsightOS. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
