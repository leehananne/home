import React from 'react'

const MobileNav = () => {
  return (
        <div className="sticky w-full self-stretch px-7 py-5 bg-background border-b border-grey inline-flex justify-between items-center overflow-hidden">
        <div className="w-hug self-stretch inline-flex flex-col justify-center items-center gap-2.5">
            <div className="justify-start text-black dark:text-white text-2xl font-black leading-7">A.</div>
        </div>
        <div className="w-6 h-6 relative">
            <div className="w-6 h-6 left-0 top-0 absolute"></div>
            <div className="w-4 h-3.5 left-[3px] top-[5px] absolute">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="stroke-dark-grey dark:stroke-white size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default MobileNav