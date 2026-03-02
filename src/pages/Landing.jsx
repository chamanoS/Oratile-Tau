import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg1.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Build Strong Brands.
            <br />
            Protect Your Reputation.
          </h1>

          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            Strategic communication and public relations that help organisations
            lead with clarity and confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/consultation"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Request Consultation
            </Link>

            <Link
              to="/services"
              className="rounded-lg border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}