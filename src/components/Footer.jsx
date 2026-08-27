import React from "react";
import { ArrowUp,   Mail } from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/30 px-6 py-10 md:px-12">
      {/* Gradient Line */}
      <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo / Intro */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Anil<span className="gradient-text">.</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              Building, learning and turning ideas into reality.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/anilpdl1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/anil-poudel-204b57248/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=paudelanil714@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
>
  <Mail size={18} />
</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {currentYear} Anil. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 text-xs text-gray-500 transition hover:text-white"
          >
            Back to top

            <span className="rounded-full border border-white/10 p-2 transition group-hover:-translate-y-1">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;