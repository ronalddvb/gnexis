"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

const categories = [
  "Todos",
  "IA",
  "Automatización",
  "Casos de uso",
  "Desarrollo Web",
] as const;

export function BlogList() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");

  const filtered =
    filter === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  return (
    <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
      <div className="flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.025em] transition-colors ${
              filter === c
                ? "border-electric-iris bg-electric-iris text-white"
                : "border-white/15 text-ash-gray hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border-t border-white/10 pt-8"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              {post.category} · {post.readTime} de lectura
            </p>
            <h2 className="mt-4 text-[24px] font-normal leading-[1.25] tracking-[-0.48px] text-white group-hover:text-electric-iris">
              {post.title}
            </h2>
            <p className="mt-3 text-[15px] font-extralight leading-[1.5] text-silver-mist">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
