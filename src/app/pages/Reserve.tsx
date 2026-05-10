import { useEffect } from "react";

export function Reserve() {
  useEffect(() => {
    const existing = document.getElementById("squire-widget");
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://widget.getsquire.com/widget.js?brand=d8e21510-540e-4dc9-923f-cc4e8b7b7496";
      script.id = "squire-widget";
      script.setAttribute("data-name", "squire-widget");
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Réserver</h1>
      <div id="squire-booking" />
    </div>
  );
}
