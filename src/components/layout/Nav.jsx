import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container.jsx";
import Badge from "../ui/Badge.jsx";

const linkBase =
  "rounded-xl px-3 py-2 text-sm transition hover:bg-black/5";
const linkActive = "bg-black/5";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" }
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white text-sm font-semibold">
            OT
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-black">Oratile Tau</div>
            <div className="text-xs text-black/60">PR & Strategic Communication</div>
          </div>
          <div className="hidden md:block">
            <Badge>South Africa</Badge>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : "text-black/80"}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-black/10 bg-white">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm ${isActive ? "bg-black/5" : "text-black/80 hover:bg-black/5"}`
                  }
                  end={l.to === "/"}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}