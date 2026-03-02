import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="Services"
        title="What we offer"
        subtitle="A clear set of services designed to strengthen reputation, align messaging, and build stakeholder trust."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="p-6">
            <div className="text-sm font-semibold">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-black/70">{s.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button to="/contact">Request a Consultation</Button>
        <Button to="/portfolio" variant="ghost">View Experience</Button>
      </div>
    </Container>
  );
}