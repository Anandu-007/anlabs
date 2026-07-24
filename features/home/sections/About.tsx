import { User } from "lucide-react";
import Section from "@/components/shared/Section";

export default function About() {
  return (
    <Section
      icon={User}
      title="Who I Am"
      subtitle="A quick introduction."
    >
      <p className="max-w-3xl text-lg leading-8 text-zinc-300">
        I'm <span className="font-semibold text-white">Anandu</span>, an MCA
        student passionate about building backend systems and AI applications.
        I learn by creating real-world software that is clean, scalable, and
        solves practical problems.
      </p>
    </Section>
  );
}