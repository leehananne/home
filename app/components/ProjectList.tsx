import { DataProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {DataProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;