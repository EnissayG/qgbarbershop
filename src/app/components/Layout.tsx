import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col bg-white">
      <Header />
      <main className="min-w-0 flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}