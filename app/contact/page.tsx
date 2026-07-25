import Window from "@/components/os/Window";
import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import {
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  {
    title: "EMAIL",
    value: "tvanandu2019@gmail.com",
    description: "Send me an email",
    href: "mailto:tvanandu2019@gmail.com",
    icon: Mail,
    action: "OPEN",
  },
  {
    title: "PHONE",
    value: "+91 8590576306",
    description: "Call directly",
    href: "tel:+918590576306",
    icon: Phone,
    action: "CALL",
  },
  {
    title: "WHATSAPP",
    value: "Start Conversation",
    description: "Chat instantly",
    href: "https://wa.me/918590576306",
    icon: FaWhatsapp,
    action: "MESSAGE",
  },
  {
    title: "LINKEDIN",
    value: "linkedin.com/in/yourusername",
    description: "Professional Profile",
    href: "https://www.linkedin.com/in/anandu-t-v-556142248/",
    icon: FaLinkedin,
    action: "VISIT",
  },
];

export default function ContactPage() {
  return (
    <Window title="C:\\ANLABS\\CONTACT">
      <div className="p-6 md:p-10 h-full overflow-y-auto">
        <div className="max-w-5xl pr-8 lg:pr-12">

          <h1 className="text-4xl font-bold text-white">
            CONTACT
          </h1>

          <p className="text-zinc-500 mt-2 font-mono">
            Choose your preferred communication channel.
          </p>

          <div className="mt-10 grid gap-6">

            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="group border border-border hover:border-primary transition-all duration-300 bg-zinc-950 hover:bg-black p-6"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-start gap-5 flex-1 min-w-0">

                      <div className="w-16 h-16 border border-border group-hover:border-primary flex items-center justify-center transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-xs tracking-[0.25em] text-primary font-mono">
                          {contact.title}
                        </p>

                        <h2 className="text-xl text-white font-semibold mt-2 break-all">
                          {contact.value}
                        </h2>

                        <p className="text-zinc-500 mt-2">
                          {contact.description}
                        </p>

                      </div>

                    </div>

                    <div className="hidden md:flex items-center gap-2 font-mono text-primary group-hover:translate-x-2 transition-transform">
                      {contact.action}
                      <ArrowRight className="w-5 h-5" />
                    </div>

                  </div>
                </a>
              );
            })}

          </div>
        </div>
      </div>
    </Window>
  );
}