import React from "react";
import {motion} from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "C", icon: <SiC />, color: "text-blue-500" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "SQL", icon: <SiMysql />, color: "text-blue-400" },
  ];

  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16 scroll-reveal "
    >
      <div className="flex flex-col gap-10">
        
        <h2 className="text-3xl font-bold font-serif text-white md:text-4xl">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill) => (
          <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="
    group
    flex flex-col items-center justify-center
    gap-4
    rounded-xl
    border border-white/10
    bg-white/5
    backdrop-blur-sm
    p-6
    transition-all duration-300
    hover:-translate-y-2
    hover:border-white/20
    hover:bg-white/10
  "
>
  <div
    className={`${skill.color} text-5xl transition-transform duration-300 group-hover:scale-110`}
  >
    {skill.icon}
  </div>

  <p className="text-white text-lg font-medium text-center">
    {skill.name}
  </p>
</motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;