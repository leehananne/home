import { DataProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const sortedProjects = DataProjects.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
  
  return (
    <div className="self-stretch inline-flex justify-center items-center gap-2.5 flex-wrap content-center">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;