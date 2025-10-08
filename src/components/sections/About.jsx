import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="relative w-full overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-cyan-500/50 blur-3xl filter"></div>
        <div className="absolute right-[10%] top-[50%] h-[300px] w-[300px] animate-pulse rounded-full bg-purple-500/50 blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:px-8">
        {/* Left: Photo with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="group relative flex-shrink-0"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <img
            src= "src/assats/image4.JPG"
            alt="Jitesh Pal"
            className="relative h-48 w-48 rounded-full border-4 border-slate-800 object-cover shadow-xl md:h-56 md:w-56"
          />
        </motion.div>

        {/* Right: About Me with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            About
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I'm{" "}
            <span className="font-bold text-white">Jitesh Pal </span>, a
            detail-oriented Full Stack Developer leveraging a strong foundation
            in the MERN stack from Masai School to build scalable web
            applications. As a Backend Developer Intern at InturnX, I built and
            optimized RESTful APIs with{" "}
            <span className="font-mono rounded-md bg-white/10 px-2 py-1 text-cyan-400">
              Node.js
            </span>{" "}
            and{" "}
            <span className="font-mono rounded-md bg-white/10 px-2 py-1 text-cyan-400">
              MongoDB
            </span> 
            , and implemented{" "}
            <span className="font-mono rounded-md bg-white/10 px-2 py-1 text-cyan-400">
              JWT authentication
            </span>{" "}
            for security.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            My project experience includes developing responsive frontends with{" "}
            <span className="font-mono rounded-md bg-white/10 px-2 py-1 text-cyan-400">
              React
            </span>{" "}
            and{" "}
            <span className="font-mono rounded-md bg-white/10 px-2 py-1 text-cyan-400">
              Next.js
            </span>
            , managing application state, and integrating external APIs. I am
            a collaborative team player  committed to continuous learning and
            effective problem-solving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}