import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TJM Simulator",
      description: "A resposive TJM simulator for freelance with the possibility to use african currency.",
      href: "https://github.com/Masaliou224/TJM-NAWAARI"
    },
    {
      title: "MarketPlace",
      description: "An online marketplace for sellers and buyers.",
      href: "https://github.com/Masaliou224/loumo-place.git"
    },
    {
      title: "N'mafôkhai",
      description: "N'mafôkhai is a website for connecting homeowners and tenants.",
      href: "https://github.com/Masaliou224/N-maf-khai.git"
    },
    {
      title: "Audio Player",
      description: "Audio-Player app developed in React.JS and Next.JS.",
      href: "https://github.com/Masaliou224/Audio-Player.git"
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
            <a href={project.href} >
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;