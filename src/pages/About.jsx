import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import { about, team } from "../data/content.js";

export default function About() {
  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="About us"
        title="Professional, ethical, and impact-driven communication"
        subtitle="We help organisations manage public image and communicate with purpose and credibility."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-semibold">Who We Are</div>
          <p className="mt-2 text-sm leading-6 text-black/70">{about.whoWeAre}</p>
        </Card>

        <div className="grid gap-4">
          <Card className="p-6">
            <div className="text-sm font-semibold">Vision</div>
            <p className="mt-2 text-sm leading-6 text-black/70">{about.vision}</p>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold">Mission</div>
            <p className="mt-2 text-sm leading-6 text-black/70">{about.mission}</p>
          </Card>
        </div>
      </div>

      <Card className="mt-4 p-6">
        <div className="text-sm font-semibold">Values</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {about.values.map((v) => (
            <span
              key={v}
              className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-800"
            >
              {v}
            </span>
          ))}
        </div>
      </Card>

      {/* TEAM */}
      <div className="mt-12">
        <SectionTitle
          eyebrow="Our team"
          title="People behind the work"
          subtitle="A small, focused team built around strategy, clarity, and credibility."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Card
              key={m.name}
              className="group overflow-hidden transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={m.image}
                  alt={`${m.name} profile`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold">{m.name}</div>
                <div className="mt-1 text-xs font-medium text-brand-700">
                  {m.role}
                </div>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  {m.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}