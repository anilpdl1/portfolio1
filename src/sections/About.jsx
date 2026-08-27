import React from "react";
import { motion } from "framer-motion";

function About() {
  const journey = [
    {
      number: "01",
      title: "Curious",
      description:
        "Started with programming and became curious about how software works under the hood.",
    },
    {
      number: "02",
      title: "Building",
      description:
        "Started building projects to turn ideas into working applications and strengthen my skills.",
    },
    {
      number: "03",
      title: "Growing",
      description:
        "Exploring full-stack development and continuously learning new technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16"
    >
      {/* Heading */}
      <h2 className="mb-16 text-3xl font-bold font-serif text-text md:text-4xl">
        About <span className="gradient-text">Me</span>
      </h2>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

        <div className="flex flex-col gap-16">
          {journey.map((item, index) => (
            <div
              key={item.number}
              className="relative flex items-center md:min-h-40"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:block">
                <div className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-black shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              </div>

              {/* Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`w-full md:w-[43%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10">
                  
                  {/* Number */}
                  <span className="text-sm font-mono text-cyan-400">
                    {item.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;