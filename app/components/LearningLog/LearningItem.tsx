import React from 'react'

interface LearningItemProps {
    title: string;
    date: string;
    emoji: string;
}

const LearningItem = ({title, date, emoji}: LearningItemProps) => {
  return (
    <div className="group w-full px-2.5 py-3.5 rounded-[10px] outline-1 outline-offset-[-1px] outline-grey inline-flex justify-between items-start overflow-hidden bg-white hover:bg-dark-grey text-white duration-300 ease-in-out">
    <div className="flex justify-start items-center gap-2.5">
        <div className="justify-start text-dark-grey group-hover:text-white text-xs font-normal leading-none transition-colors duration-300">{emoji}</div>
        <div className="justify-start text-dark-grey group-hover:text-white text-xs font-semibold leading-none transition-colors duration-300">{title}</div>
    </div>
    <div className="justify-start text-dark-grey group-hover:text-white text-xs font-normal leading-none transition-colors duration-300">{date}</div>
</div>
  )
}

export default LearningItem