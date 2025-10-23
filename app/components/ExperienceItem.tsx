import React from 'react'

interface ExperienceProps {
    role: string;
    type: string;
    company: string;
    dates: string;
    imageUrl: string;
}

const ExperienceItem = ({role, type, company, dates, imageUrl}: ExperienceProps) => {
return (
    <div className="self-stretch h-24 p-2.5 inline-flex justify-start items-start gap-2.5">
        <div className="w-8 h-8 bg-white flex justify-center items-center gap-2.5 overflow-hidden">
            <img className="w-full h-full object-contain" src={imageUrl} alt={`${company} logo`} />
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="self-stretch justify-start dark:text-white text-dark-grey text-sm font-bold leading-none">{role}</div>
            <div className="justify-start text-sm font-light leading-none">{type}</div>
            <div className="justify-start text-sm font-light leading-none">{company}</div>
            <div className="justify-start text-sm font-light leading-none">{dates}</div>
        </div>
    </div>
    )
}

export default ExperienceItem