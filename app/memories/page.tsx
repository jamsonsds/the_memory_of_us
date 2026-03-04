"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Memory, memoryHighlights } from "@/lib/data";

const emptyMemory: Memory = {
  date: "",
  title: "",
  description: "",
  photos: [],
};

export default function MemoriesPage() {
  const [memories, setMemories] = useState<Memory[]>(memoryHighlights);
  const [draft, setDraft] = useState<Memory>(emptyMemory);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.date || !draft.title || !draft.description) {
      return;
    }

    setMemories((prev) => [
      {
        ...draft,
        photos: draft.photos.filter(Boolean),
      },
      ...prev,
    ]);
    setDraft(emptyMemory);
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Memories</h1>
        <p className="mt-3 text-slate-600">A timeline of moments that shaped us.</p>
      </section>

      <section className="premium-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Add New Memory</h2>
        <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
          <input
            type="date"
            value={draft.date}
            onChange={(event) => setDraft((prev) => ({ ...prev, date: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-900/20 transition focus:ring"
          />
          <input
            type="text"
            placeholder="Title"
            value={draft.title}
            onChange={(event) => setDraft((prev) => ({ ...prev, title: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-900/20 transition focus:ring"
          />
          <textarea
            placeholder="Description"
            value={draft.description}
            onChange={(event) => setDraft((prev) => ({ ...prev, description: event.target.value }))}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-900/20 transition focus:ring sm:col-span-2"
            rows={3}
          />
          <input
            type="text"
            placeholder="Photo URLs (comma separated)"
            value={draft.photos.join(",")}
            onChange={(event) =>
              setDraft((prev) => ({
                ...prev,
                photos: event.target.value.split(",").map((item) => item.trim()),
              }))
            }
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-slate-900/20 transition focus:ring sm:col-span-2"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700 sm:col-span-2"
          >
            Save Memory
          </button>
        </form>
      </section>

      <section className="relative">
        <div className="absolute left-[11px] top-0 h-full w-px bg-slate-200 sm:left-1/2" />
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <motion.article
              key={`${memory.date}-${memory.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="premium-card relative ml-8 p-6 sm:ml-0 sm:w-[48%] sm:even:ml-auto"
            >
              <div className="absolute -left-[27px] top-8 h-4 w-4 rounded-full border-4 border-white bg-slate-900 sm:left-auto sm:right-[-9px] sm:odd:right-[-9px] sm:even:left-[-9px]" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{memory.date}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{memory.title}</h3>
              <p className="mt-2 text-slate-600">{memory.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {memory.photos.map((photo) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={memory.title}
                    className="h-24 w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
