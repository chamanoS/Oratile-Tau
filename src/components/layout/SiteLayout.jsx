import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <Nav />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}