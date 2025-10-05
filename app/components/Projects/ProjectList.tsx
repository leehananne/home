import { DataProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  selectedTags: string[];
}

const ProjectList = ({ selectedTags }: ProjectListProps) => {
  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length === 0 
    ? DataProjects 
    : DataProjects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );
  
  const sortedProjects = filteredProjects.sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
  
  return (
    <div className="self-stretch inline-flex justify-center items-center gap-2.5 flex-wrap content-center">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;