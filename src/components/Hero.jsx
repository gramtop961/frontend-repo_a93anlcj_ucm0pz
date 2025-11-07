import { Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-sm text-blue-700 backdrop-blur">
            <BarChart3 className="h-4 w-4" />
            Real-time AI Analytics Platform
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Turn raw data into decisions — instantly
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600">
            Automate analytics, reporting, and decision-making in one place. Save hours daily and move from insight to action in seconds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Rocket className="h-5 w-5" />
              Get started
            </a>
            <a
              href="#impact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
            >
              See impact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
