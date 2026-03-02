import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { portfolio } from "../data/content.js";

export default function Portfolio() {
  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="Portfolio / Experience"
        title="Proven work across multiple sectors"
        subtitle={portfolio.summary}
      />

      <Card className="p-6">
        <div className="text-sm font-semibold">Experience Includes</div>
        <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-black/70 sm:grid-cols-2">
          {portfolio.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/contact">Request Case Studies</Button>
          <Button to="/contact" variant="ghost">Ask for Client References</Button>
        </div>
      </Card>
    </Container>
  );
}