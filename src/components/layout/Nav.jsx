import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import Badge from "../ui/Badge.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/landing", label: "Landing" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white text-sm font-semibold shadow-soft transition group-hover:scale-[1.05]">
            OT
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-black group-hover:text-brand-700 transition">
              Oratile Tau
            </div>
            <div className="text-xs text-black/60">
              PR & Strategic Communication
            </div>
          </div>

         
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `
                rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-brand-600 text-white shadow-soft"
                    : "text-black/80 hover:bg-brand-500/15 hover:text-brand-700"
                }
                `
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:border-brand-500/40 hover:bg-brand-500/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <Container className="py-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `
                    rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-brand-600 text-white"
                        : "text-black/80 hover:bg-brand-500/15 hover:text-brand-700"
                    }
                    `
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}