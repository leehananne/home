import React from 'react'

export const Footer = () => {
  return (
    <div className="self-stretch w-full px-7 py-12 bg-dark-grey inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
      <div className="w-6 h-6">
      <div className="justify-start text-white dark:text-white text-2xl font-black leading-7">A.</div>
      </div>
      <div className="justify-start text-light-grey text-xs font-bold leading-none">LinkedIn</div>
      <div className="justify-start text-light-grey text-xs font-bold leading-none">GitHub</div>
    </div>
  )
}
