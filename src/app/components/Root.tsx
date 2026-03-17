import React, { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Force top position before paint to avoid mobile scroll restore.
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
