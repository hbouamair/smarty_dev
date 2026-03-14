"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "dce6be70-bcd0-427c-9dff-d160c8203ee2";

const contactLinks = [
  {
    label: "Email",
    value: "hamza.bouamair@gmail.com",
    href: "mailto:hamza.bouamair@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hamza-bouamair",
    href: "https://www.linkedin.com/in/hamza-bouamair/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/hbouamair",
    href: "https://github.com/hbouamair",
    icon: Github,
  },
  {
    label: "Location",
    value: "Casablanca, Morocco",
    href: "#",
    icon: MapPin,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `🟠 Portfolio — ${formData.subject || "New Message"} from ${formData.name}`,
          from_name: "Smarty Portfolio",
          replyto: formData.email,
          // Structured fields for clean email layout
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Subject": formData.subject || "—",
          "Message": formData.message,
          // Separator line
          "---": "—————————————————————",
          "Sent From": "Portfolio Contact Form — smarty.dev",
          "Reply To": `Click reply to respond to ${formData.name} at ${formData.email}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] bg-accent top-[-100px] left-[50%] -translate-x-1/2 animate-pulse-glow" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase">
            // Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Let&apos;s work{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover-shine"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                  <link.icon size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted uppercase tracking-wider mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-sm text-foreground font-medium truncate">
                    {link.value}
                  </div>
                </div>
                {link.href !== "#" && (
                  <ExternalLink
                    size={16}
                    className="text-muted group-hover:text-accent transition-colors duration-300 shrink-0"
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 p-6 rounded-2xl bg-card border border-border"
            onSubmit={handleSubmit}
          >
            {/* Honeypot for spam bots */}
            <input type="hidden" name="botcheck" style={{ display: "none" }} />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-xs text-muted uppercase tracking-wider mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
              />
            </div>

            {/* Submit button with states */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" && (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              )}
              {status === "idle" && (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={16} />
                  Failed — Try Again
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald text-center"
              >
                Thank you! Your message has been received. I&apos;ll get back to
                you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 text-center"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
