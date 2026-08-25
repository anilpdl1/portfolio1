// src/components/Navbar.jsx

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-white/10 bg-background/80 backdrop-blur-md">

      {/* Main Navbar */}
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


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-base font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            About
          </a>
           <a
            href="#education"
            className="text-base font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
          
            Education
          </a>
          <a
            href="#skills"
            className="text-base font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-base font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-base font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Contact
          </a>

         
         

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-xl text-text transition-colors duration-200 hover:text-primary md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>


      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-99 w-[75%]  bg-surface shadow-background transition-transform duration-300 ease-in-out sm:w-1/2 md:hidden ${
          isOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >

        {/* Drawer Header / Close Button */}
        <div className="flex h-10 items-center justify-end px-6">

          <button
            type="button"
            onClick={closeMenu}
            className="text-xl text-text transition-colors duration-200 hover:text-primary"
            aria-label="Close menu"
          >
            ✕
          </button>

        </div>


        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-end gap-8 px-12 pt-10">

          <a
            href="#about"
            onClick={closeMenu}
            className="text-xl font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            About
          </a>
          <a
            href="#education"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
             className="text-xl font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="text-xl font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="text-xl font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="text-xl font-medium text-muted transition-colors duration-200 hover:text-primary"
          >
            Contact
          </a>

          {/* Mobile Resume */}
        

        </div>

      </div>

    </nav>
  );
}

export default Navbar;