import React from "react";
import { motion } from "framer-motion";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Badge from "../components/ui/Badge.jsx";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  PenTool,
  Star,
  Quote,
} from "lucide-react";
import { brand, cta, services } from "../data/content.js";

import heroBg from "../assets/team/hero-bg.jpg";

const testimonials = [
  {
    name: "Client Name",
    role: "Head of Communications",
    company: "Organisation",
    quote:
      "Oratile Tau delivered clear messaging and consistent execution. The media engagement was professional and outcomes-focused.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Founder",
    company: "SME / Startup",
    quote:
      "Our brand presence improved quickly. We felt supported, guided, and represented with credibility.",
    rating: 5,
  },
  {
    name: "Client Name",
    role: "Programme Manager",
    company: "NGO / Public Sector",
    quote:
      "Strategic, ethical, and responsive. The stakeholder communication was handled with care and precision.",
    rating: 5,
  },
];

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-black/40" />

        {/* Overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/70 to-white" />

        {/* subtle accent glow */}
        <div className="absolute -top-32 right-[-120px] -z-10 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-[-120px] -z-10 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

        <Container className="py-14 sm:py-20">
          <motion.div variants={fade} initial="hidden" animate="show">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-brand-500/20 bg-brand-500/10 text-brand-800">
                PR & Strategic Communication
              </Badge>
              <Badge className="border-brand-500/20 bg-brand-500/10 text-brand-800">
                Results-driven
              </Badge>
             
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              {brand.tagline}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/70">
              {brand.name} helps organisations build strong brands, protect
              reputations, and deliver clear, impactful messages—grounded in
              strategy, storytelling, and stakeholder trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/consultation" variant="outline">
                Request a Consultation
              </Button>
              <Button to={cta.secondary.href} variant="outline">
                {cta.secondary.label}
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <MiniStat label="Clarity" value="Clear messaging" />
              <MiniStat label="Credibility" value="Trusted voice" />
              <MiniStat label="Consistency" value="Aligned narratives" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-white">
        <Container className="py-14">
          <SectionTitle
            eyebrow="What we do: Our Services"
            title="Strategic communication that builds trust"
            subtitle="Focused services designed to protect credibility and strengthen public presence."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Card
                key={s.title}
                className="group p-6 transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold group-hover:text-brand-700 transition">
                    {s.title}
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-brand-500/12 border border-brand-500/20 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-brand-600" />
                  </div>
                </div>

                <p className="mt-3 text-sm text-black/70">{s.description}</p>

                <div className="mt-5 text-xs font-semibold text-brand-700 opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex">
            <Button to="/services" variant="outline">
              Explore all services <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="border-t border-black/10 bg-black/[0.02]">
        <Container className="py-14">
          <SectionTitle
            eyebrow="Why Oratile Tau"
            title="Professional support. Clear outcomes."
            subtitle="A modern PR and communication partner: strategic, ethical, and execution-focused."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <WhyCard
              icon={<Target size={18} className="text-brand-700" />}
              title="Strategy First"
              text="Communication aligned to objectives—measurable, intentional, and stakeholder-aware."
            />
            <WhyCard
              icon={<PenTool size={18} className="text-brand-700" />}
              title="Storytelling That Lands"
              text="Strong narratives that enhance visibility and protect credibility across channels."
            />
            <WhyCard
              icon={<ShieldCheck size={18} className="text-brand-700" />}
              title="Reputation Protection"
              text="Proactive reputation management and crisis support when it matters most."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/consultation" variant="glow">
              Request a Consultation
            </Button>
            <Button to="/portfolio" variant="ghost">
              View Experience
            </Button>
          </div>
        </Container>
      </section>

      {/*Portfolio*/}
      <Portfolio />

      {/* TESTIMONIALS / REVIEWS */}
      <section className="border-t border-black/10 bg-white">
        <Container className="py-14">
          <SectionTitle
            eyebrow="Client reviews"
            title="Trust is earned through delivery"
            subtitle="Add real testimonials over time—this section builds confidence fast."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card
                key={t.quote}
                className="group p-6 transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-brand-600 fill-brand-600"
                      />
                    ))}
                  </div>
                  <Quote size={18} className="text-black/30" />
                </div>

                <p className="mt-4 text-sm leading-6 text-black/75">
                  “{t.quote}”
                </p>

                <div className="mt-5 border-t border-black/10 pt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-black/60">
                    {t.role} • {t.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
            <div>
              <div className="text-sm font-semibold text-black">
                Want results like these?
              </div>
              <div className="mt-1 text-sm text-black/70">
                Request a consultation and we’ll propose an approach based on
                your goals.
              </div>
            </div>
            <Button to="/consultation" variant="glow">
              Request a Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
      <div className="text-xs font-medium uppercase tracking-wider text-black/50">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-black">{value}</div>
    </div>
  );
}

function WhyCard({ icon, title, text }) {
  return (
    <Card className="group p-6 transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon} {title}
      </div>
      <p className="mt-2 text-sm text-black/70">{text}</p>
      <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 opacity-0 transition group-hover:opacity-100" />
    </Card>
  );
}
