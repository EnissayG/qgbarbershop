
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { purgeLegacySquire } from "./app/lib/purgeLegacySquire";
import "./styles/index.css";

purgeLegacySquire();

createRoot(document.getElementById("root")!).render(<App />);
  