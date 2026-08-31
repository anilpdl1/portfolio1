import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
     

  title: "Chelsea Boots Landing Page",
  description:
    "A modern, responsive product landing page for Chelsea boots, featuring animated sections, product cards, responsive layouts, and a clean fashion-focused UI.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/anilpdl1/landingpage",
  live: "https://landingpage-weld-eight.vercel.app",



    },

    {
      title: "Project Two",
      description:
        "A full-stack application built to solve a real-world problem and practice modern web development.",
      tech: ["React", "Node.js", "SQL"],
      github: "https://github.com/yourusername/project-two",
      live: "https://project-two.vercel.app",
    },

    {
      title: "Project Three",
      description:
        "An application focused on clean UI, responsive design and efficient backend architecture.",
      tech: ["React", "Tailwind CSS", "Node.js"],
      github: "https://github.com/yourusername/project-three",
      live: "https://project-three.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16"
    >
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-serif text-text md:text-4xl">
          My <span className="gradient-text">Projects</span>
        </h2>

        <p className="mt-3 max-w-xl text-gray-400">
          Things I've built while learning, experimenting and solving
          problems.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
          >
            {/* Project Preview */}
            <div className="relative flex h-44 items-center justify-center overflow-hidden bg-black/40">
              <span className="text-7xl font-bold text-white/5 transition-all duration-500 group-hover:scale-110 group-hover:text-white/10">
                0{index + 1}
              </span>

              {/* Arrow */}
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 p-2 text-gray-400 transition-all duration-300 group-hover:rotate-45 group-hover:text-white">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-3">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;