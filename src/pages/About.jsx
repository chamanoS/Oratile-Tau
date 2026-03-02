import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import { about } from "../data/content.js";

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
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/70"
            >
              {v}
            </span>
          ))}
        </div>
      </Card>
    </Container>
  );
}