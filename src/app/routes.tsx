import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

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
    ],
  },
], { basename: import.meta.env.BASE_URL });
