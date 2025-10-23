import React from 'react'
import MobileNav from "../../components/MobileNav"
import { Footer } from "../../components/Footer"
import Heading from "../../components/Headings/Heading";
import Subheading from "../../components/Headings/Subheading";
import { images } from "../../assets/images";

export default function NestAssured() {
  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <Heading label='Nest Assured'/>

        <img className="block" src={typeof images.projects.nestAssuredWide === 'string' ? images.projects.nestAssuredWide : images.projects.nestAssuredWide.src} alt="nest-assured-hero" />
        <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/iS23X2kF1yc?si=IvX_ml7KBl9l7E3e" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <Heading label='Summary'/>

        <div className='w-full p-3'>
          <table className="table-fixed">
          <tbody>
            <tr>
              <td className='w-25 font-bold text-sm align-top pr-4 py-4'>About</td>
              <td className='py-4'>Deliverrable for an Industrial Design Engineering project spread across 2 terms,
                encompassing user research, prototyping and the delivery of a final working product.
              </td>
            </tr>
            
            <tr>
              <td className='font-bold text-sm align-top pr-4 py-3'>Problem</td>
              <td className='py-3'>Young adults with ADHD often over-plan to ensure keep structure in their
                day. Hence, forgetting essential items for their day can consequently
                exacerbate their condition and lead to feelings of negativity.</td>
            </tr>

            <tr>
              <td className='font-bold text-sm align-top pr-4 py-3'>Research</td>
              <td className='py-3'>10 young adults with ADHD were interviewed, and a medical professional was consulted
                to ensure that the product being developed would be beneficial.
              </td>
            </tr>

            <tr>
              <td className='font-bold text-sm align-top pr-4 py-3'>Solution</td>
              <td className='py-3'>A plug-and-play item tracking solution utilising ultra-high frequency RFID and ESP-NOW.
                We chose Google Nest as the company due to company values and aesthetics.
              </td>
            </tr>
          </tbody>
        </table>
        </div>

          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Nest Assured is an innovative solution that combines UI/UX design principles with physical computing 
            to create a user-friendly experience. This project demonstrates the intersection of digital design 
            and tangible technology.
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Intuitive user interface design</li>
            <li>Physical computing integration</li>
            <li>Responsive design principles</li>
            <li>User-centered approach</li>
          </ul>
        
      </div>
      <Footer />
    </div>
  )
}
