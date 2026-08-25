import profile from "../assets/photo.png";



function Hero() {
  return (
    <main
      id="home"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center gap-10 px-6 md:flex-row md:gap-20"
    >
      {/* Profile Image */}
      <div className="order-1 h-56 w-56 shrink-0 overflow-hidden rounded-full md:order-2 md:h-80 md:w-80">
        <img
          src={profile}
          alt="Anil"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Text */}
      <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
        <h1 className="text-3xl font-serif text-text md:text-5xl">
          Hey, I'm{" "}
          <strong className="gradient-text font-bold">
            Anil
          </strong>
        </h1>

        <h2 className="mt-3 text-4xl font-serif font-bold text-text md:text-6xl">
          Front-End Developer
        </h2>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          I build modern, responsive web applications with clean
          interfaces and reliable code.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="/Black and White Minimalist Accountant Resume (1).pdf" download="Anil_cv.pdf"
            className="rounded-lg bg-primary px-5 py-3 font-medium text-white transition hover:brightness-110"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/10 px-5 py-3 font-medium text-text transition hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;