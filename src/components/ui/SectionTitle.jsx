import React from "react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <div className="text-xs font-medium uppercase tracking-wider text-black/50">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}