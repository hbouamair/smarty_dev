"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/hbouamair", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hamza-bouamair/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hamza.bouamair@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="group">
            <span className="text-lg font-bold tracking-tight">
              <span className="gradient-text">&lt;</span>
              <span className="text-foreground">Smarty</span>
              <span className="gradient-text">/&gt;</span>
            </span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <span>&copy; {new Date().getFullYear()} Smarty. Built with</span>
            <Heart size={14} className="text-accent fill-accent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
