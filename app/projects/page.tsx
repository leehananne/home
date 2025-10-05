'use client'
import { useState } from 'react'
import Heading from "../components/Headings/Heading"
import ProjectList from "../components/Projects/ProjectList"
import Filters from "../users/Filter"
import MobileNav from "../components/MobileNav"
import { Footer } from "../components/Footer"
import { getAllTags } from "../data/projects"

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagsChange = (tags: string[]) => {
    setSelectedTags(tags)
  }

  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <Heading label="Work" />
        <Filters 
          allTags={getAllTags()} 
          onTagsChange={handleTagsChange}
        />
        <ProjectList selectedTags={selectedTags} />
      </div>
      <Footer />
    </div>
  )
}