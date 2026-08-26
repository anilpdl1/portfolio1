import React from "react";

function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-16 md:px-12"
    >
      {/* Heading */}
      <h2 className="text-4xl font-serif font-bold text-text md:text-5xl">
        About <span className="gradient-text">me</span>
      </h2>

      {/* Content */}
      <div className="mt-8 max-w-3xl">
        <p className="text-lg font-serif leading-relaxed text-muted md:text-xl">
          I'm a developer who likes building things and figuring out how they
          work under the hood. I enjoy working with JavaScript, React, Node.js,
          and databases, and I learn best by turning ideas into actual
          projects.
        </p>

        <p className="mt-6 text-lg font-serif leading-relaxed text-muted md:text-xl">
          I'm constantly experimenting, breaking things, fixing them, and
          trying to write better code along the way. Right now, I'm focused on
          sharpening my development skills, building projects I'm proud of,
          and growing into a better software developer.
        </p>
      </div>
    </section>
  );
}

export default About;