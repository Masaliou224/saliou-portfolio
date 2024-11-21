import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TJM Simulator",
      description: "A resposive TJM simulator for freelance with the possibility to use african currency.",
    },
    {
      title: "MarketPlace",
      description: "An online marketplace for sellers and buyers.",
    },
    {
      title: "N'mafôkhai",
      description: "N'mafôkhai is a website for connecting homeowners and tenants.",
    },
    {
      title: "Audio Player",
      description: "Audio-Player app developed in React.JS and Next.JS.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-700 text-center">
      <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-300"
          >
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;