import React from 'react'

interface SkillTileProps {
    name: string;
    imageUrl: string;
}


const SkillTile = ({name, imageUrl}: SkillTileProps) => {
  return (
    <div className="group w-35 h-35 px-2.5 py-7 bg-white hover:bg-black text-white duration-300 ease-in-out inline-flex justify-center items-center gap-2.5 overflow-hidden">
    <div className="flex-1 self-stretch px-4 flex flex-col justify-center items-center gap-2 overflow-hidden">
        <div className="w-16 h-16 relative overflow-hidden">
            <img src={imageUrl} alt="Figma" className="w-full h-full object-contain" />
        </div>
        <div className="text-dark-grey group-hover:text-white text-xs font-bold text-center transition-colors duration-300">{name}</div>
    </div>
</div>
  )
}

export default SkillTile