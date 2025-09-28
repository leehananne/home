import React from 'react'
import ViewProjectButton from '../ViewProjectButton'

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  associated: string;
  date: string;
  sortDate: Date;
  imageUrl: string;
}

const ProjectCard = ({ title, associated, date, imageUrl }: ProjectCardProps) => {
  return (
    <div className="w-60 inline-flex flex-col justify-start items-start overflow-hidden">
    <img className="w-60 h-60 block" src={imageUrl} alt={title} />
    <div className="self-stretch px-5 py-4 bg-dark-grey dark:bg-white inline-flex justify-between items-center overflow-hidden">
        <div className="inline-flex flex-col justify-start items-start gap-[3px]">
              <div className="justify-start text-white dark:text-dark-grey text-sm font-bold font-sans leading-none">{title}</div>
            <div className="justify-start text-white dark:text-dark-grey text-sm font-normal font-sans">{associated}</div>
            <div className="justify-start text-white dark:text-dark-grey text-sm font-normal font-sans">{date}</div>
        </div>
        <div className="w-6 h-6 relative">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 stroke-white dark:stroke-dark-grey">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard