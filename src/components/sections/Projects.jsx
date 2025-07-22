import React from "react";
import weatherImg from "../../assets/weather-App.jpg";
import cookiesWebsiteImg from "../../assets/Cookies_Website.jpg";
import toDoImg from "../../assets/Todo_App.jpg";
import CalculatorImg from "../../assets/Basic_Calculator_App.jpg";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "A real-time weather application that provides current weather data",
      img: weatherImg,
      link: "https://scriptism.github.io/Weather-App/",
      github: "https://github.com/scriptism/Weather-App",
      color: {
        border: "hover:border-purple-400",
        text: "text-purple-400",
        hoverText: "hover:text-purple-300",
      },
    },
    {
      title: "Role Playing App",
      description: "Interactive character creation and gameplay system",
      img: cookiesWebsiteImg,
      link: "https://scriptism.github.io/Cookies-Website/",
      github: "https://github.com/scriptism/Cookies-Website",
      color: {
        border: "hover:border-blue-400",
        text: "text-blue-400",
        hoverText: "hover:text-blue-300",
      },
    },
    {
      title: "Todo App",
      description: "Productivity app to organize and track your daily tasks",
      img: toDoImg,
      link: "https://scriptism.github.io/ToDo-SCSS/",
      github: "https://github.com/scriptism/ToDo-SCSS",
      color: {
        border: "hover:border-green-400",
        text: "text-green-400",
        hoverText: "hover:text-green-300",
      },
    },
    {
      title: "Calculator App",
      description: "Basic calculator with advanced mathematical functions",
      img: CalculatorImg,
      link: "https://scriptism.github.io/Basic-Calculator/",
      github: "https://github.com/scriptism/Basic-Calculator",
      color: {
        border: "hover:border-yellow-400",
        text: "text-yellow-400",
        hoverText: "hover:text-yellow-300",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-8"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-800 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 p-4 rounded-xl border border-gray-700 ${project.color.border} transition-all duration-300`}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <div className="flex justify-center mb-3">
                  <img
                    src={project.img}
                    alt={`${project.title} Screenshot`}
                    className="max-h-32 w-auto object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-400 mb-3 text-sm">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.color.text} ${project.color.hoverText} font-medium text-sm inline-flex items-center`}
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${project.color.hoverText} font-medium text-sm inline-flex items-center`}
                    >
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
