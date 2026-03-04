"use client";

import { motion } from "framer-motion";
import { futureWishes } from "@/lib/data";

export default function FuturePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Future</h1>
        <p className="mt-3 text-slate-600">Small dreams, grand plans, one shared direction.</p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {futureWishes.map((wish, index) => (
          <motion.article
            key={wish.title}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            className="premium-card p-7"
          >
            <h2 className="text-2xl font-semibold tracking-tight">{wish.title}</h2>
            <p className="mt-3 text-slate-600">{wish.detail}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
