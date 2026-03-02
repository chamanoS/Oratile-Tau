import React, { useMemo, useState } from "react";
import Container from "../components/ui/Container.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { brand } from "../data/content.js";

const initial = { fullName: "", companyName: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setTouched({ fullName: true, companyName: true, email: true, phone: true, message: true });
    if (!canSubmit) return;

    // Minimal “no-backend” submit: opens an email draft.
    const subject = encodeURIComponent("Consultation Request — Oratile Tau (Pty) Ltd");
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nCompany Name: ${form.companyName}\nEmail: ${form.email}\nContact Number: ${form.phone}\n\nMessage:\n${form.message}\n`
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Container className="py-14">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Whether you need strategic communication support or full PR management, we are ready to assist."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-1">
          <div className="text-sm font-semibold">Contact Details</div>
          <div className="mt-3 text-sm text-black/70">
            <div><span className="font-medium text-black">Email:</span> {brand.email}</div>
            <div className="mt-2"><span className="font-medium text-black">Phone:</span> {brand.phone}</div>
            <div className="mt-2"><span className="font-medium text-black">Location:</span> {brand.location}</div>
          </div>

          <div className="mt-6 text-xs text-black/50">
            Prefer a form? Use “Book a Consultation”.
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="text-sm font-semibold">Book a Consultation</div>

          <form className="mt-4 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
            <Field
              label="Full Name"
              value={form.fullName}
              onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              onChange={(v) => update("fullName", v)}
              error={touched.fullName ? errors.fullName : ""}
            />
            <Field
              label="Company Name"
              value={form.companyName}
              onBlur={() => setTouched((t) => ({ ...t, companyName: true }))}
              onChange={(v) => update("companyName", v)}
            />
            <Field
              label="Email Address"
              value={form.email}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              onChange={(v) => update("email", v)}
              error={touched.email ? errors.email : ""}
            />
            <Field
              label="Contact Number"
              value={form.phone}
              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              onChange={(v) => update("phone", v)}
            />

            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-black/70">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                rows={5}
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Tell us what you need help with…"
              />
              {touched.message && errors.message ? (
                <div className="mt-1 text-xs text-red-600">{errors.message}</div>
              ) : null}
            </div>

            <div className="sm:col-span-2 flex flex-wrap gap-3">
              <button
                type="submit"
                className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
                  canSubmit
                    ? "bg-black text-white hover:bg-black/90 shadow-soft"
                    : "bg-black/20 text-black/50 cursor-not-allowed"
                }`}
                disabled={!canSubmit}
              >
                Book a Consultation
              </button>

              <Button to="/services" variant="ghost">View Our Services</Button>
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}

function Field({ label, value, onChange, onBlur, error }) {
  return (
    <div>
      <label className="text-xs font-medium text-black/70">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
      />
      {error ? <div className="mt-1 text-xs text-red-600">{error}</div> : null}
    </div>
  );
}