import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container.jsx";
import { brand } from "../../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-black">{brand.name}</div>
            <p className="mt-2 text-sm text-black/70">{brand.focus}</p>
            <p className="mt-4 text-sm text-black/70">
              <span className="font-medium text-black">Email:</span> {brand.email}
              <br />
              <span className="font-medium text-black">Phone:</span> {brand.phone}
              <br />
              <span className="font-medium text-black">Location:</span> {brand.location}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-black">Company</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-black/70 hover:text-black" to="/about">About</Link>
              <Link className="text-black/70 hover:text-black" to="/services">Services</Link>
              <Link className="text-black/70 hover:text-black" to="/portfolio">Portfolio</Link>
              <Link className="text-black/70 hover:text-black" to="/insights">Insights</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-black">Legal</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-black/70 hover:text-black" to="/privacy">Privacy Policy</Link>
              <Link className="text-black/70 hover:text-black" to="/terms">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-black">Follow</div>
            <p className="mt-3 text-sm text-black/70">
              LinkedIn • X (Twitter) • Facebook • Instagram
            </p>
            <p className="mt-4 text-xs text-black/50">
              Company Registration Number: {brand.registrationNumber}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {brand.name} | All Rights Reserved</div>
          <div className="text-black/50">Built with clarity, credibility, and confidence.</div>
        </div>
      </Container>
    </footer>
  );
}