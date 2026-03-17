import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const NAV_LINKS = [
  { path: "/", label: "Accueil" },
  { path: "/services", label: "Services" },
  { path: "/equipe", label: "Équipe" },
  { path: "/a-propos", label: "À Propos" },
  { path: "/contact", label: "Contact" },
] as const;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "equipe", Component: Team },
      { path: "a-propos", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
], { basename: import.meta.env.BASE_URL });
