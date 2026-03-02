import React, { useMemo, useState } from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { brand, services } from "../data/content.js";

const initial = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  timeline: "",
  message: ""
};

export default function Consultation() {
  const [form, setForm] = useState(initial);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.service.trim()) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Briefly describe what you need.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e) {
    e.preventDefault();
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      service: true,
      timeline: true,
      message: true
    });
    if (!canSubmit) return;

    const subject = encodeURIComponent("Consultation Request — Oratile Tau (Pty) Ltd");
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nCompany Name: ${form.companyName}\nEmail: ${form.email}\nContact Number: ${form.phone}\nService: ${form.service}\nTimeline: ${form.timeline}\n\nMessage:\n${form.message}\n`
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="Consultation"
        title="Request a consultation"
        subtitle="Tell us what you need. We’ll respond with next steps and a proposed approach."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-1">
          <div className="text-sm font-semibold">What happens next</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-black/70">
            <li>We review your request</li>
            <li>We confirm scope + objectives</li>
            <li>We propose a plan + timeline</li>
          </ol>

          <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-brand-900">
            <div className="font-semibold">Contact</div>
            <div className="mt-2 text-brand-900/90">
              {brand.email}
              <br />
              {brand.phone}
            </div>
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              value={form.fullName}
              onChange={(v) => update("fullName", v)}
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              error={touched.fullName ? errors.fullName : ""}
            />
            <Field
              label="Company Name"
              value={form.companyName}
              onChange={(v) => update("companyName", v)}
              onBlur={() => setTouched((t) => ({ ...t, companyName: true }))}
            />

            <Field
              label="Email"
              value={form.email}
              onChange={(v) => update("email", v)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              error={touched.email ? errors.email : ""}
            />
            <Field
              label="Phone"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            />

            <div className="sm:col-span-1">
              <label className="text-xs font-medium text-black/70">Service</label>
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, service: true }))}
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {touched.service && errors.service ? (
                <div className="mt-1 text-xs text-red-600">{errors.service}</div>
              ) : null}
            </div>

            <Field
              label="Timeline (optional)"
              value={form.timeline}
              onChange={(v) => update("timeline", v)}
              onBlur={() => setTouched((t) => ({ ...t, timeline: true }))}
              placeholder="e.g., ASAP / This month / Q2"
            />

            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-black/70">
                Brief description
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                rows={6}
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500/20"
                placeholder="What are your goals, audience, and context? Any links or background helps."
              />
              {touched.message && errors.message ? (
                <div className="mt-1 text-xs text-red-600">{errors.message}</div>
              ) : null}
            </div>

            <div className="sm:col-span-2 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 ${
                  canSubmit
                    ? "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500/30 shadow-soft"
                    : "bg-black/10 text-black/40 cursor-not-allowed"
                }`}
              >
                Send request
              </button>

              <Button to="/services" variant="outline">View Services</Button>
              <Button to="/contact" variant="ghost">General Contact</Button>
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}

function Field({ label, value, onChange, onBlur, placeholder, error }) {
  return (
    <div>
      <label className="text-xs font-medium text-black/70">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500/20"
      />
      {error ? <div className="mt-1 text-xs text-red-600">{error}</div> : null}
    </div>
  );
}