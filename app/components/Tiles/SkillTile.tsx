import React from 'react'
import { StaticImageData } from 'next/image'

interface SkillTileProps {
    name: string;
    description: string;
    imageUrl: string | StaticImageData;
}


const SkillTile = ({name, imageUrl, description}: SkillTileProps) => {
  return (
    <div className="text-white group w-35 h-35 px-2.5 py-2.5 bg-background hover:bg-dark-grey dark:hover:bg-white dark:text-black duration-300 ease-in-out inline-flex justify-center items-center gap-2.5 overflow-hidden">
    <div className="flex-1 self-stretch px-2 flex flex-col justify-center items-center gap-2 overflow-hidden">
        <div className="w-16 h-16 relative overflow-hidden">
            <img src={typeof imageUrl === 'string' ? imageUrl : imageUrl.src} alt={`${name} logo`} className="w-full h-full object-contain" />
        </div>
        <div className="gap-0 overflow-hidden">
          <div className=" text-xs font-bold text-center transition-colors duration-300">{name}</div>
          <div className=" text-xs italic font-light text-center transition-colors duration-300">{description}</div>
        </div>
    </div>
</div>
  )
}

export default SkillTile