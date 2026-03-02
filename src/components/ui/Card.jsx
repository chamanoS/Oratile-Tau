import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-black/10 bg-white shadow-soft ${className}`}>
      {children}
    </div>
  );
}