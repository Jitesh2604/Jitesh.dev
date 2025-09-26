import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} onClick={setActiveProject} />
        ))}
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
