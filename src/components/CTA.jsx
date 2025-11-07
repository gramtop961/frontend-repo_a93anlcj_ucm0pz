import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
        <h3 className="text-2xl font-semibold sm:text-3xl">Ready to automate your insights?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          Connect your data sources and go live in minutes. No engineering ticket required.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#get-demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-blue-700 shadow hover:bg-blue-50"
          >
            Book a demo
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
