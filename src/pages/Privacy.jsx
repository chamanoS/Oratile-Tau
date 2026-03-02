import React from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";

export default function Privacy() {
  return (
    <Container className="py-14">
      <SectionTitle eyebrow="Legal" title="Privacy Policy" subtitle="Replace this placeholder with your official policy." />
      <Card className="p-6 text-sm text-black/70 leading-6">
        This website may collect information you submit through the contact form (such as name, email, and message) for the purpose of responding to enquiries. We do not sell personal data.
      </Card>
    </Container>
  );
}