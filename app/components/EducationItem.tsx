import React from 'react'

interface ListProps {
    organisation: string;
    qualification: string;
    course: string;
    year: string;
    imageUrl: string;
}

const EducationItem = ({organisation, qualification, course, year, imageUrl}: ListProps) => {
  return (
    <div className="self-stretch h-24 p-2.5 inline-flex justify-start items-start gap-2.5">
        <div className="w-8 h-8 bg-white flex justify-center items-center gap-2.5 overflow-hidden">
            <img className="w-full h-full object-contain" src={imageUrl} alt={`${organisation} logo`} />
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="self-stretch justify-start dark:text-white text-dark-grey text-sm font-bold leading-none">{organisation}</div>
            <div className="justify-start text-sm font-light leading-none">{qualification}</div>
            <div className="justify-start text-sm font-light leading-none">{course}</div>
            <div className="justify-start text-sm font-light leading-none">{year}</div>
        </div>
    </div>
  )
}

export default EducationItem