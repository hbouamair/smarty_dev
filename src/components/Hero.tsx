"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="gradient-orb w-[600px] h-[600px] bg-accent top-[-200px] right-[-200px] animate-pulse-glow" />
      <div className="gradient-orb w-[400px] h-[400px] bg-violet top-[60%] left-[-150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg sm:text-xl text-muted font-mono tracking-wide mb-4"
        >
          Hi, I&apos;m <span className="text-accent">Hamza Bouamair</span>
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Software</span>
          <br />
          <span className="gradient-text">Engineer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Building robust, scalable software solutions with{" "}
          <span className="text-foreground font-medium">5+ years</span> of
          experience across{" "}
          <span className="text-foreground font-medium">backend, frontend & mobile</span>{" "}
          development.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted text-sm mb-10"
        >
          <MapPin size={14} className="text-accent" />
          <span>Casablanca, Morocco</span>
          <span className="mx-2 text-border">•</span>
          <span>Orange Business</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border hover:border-muted text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-card"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Tech stack quick preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 text-muted text-sm"
        >
          {["Java", "Spring", "TypeScript", "Python", "React", "Angular", "Android"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md bg-card border border-border text-xs font-mono tracking-wide hover:text-accent hover:border-accent/30 transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
