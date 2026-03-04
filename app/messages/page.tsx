"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { starterMessages } from "@/lib/data";

export default function MessagesPage() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");

  const handlePost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    setMessages((prev) => [input.trim(), ...prev]);
    setInput("");
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <header className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Messages</h1>
        <p className="mt-3 text-slate-600">A simple board for words that matter.</p>
      </header>

      <section className="premium-card mt-10 p-6 sm:p-8">
        <form onSubmit={handlePost} className="flex flex-col gap-4 sm:flex-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Write a message..."
            className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 outline-none ring-slate-900/20 transition focus:ring"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Post
          </button>
        </form>

        <div className="mt-8 space-y-3">
          {messages.map((message, index) => (
            <motion.p
              key={`${message}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-700"
            >
              {message}
            </motion.p>
          ))}
        </div>
      </section>
    </main>
  );
}
