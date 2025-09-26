import React from 'react'
import { DataProjects } from "../../data/projects";
import ProjectCard from './ProjectCard'

export const ProjectCarousel = () => {
  return (
    <div className="carousel carousel-center w-full overflow-x-auto">
      {DataProjects.map((project) => (
        <div key={project.id} className="carousel-item mx-2 flex-shrink-0">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}
