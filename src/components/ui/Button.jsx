import React from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500/40 shadow-soft",
  ghost:
    "bg-transparent text-black hover:bg-black/5 border border-black/10 focus:ring-black/10",
  outline:
    "bg-white text-black border border-brand-600/40 hover:border-brand-600 hover:bg-brand-500/10 focus:ring-brand-500/30",
  glow:
  "bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:opacity-95 focus:ring-brand-500/40 shadow-soft",
};

export default function Button({ to, href, onClick, variant = "primary", children, className = "" }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}