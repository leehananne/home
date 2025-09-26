import { DataProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const sortedProjects = DataProjects.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
  
  return (
    <div className="flex flex-wrap gap-4">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;