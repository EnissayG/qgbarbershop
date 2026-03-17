import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";

export function Root() {
  const location = useLocation();

  useEffect(() => {
    // Always reset scroll on route change (mobile + desktop)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Outlet />
    </div>
  );
}
