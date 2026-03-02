import React from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black/15";

const variants = {
  primary: "bg-black text-white hover:bg-black/90 shadow-soft",
  ghost: "bg-transparent text-black hover:bg-black/5 border border-black/10"
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