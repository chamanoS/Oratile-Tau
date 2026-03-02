import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";

export default function Terms() {
  return (
    <Container className="py-14">
      <SectionTitle eyebrow="Legal" title="Terms & Conditions" subtitle="Replace this placeholder with your official terms." />
      <Card className="p-6 text-sm text-black/70 leading-6">
        All content is provided for general information. Engagements and services are subject to written agreements and scope confirmation.
      </Card>
    </Container>
  );
}