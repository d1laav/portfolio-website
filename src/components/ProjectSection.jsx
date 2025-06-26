import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Figma, Github, XIcon } from "lucide-react";
import GithubButton from "@/components/GithubButton";
import ProjectCard3D from "@/components/ProjectCard3D";

const projects = [
	{
		id: 1,
		title: "TV On Air 9.0 Website",
		description:
			"An informative website to inform users about the session TV On Air 9.0 event.",
		images: [
			"/projects/project1.1.png",
			"/projects/project1.2.png",
			"/projects/project1.3.png",
		],
		tags: ["React", "Tailwind CSS"],
		github: "https://github.com/d1laav/tvonair-9.0",
		link: "https://tvonair.umn.ac.id/",
		figma: "#",
	},
	{
		id: 2,
		title: "UMN TV Website",
		description:
			"Updating website to display current programs & latest articles from UMN TV.",
		images: [
			"/projects/project2.1.png",
			"/projects/project2.2.png",
			"/projects/project2.3.png",
		],
		tags: ["Laravel", "Bootstrap", "Tailwind CSS", "JavaScript", "MySQL"],
		github: "#",
		link: "https://tv.umn.ac.id/",
		figma: "#",
	},
	{
		id: 3,
		title: "Memoir App - personal diary",
		description:
			"A diary app that allows users to write and save their daily experiences.",
		images: [
			"/projects/project3.1.png",
			"/projects/project3.2.png",
			"/projects/project3.3.png",
			"/projects/project3.4.png",
		],
		tags: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
		github: "https://github.com/d1laav/Memoir_App",
		link: "#",
		figma: "#",
	},
	{
		id: 4,
		title: "Design UI - RS Permata Pamulang",
		description:
			"A UI design project for RS Permata Pamulang, showcasing modern healthcare interface design.",
		images: [
			"/projects/project4.1.png",
			"/projects/project4.2.png",
			"/projects/project4.3.png",
			"/projects/project4.4.png",
		],
		tags: ["Figma", "UI/UX Design"],
		github: "#",
		link: "#",
		figma:
			"https://www.figma.com/design/lRFeOALmDMZYxfRhRjzuv3/Project-TA?node-id=229-2964&t=FqoyCL4aHuKiESBk-0",
	},
	{
		id: 5,
		title: "Portfolio Website",
		description:
			"My personal portfolio website showcasing my projects and skills.",
		images: [
			"/projects/project5.1.png",
			"/projects/project5.2.png",
			"/projects/project5.3.png",
			"/projects/project5.4.png",
		],
		tags: ["React", "Tailwind CSS", "Framer Motion", "React Spring", "Vite"],
		github: "https://github.com/d1laav/web-Porto",
		link: "https://david-immanuel-portofolio.vercel.app/",
		figma: "#",
	},
];

export const ProjectSection = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<section
			id="projects"
			className="bg-projects py-52 px-4 relative z-10 min-h-screen snap-start"
		>
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured{" "}
					<span className="text-primary">Projects</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Dive into a collection of my favorite digital creations — websites
					and mobile apps that blend functionality and design to deliver
					seamless user experiences.
				</p>

				<div
					className={`
    grid gap-10
    grid-cols-1
    ${projects.length === 2 ? "md:grid-cols-2" : ""}
    ${projects.length >= 3 ? "md:grid-cols-3" : ""}
    justify-items-center
  `}
				>
					{projects.map((project) => (
						<ProjectCard3D
							key={project.id}
							project={project}
							onClick={setSelectedProject}
						/>
					))}
				</div>

				<div className="text-center mt-12">
					<GithubButton />
				</div>
			</div>

			{/* Modal Pop-up */}
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
							{/* Tombol close */}
							<button
								onClick={() => setSelectedProject(null)}
								className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
							>
								<XIcon className="w-5 h-5" />
							</button>

							{/* Carousel */}
							<div className="relative w-full overflow-hidden bg-muted py-6 px-2">
								<motion.div
									className="flex gap-6 w-max"
									animate={{ x: ["0%", "-50%"] }}
									transition={{
										repeat: Infinity,
										duration: 20,
										ease: "linear",
									}}
								>
									{[...selectedProject.images, ...selectedProject.images].map(
										(img, i) => (
											<img
												key={i}
												src={img}
												alt={`${selectedProject.title} ${i + 1}`}
												className="h-64 w-auto object-contain rounded-md shadow-md"
											/>
										)
									)}
								</motion.div>
							</div>

							{/* Info */}
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{selectedProject.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{selectedProject.description}
								</p>
								<div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
									{selectedProject.tags.map((tag, i) => (
										<span
											key={i}
											className="px-2 py-1 bg-muted text-secondary-foreground rounded-full"
										>
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
									{selectedProject.figma !== "#" && (
										<a
											href={selectedProject.figma}
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline"
										>
											<Figma />
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
