'use client'

import React from 'react'

interface CtaLinkProps {
  link: string;
  text: string;
}

const CtaLink = ({ link, text }: CtaLinkProps) => {
  return (
    <div className='w-full flex justify-end'>
        <a href={link} className="inline-flex flex-col justify-end items-end gap-2 group relative">
        <div className="inline-flex justify-end items-center gap-[5px]">
            <div className="text-dark-grey dark:text-white text-sm font-normal leading-none group-hover:font-medium transition-all duration-300">{text}</div>
            <div className="w-3.5 h-3.5 relative">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-3 h-3 stroke-dark-grey dark:stroke-white group-hover:stroke-[2.5] transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="w-0 h-0.5 dark:bg-white bg-dark-grey group-hover:w-full transition-all duration-300 ease-out"></div>
        </a>
    </div>
    
  )
}

export default CtaLink