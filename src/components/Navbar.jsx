// src/components/Navbar.jsx
import React from "react";
function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-text"
        >
          <span className="text-primary">&lt;</span>
          Anil
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Contact
          </a>
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:brightness-110 md:block"
        >
          Resume
        </a>

        {/* Mobile menu button */}
        <button
          className="text-text md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;