import React, { useMemo, useState } from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import { insights } from "../data/content.js";

const demoPosts = [
  { title: "Building stakeholder trust through consistent messaging", tag: "Strategy", date: "2026-03-01" },
  { title: "Press release structure: clarity wins attention", tag: "Media", date: "2026-02-18" },
  { title: "Crisis communication: speed, accuracy, and empathy", tag: "Crisis", date: "2026-02-07" }
];

export default function Insights() {
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return demoPosts;
    return demoPosts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="Insights / Newsroom"
        title="Thought leadership that shapes conversation"
        subtitle={insights.intro}
      />

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {insights.topics.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/70"
            >
              {t}
            </span>
          ))}
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search insights…"
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10 sm:w-64"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-black/50">{p.tag}</div>
              <div className="text-xs text-black/40">{p.date}</div>
            </div>
            <div className="mt-2 text-sm font-semibold">{p.title}</div>
            <p className="mt-2 text-sm text-black/70">
              Replace these demo posts with your real articles, press releases, and company updates.
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}