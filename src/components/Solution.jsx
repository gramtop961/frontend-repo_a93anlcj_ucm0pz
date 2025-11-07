import { BrainCircuit, Workflow, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-driven analytics",
    desc: "Stream data from your tools and let our models surface the metrics that matter — no SQL, no dashboards to babysit.",
  },
  {
    icon: Workflow,
    title: "Automated reporting",
    desc: "Beautiful reports generated and delivered on your schedule. Tailored to teams, KPIs, and goals.",
  },
  {
    icon: BarChart3,
    title: "Decision automation",
    desc: "Trigger actions when thresholds hit — from campaign tweaks to inventory reorders — all with guardrails.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            One platform. Endless clarity.
          </h2>
          <p className="mt-4 text-gray-600">
            Consolidate analytics, reporting, and actions in a single AI workspace.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <f.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
