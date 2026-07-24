import AppShell from "@/components/layout/AppShell";

import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import Focus from "./sections/Focus";
import Contact from "./sections/Contact";

export default function HomePage() {
  return (
    <AppShell>
      <div className="flex flex-col">
        <div className="order-1">
          <Hero />
        </div>
        
        <div className="order-2 md:order-3">
          <Projects />
        </div>

        <div className="order-3 md:order-2">
          <Focus />
        </div>

        <div className="order-4">
          <Contact />
        </div>
      </div>
    </AppShell>
  );
}