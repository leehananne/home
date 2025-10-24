import React from 'react'
import MobileNav from "../../components/MobileNav"
import { Footer } from "../../components/Footer"
import Heading from "../../components/Headings/Heading";
import Subheading from "../../components/Headings/Subheading";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import fs from 'fs';
import path from 'path';

// Read the markdown content at build time
const markdownContent = fs.readFileSync(
  path.join(process.cwd(), 'app/projects/nest_assured/content.md'),
  'utf8'
);

export default function NestAssured() {

  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <Heading label='Nest Assured'/>

        <img className="block" src="/home/assets/projects/nest_assured/hero_wide.png" alt="nest-assured-hero" />
        <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/iS23X2kF1yc?si=IvX_ml7KBl9l7E3e" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        {/* Render markdown content */}
        <MarkdownRenderer content={markdownContent} />
        
      </div>
      <Footer />
    </div>
  )
}
