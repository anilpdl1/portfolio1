import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-16 md:px-12"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-text md:text-4xl">
        My <span className="gradient-text">Education</span>
      </h2>

      {/* Education Cards */}
      <div className="mt-10 flex max-w-4xl flex-col gap-6">
        
        {/* Bachelor's */}
        <div className="rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
          <p className="text-xl font-semibold text-text md:text-2xl">
            Bachelor's in Computer Science & IT
          </p>

          <p className="mt-2 text-base text-muted md:text-lg">
            Prithvi Narayan Campus, Tribhuvan University
          </p>

          <p className="mt-3 text-sm text-muted/70">
            2023-present
          </p>
        </div>

        {/* High School */}
        <div className="rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-6">
          <p className="text-xl font-semibold text-text md:text-2xl">
            High School
          </p>

          <p className="mt-2 text-base text-muted md:text-lg">
            Pokhara Secondary School, Pokhara-1, Nepal
          </p>

          <p className="mt-3 text-sm text-muted/70">
           2020-2022
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;