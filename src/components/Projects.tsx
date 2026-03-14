"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GraduationCap, Music, Dumbbell, Globe } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  tags: string[];
  icon: React.ElementType;
  iconColor: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Lycée Alkhwarizmi",
    subtitle: "School Platform",
    description:
      "Complete school website for Lycée Qualifiant Alkhwarizmi in Aït Amira, Morocco — featuring news, community, student portal, and real-time announcements for 1200+ students.",
    href: "https://alkhwarizmi-blue.vercel.app/",
    tags: ["Next.js", "React", "Vercel", "Tailwind CSS", "Full Stack"],
    icon: GraduationCap,
    iconColor: "text-sky",
    gradient: "from-sky/20 to-transparent",
  },
  {
    title: "SVT Notes Portal",
    subtitle: "Education SaaS",
    description:
      "Grades and attendance management portal for teachers and students at Lycée Alkhawarizmi — with role-based authentication, document access, and absence tracking.",
    href: "https://svt-portail.vercel.app/login",
    tags: ["Next.js", "Authentication", "Dashboard", "Tailwind CSS"],
    icon: GraduationCap,
    iconColor: "text-violet",
    gradient: "from-violet/20 to-transparent",
  },
  {
    title: "Bailamos Festival",
    subtitle: "Event Website",
    description:
      "Official website for the Marrakech Bailamos Festival 6th Edition — a world-class bachata event at Palais des Congrès with ticket booking, countdown, FAQ, and venue showcase.",
    href: "https://bailamos-festival.vercel.app/",
    tags: ["Next.js", "React", "Animations", "Responsive Design"],
    icon: Music,
    iconColor: "text-accent",
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Marco & Sara",
    subtitle: "E-Learning Platform",
    description:
      "Premium dance e-learning platform for world-renowned bachata instructors — featuring 500+ video lessons, subscription plans, student testimonials, and course catalog.",
    href: "https://marcoysara.vercel.app/",
    tags: ["Next.js", "Stripe", "Video Streaming", "Auth", "Tailwind CSS"],
    icon: Dumbbell,
    iconColor: "text-emerald",
    gradient: "from-emerald/20 to-transparent",
  },
  {
    title: "Gero & Miglė",
    subtitle: "E-Learning Platform",
    description:
      "Online dance academy for instructors Gero & Miglė — with structured programs, partnerwork classes, styling courses, and masterclasses accessible from any device, 24/7.",
    href: "https://geroymigle.vercel.app/",
    tags: ["Next.js", "React", "Responsive", "UI/UX Design"],
    icon: Dumbbell,
    iconColor: "text-accent-light",
    gradient: "from-accent-light/20 to-transparent",
  },
  {
    title: "Klau & Ros — Endless Academy",
    subtitle: "E-Learning Platform",
    description:
      "Global bachata e-learning platform with 50+ courses, 300+ students across 50+ countries — featuring guided programs, subscriptions, and a community for dancers worldwide.",
    href: "https://klau-ros.vercel.app/",
    tags: ["Next.js", "E-Commerce", "Auth", "Dashboard", "Tailwind CSS"],
    icon: Globe,
    iconColor: "text-sky",
    gradient: "from-sky/20 to-transparent",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden hover-shine cursor-pointer"
    >
      {/* Gradient top accent */}
      <div
        className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
              <project.icon size={20} className={project.iconColor} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              <span className="text-xs text-muted font-mono tracking-wide">
                {project.subtitle}
              </span>
            </div>
          </div>
          <ExternalLink
            size={16}
            className="text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 mt-1"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-background border border-border text-muted group-hover:border-accent/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-accent via-accent-light to-accent transition-all duration-700" />
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="gradient-orb w-[500px] h-[500px] bg-accent bottom-[-150px] left-[-200px] animate-pulse-glow" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            // Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Things I&apos;ve{" "}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-lg">
            A selection of live projects — from school platforms and education
            SaaS to international event sites and e-learning academies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/hbouamair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/40 text-muted hover:text-accent rounded-xl transition-all duration-300 text-sm font-medium"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
