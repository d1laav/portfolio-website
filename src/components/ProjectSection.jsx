import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, XIcon, ArrowRight } from "lucide-react";
import GitHubButton from "@/components/GithubButton";

const projects = [
  {
    id: 1,
    title: "TV On Air 9.0 Website",
    description: "A informative website to inform users about the session TV On Air 9.0 event.",
    images: ["/projects/project1.1.png", "/projects/project1.2.png", "/projects/project1.3.png"],
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/d1laav/tvonair-9.0",
    link: "https://tvonair.umn.ac.id/",
  },
  {
    id: 2,
    title: "UMN TV Updating Website",
    description: "A website to display the current programs & update the latest article from UMN TV.",
    images: ["/projects/project2.1.png", "/projects/project2.2.png", "/projects/project2.3.png"],
    tags: ["Laravel", "Bootstrap", "Tailwind CSS", "JavaScript", "MySQL"],
    github: "#",
    link: "https://tv.umn.ac.id/",
  },
  {
    id: 3,
    title: "Memoir App - personal diary",
    description: "A personal diary app that allows users to write and save their daily experiences.",
    images: ["/projects/project3.1.png", "/projects/project3.2.png", "/projects/project3.3.png", "/projects/project3.4.png"],
    tags: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    github: "https://github.com/d1laav/Memoir_App",
    link: "#",
  },
];

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dive into a collection of my favorite digital creations — websites
          and mobile apps that blend functionality and design to deliver seamless
          user experiences.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.05]"
            >
              {/* Image */}
              <div className="w-full h-40 bg-muted overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-md font-semibold text-center text-foreground transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="text-center mt-12">
            <a className="w-fit flex items-center mx-auto gap-2">
              <GitHubButton />
            </a>
          </div>
        </div>
      </div>

      {/* Pop-Up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layout
              className="bg-card max-w-3xl w-full mx-4 rounded-lg overflow-hidden shadow-xl relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (tetap di kanan atas) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* Image Carousel Infinite Scroll */}
              <div className="relative w-full overflow-hidden bg-muted py-6 px-2">
                <motion.div
                  className="flex gap-6 w-max"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                  }}
                >
                  {/* Duplicate image array for smooth infinite effect */}
                  {[...selectedProject.images, ...selectedProject.images].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} ${i + 1}`}
                      className="h-64 w-auto object-contain rounded-md shadow-md"
                    />
                  ))}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 items-center">
                  {selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <ExternalLink />
                    </a>
                  )}
                  {selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};