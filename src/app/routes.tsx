import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Formations } from "./pages/Formations";
import { Contact } from "./pages/Contact";
import { Reserve } from "./pages/Reserve";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "reserver", Component: Reserve },
      { path: "equipe", Component: Team },
      { path: "formations", Component: Formations },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
