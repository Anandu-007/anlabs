import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Section from "@/components/shared/Section";

const CONTACTS = [
  {
    title: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <Section id="contact" icon={Mail} title="Let's Build Something Together">
      <div className="mb-10 max-w-2xl">
        <p className="text-xl font-medium text-white mb-4">
          Building a backend product? Need scalable REST APIs?
        </p>
        <p className="text-lg leading-8 text-zinc-400">
          I'm currently open to Backend Engineering Internships, AI Engineering Internships, Full Stack Roles, and exciting Open Source collaborations. I typically respond within 24 hours.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACTS.map(({ title, value, href, icon: Icon }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/70"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs text-zinc-400">
                  {value}
                </p>
              </div>
            </div>

            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
          </a>
        ))}
      </div>
    </Section>
  );
}