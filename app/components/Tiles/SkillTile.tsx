import React from 'react'

interface SkillTileProps {
    imageUrl: string;
}


const SkillTile = ({imageUrl}: SkillTileProps) => {
  return (
    <div className="w-24 h-24 px-2.5 py-7 bg-white hover:bg-dark-grey duration-300 ease-in-out inline-flex justify-center items-center gap-2.5 overflow-hidden">
    <div className="flex-1 self-stretch px-4 flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="w-16 h-20 relative overflow-hidden">
            <img src={imageUrl} alt="Figma" className="w-full h-full object-contain" />
        </div>
    </div>
</div>
  )
}

export default SkillTile