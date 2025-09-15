import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Gear-up: AI Gadget Recommendation",
      image: "/gearup.png",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Gemini AI"],
      description: [
        "Shows electronics products like monitors and accessories",
        "Has an AI chatbot that recommends tech products when asked",
        "Lets users make accounts or log in to the store",
        "Displays products with sliding animations and special highlights"
      ]
    },
    {
      id: 2,
      title: "Hintellect: AI Code review",
      image: "/hintellect.png",
      tech: ["Bootstrap", "Node.js", "Express.js", "Python", "Gemini AI"],
      description: [
        "AI-powered tool for code review",
        "Analyzes code for bugs and tips",
        "Provides a smart score for efficiency",
        "Uses a proxy to call the AI"
      ]
    },
    {
      id: 3,
      title: "Blog Management API",
      image: "/blog.png",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      description: [
        "A RESTful blog management API",
        "Provides full CRUD for blogs/comments",
        "Features secure role-based access control",
        "Easy installation, setup, and testing"
      ]
    },
    {
      id: 4,
      title: "Product Management",
      image: "product.jpeg",
      tech: ["Bootstrap", "Node.js", "EJS", "MySQL"],
      description: [
        "RESTful API for database management",
        "Handles CRUD for employee and equipment",
        "Backend powered by Node.js and MySQL",
        "Frontend uses Bootstrap for responsiveness"
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background petals will appear here automatically from App.js */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-rose-300 uppercase tracking-widest text-sm text-center mb-2">MY WORK</h3>
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-rose-900 mb-16">Projects.</h2>

        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 mb-20 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg`}
          >
            {/* Project Image */}
            <div className="lg:w-1/2 hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl shadow-2xl w-full h-auto border-4 border-rose-200"
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-1/2 text-rose-900">
              <h3 className="text-3xl font-bold text-center lg:text-left mb-6">{project.title}</h3>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="space-y-3 text-lg">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-rose-500">✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;