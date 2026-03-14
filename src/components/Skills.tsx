"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Server,
  Smartphone,
  Layers,
  GitBranch,
  Workflow,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: Server,
    iconColor: "text-accent",
    skills: ["Java", "Spring Boot", "Spring Framework", "Python", "FastAPI", "REST APIs", "Camunda BPM"],
  },
  {
    title: "Frontend",
    icon: Code2,
    iconColor: "text-sky",
    skills: ["TypeScript", "React.js", "Angular", "Next.js", "HTML5", "CSS3", "Redux"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    iconColor: "text-emerald",
    skills: ["Android", "Ionic", "Cross-Platform Development"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    iconColor: "text-violet",
    skills: ["Git", "GitLab CI/CD", "Docker", "Jira", "Karate Testing"],
  },
  {
    title: "Architecture",
    icon: Layers,
    iconColor: "text-accent-light",
    skills: ["Microservices", "RESTful APIs", "BPM", "Design Patterns"],
  },
  {
    title: "Methodologies",
    icon: Workflow,
    iconColor: "text-emerald",
    skills: ["Scrum", "SAFe", "Agile", "TDD"],
  },
];

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-500 hover-shine"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
          <category.icon size={20} className={category.iconColor} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-background border border-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="gradient-orb w-[500px] h-[500px] bg-violet bottom-[-200px] right-[-200px] animate-pulse-glow" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            // Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            My{" "}
            <span className="gradient-text">tech stack</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl text-lg">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
