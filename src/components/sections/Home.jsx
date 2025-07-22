import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-400 bg-clip-text text-transparent leading-right">
            Hello, I am Aminullah
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
            I am a Full Stack Developer with a passion for creating dynamic and
            responsive web applications. I specialize in React, Node.js, and
            PostgreSQL, and I love turning ideas into reality through code.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className=" border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 hover:translate-y-0.5 
hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
