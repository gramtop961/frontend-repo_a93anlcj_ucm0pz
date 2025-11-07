import { Clock, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Hours saved daily", value: "3–5", icon: Clock },
  { label: "Growth lift", value: "+18%", icon: TrendingUp },
  { label: "Time to insight", value: "Seconds", icon: Zap },
];

export default function Impact() {
  return (
    <section id="impact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Impact that compounds
          </h2>
          <p className="mt-4 text-gray-600">
            Teams reclaim time, scale smarter, and decide faster the moment insights are automated.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <s.icon className="mx-auto h-6 w-6 text-blue-600" />
              <div className="mt-3 text-3xl font-bold text-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
