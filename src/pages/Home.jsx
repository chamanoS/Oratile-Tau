import React from "react";
import { motion } from "framer-motion";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import { ArrowRight, ShieldCheck, Target, PenTool } from "lucide-react";
import { brand, cta, services } from "../data/content.js";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_55%)]" />
        <Container className="py-14 sm:py-20">
          <motion.div variants={fade} initial="hidden" animate="show">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{brand.focus}</Badge>
              <Badge>Results-driven</Badge>
              <Badge>Ethical & Professional</Badge>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              {brand.tagline}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/70">
              {brand.name} helps organisations build strong brands, protect reputations,
              and deliver clear, impactful messages—grounded in strategy, storytelling,
              and stakeholder trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={cta.primary.href}>
                {cta.primary.label} <ArrowRight size={16} />
              </Button>
              <Button to={cta.secondary.href} variant="ghost">
                {cta.secondary.label}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <SectionTitle
            eyebrow="What we do"
            title="Strategic communication that builds trust"
            subtitle="Simple, focused services designed to protect credibility and strengthen your public presence."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Card key={s.title} className="p-5">
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-black/70">{s.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex">
            <Button to="/services" variant="ghost">
              Explore all services <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-black/[0.02]">
        <Container className="py-14">
          <SectionTitle
            eyebrow="Why Oratile Tau"
            title="Clear strategy. Confident messaging."
            subtitle="A minimalist approach: the essentials done exceptionally well."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Target size={18} /> Strategic Thinking
              </div>
              <p className="mt-2 text-sm text-black/70">
                Communication aligned to organisational objectives—intentional and measurable.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <PenTool size={18} /> Storytelling
              </div>
              <p className="mt-2 text-sm text-black/70">
                Strong narratives that enhance visibility and credibility with key stakeholders.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck size={18} /> Reputation Protection
              </div>
              <p className="mt-2 text-sm text-black/70">
                Proactive reputation management and crisis support when it matters most.
              </p>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">Book a Consultation</Button>
            <Button to="/portfolio" variant="ghost">View Experience</Button>
          </div>
        </Container>
      </section>
    </>
  );
}