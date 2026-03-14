"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Globe, Smartphone } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Code2, label: "Technologies", value: "15+" },
  { icon: Globe, label: "Companies", value: "5+" },
  { icon: Smartphone, label: "Platforms", value: "Web & Mobile" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            // About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Building the{" "}
            <span className="gradient-text">digital future</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="text-foreground font-medium">
                Software Engineer
              </span>{" "}
              currently working at{" "}
              <span className="text-accent font-medium">
                Orange Business Maroc
              </span>
              , where I develop network softwarization solutions for B2B and
              Wholesale markets using Java, Spring, and Camunda.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              With over 5 years of experience spanning{" "}
              <span className="text-foreground font-medium">
                backend, frontend, and mobile
              </span>{" "}
              development, I&apos;ve contributed to diverse projects — from
              fiber network access APIs and CI/CD automation to full-stack
              web applications and Android delivery apps.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I thrive in{" "}
              <span className="text-foreground font-medium">Agile</span>{" "}
              environments using Scrum and SAFe methodologies, and I&apos;m
              always eager to tackle complex technical challenges with clean,
              scalable solutions.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover-shine"
              >
                <stat.icon
                  size={22}
                  className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
