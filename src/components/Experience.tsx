"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

/* ── Company Logos (inline SVG / styled brand marks) ── */

function OrangeLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#FF7900" />
      <rect x="8" y="8" width="24" height="24" rx="4" fill="white" />
      <rect x="12" y="12" width="16" height="16" rx="2" fill="#FF7900" />
    </svg>
  );
}

function MorservsLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#6D28D9" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontWeight="700"
        fontSize="18"
        fontFamily="system-ui, sans-serif"
      >
        M
      </text>
    </svg>
  );
}

function AtosLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#0066A1" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontWeight="800"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.5"
      >
        atos
      </text>
    </svg>
  );
}

function NHComLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#0EA5E9" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontWeight="700"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        NH
      </text>
    </svg>
  );
}

function FiverrLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#1DBF73" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontWeight="800"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.5"
      >
        fiverr
      </text>
      <circle cx="33" cy="12" r="2.5" fill="white" />
    </svg>
  );
}

function LinkCenterLogo() {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
      <rect width="40" height="40" rx="10" fill="#F59E0B" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontWeight="700"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
      >
        LC
      </text>
    </svg>
  );
}

const companyLogos: Record<string, React.FC> = {
  "Orange Business Maroc": OrangeLogo,
  Morservs: MorservsLogo,
  Atos: AtosLogo,
  "NH COM": NHComLogo,
  Fiverr: FiverrLogo,
  "Link Center": LinkCenterLogo,
};

/* ── Data ── */

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Orange Business Maroc",
    role: "Software Engineer",
    type: "CDD",
    period: "Jun 2024 — Present",
    duration: "1 yr 10 mos",
    location: "Rabat, Morocco · Hybrid",
    description: [
      "Network softwarization for B2B and Wholesale market",
      "Building scalable enterprise solutions using Java and Spring Framework",
      "Implementing business process automation with Camunda BPM",
      "Working within Scrum and SAFe Agile frameworks",
    ],
    technologies: ["Java", "Spring", "Camunda", "REST APIs", "Git", "Scrum", "SAFe"],
  },
  {
    company: "Orange Business Maroc",
    role: "Software Engineer",
    type: "Full-time",
    period: "Jan 2023 — Jun 2024",
    duration: "1 yr 6 mos",
    location: "Rabat, Morocco · Hybrid",
    description: [
      "Created APIs using TypeScript and Python for fiber network access provisioning",
      "Built CI/CD configuration files for automated deployment via GitLab CI/CD",
      "Implemented automated testing with Karate framework",
      "Provided back-end support during production phases",
    ],
    technologies: ["TypeScript", "Python", "FastAPI", "GitLab CI/CD", "Karate", "REST APIs"],
  },
  {
    company: "Morservs",
    role: "Full Stack Engineer",
    type: "Full-time",
    period: "Feb 2022 — Dec 2022",
    duration: "11 mos",
    location: "Casablanca, Morocco",
    description: [
      "Created dynamic and reactive web applications using Angular for the front-end",
      "Developed RESTful services and business logic with Spring Boot",
      "Built cross-platform mobile applications using Ionic with Angular and Spring Boot",
    ],
    technologies: ["Angular", "Spring Boot", "Ionic", "Java", "TypeScript"],
  },
  {
    company: "Atos",
    role: "Android Engineer",
    type: "Full-time → Intern",
    period: "Feb 2021 — Jan 2022",
    duration: "1 yr",
    location: "Casablanca, Morocco",
    description: [
      "Continuous improvement of a parcel delivery mobile application",
      "Analyzed user needs and existing features to propose technical solutions",
      "Resolved technical issues during application maintenance",
    ],
    technologies: ["Android", "Java", "Jira"],
  },
  {
    company: "NH COM",
    role: "JavaScript Engineer Intern",
    type: "Internship",
    period: "Oct 2020 — Nov 2020",
    duration: "2 mos",
    location: "Rabat, Morocco",
    description: [
      "Built an E-commerce website using React.js and Redux",
    ],
    technologies: ["React.js", "Redux", "JavaScript"],
  },
  {
    company: "Fiverr",
    role: "Freelancer",
    type: "Freelance",
    period: "Sep 2019 — Present",
    duration: "6+ yrs",
    location: "Remote",
    description: [
      "Delivering web design and development services to international clients",
      "Specializing in modern CSS, web integration, and responsive design",
    ],
    technologies: ["CSS", "HTML", "JavaScript", "Web Design"],
  },
];

/* ── Components ── */

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Logo = companyLogos[exp.company];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-card border-2 border-accent group-hover:bg-accent transition-colors duration-300 z-10" />

      {/* Card */}
      <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-500 hover-shine">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          {/* Company logo */}
          <div className="shrink-0 w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {Logo ? <Logo /> : null}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {exp.role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-accent font-medium">{exp.company}</span>
              <span className="text-border hidden sm:inline">•</span>
              <span className="text-muted">{exp.type}</span>
            </div>
          </div>
          <div className="sm:text-right space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <MapPin size={12} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-background border border-border text-muted hover:text-accent hover:border-accent/30 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            // Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Where I&apos;ve{" "}
            <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px timeline-line" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
