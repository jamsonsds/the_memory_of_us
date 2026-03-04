"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { memoryHighlights } from "@/lib/data";

const startDate = new Date("2003-11-30T00:00:00");

function getDaysTogether() {
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export default function HomePage() {
  const highlight = memoryHighlights[0];
  const daysTogether = getDaysTogether();

  return (
    <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-5xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm uppercase tracking-[0.28em] text-slate-500"
      >
        Zhouchi &amp; Jiale
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl"
      >
        the_memory_of_us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
      >
        {daysTogether.toLocaleString()} days together since 2003-11-30.
      </motion.p>

      <motion.article
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="premium-card w-full max-w-2xl p-8 text-left"
      >
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Memory Highlight</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{highlight.title}</h2>
        <p className="mt-2 text-slate-600">{highlight.description}</p>
        <p className="mt-4 text-sm font-medium text-slate-500">{highlight.date}</p>
      </motion.article>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="/memories"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Enter Memories →
        </Link>
      </motion.div>
    </main>
  );
}
