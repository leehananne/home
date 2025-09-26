import React from 'react'
import { DataProjects } from "../../data/projects";
import ProjectCard from './ProjectCard'

export const ProjectCarousel = () => {
  const latestProjects = DataProjects
    .sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime())
    .slice(0, 5);
  
  return (
    <div className="carousel carousel-center w-full overflow-x-auto">
      {latestProjects.map((project) => (
        <div key={project.id} className="carousel-item mr-4 flex-shrink-0">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}
