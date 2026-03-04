"use client";

import { motion } from "framer-motion";
import { galleryPhotos } from "@/lib/data";

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Gallery</h1>
        <p className="mt-3 text-slate-600">A curated wall of our shared beauty.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((photo, index) => (
          <motion.div
            key={photo}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -6 }}
            className="premium-card overflow-hidden"
          >
            <img src={photo} alt={`Memory ${index + 1}`} className="h-72 w-full object-cover" />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
