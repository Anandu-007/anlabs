"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { SITE } from "@/lib/constants";
import ArchitecturePreview from "./ArchitecturePreview";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
   transition: {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
},
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroTransition = {
  type: "spring" as const,
  stiffness: 50,
  damping: 20,
  delay: 0.4,
};

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:flex-row lg:items-center">
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Brand */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400"
          >
            {SITE.brand}
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Hey, it's{" "}
            <span className="text-blue-400">
              {SITE.author}
            </span>
          </motion.h1>

          {/* Main Copy */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300"
          >
            Building secure APIs, scalable backend systems, and AI-powered
            applications using modern backend technologies.
          </motion.p>

          {/* Supporting Copy */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            I focus on designing production-ready software with
            authentication, database design, REST APIs, and clean
            architecture that scales beyond simple CRUD applications.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-blue-500 hover:text-white"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6"
          >
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                FastAPI
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Backend Focus
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">
                REST APIs
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Production APIs
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                SQL
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Database Design
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={heroTransition}
          className="relative max-w-full overflow-hidden"
        >
          <ArchitecturePreview />
        </motion.div>
      </div>
    </section>
  );
}