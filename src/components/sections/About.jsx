import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Svelte",
    "Typescript",
  ];
  const backendSkills = ["Node.js", "Express", "PostgreSQL", "MongoDB"];
  // const tools = ["Git", "Docker", "AWS", "Heroku"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-purple-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-lg mb-6">
              I am a Full Stack Developer with a passion for creating dynamic
              and responsive web applications. My journey in web development has
              been driven by a desire to build innovative solutions that enhance
              user experiences and solve real-world problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lx p-6">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="
        bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
        transition-transform duration-200 ease-linear
        hover:rotate-[5deg] hover:shadow-[0_3px_8px_rgba(59,130,246,0.15)]
        hover:bg-blue-500/20
      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lx p-6">
                <h3 className="text-xl font-bold mb-4">Backend</h3>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="
        bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm
        transition-transform duration-200 ease-linear
        hover:rotate-[5deg] hover:shadow-[0_3px_8px_rgba(59,130,246,0.15)]
        hover:bg-blue-500/20
      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏟 Education </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <strong>B.S. Civil Enginnerin</strong> - Jami University
                  (2011-2015)
                </li>
                <li>
                  freeCodeCamp's Certificates: Responsive Design, JavaScript
                  Algorithm, Backend and APIs{" "}
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🛠 Work Experience </h3>

              <div className="space-y-2 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Internship at Example GmbH (2025)
                  </h4>
                  <p>
                    Assist in Building frontend components and integrating REST
                    APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
