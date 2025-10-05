import Heading from "../components/Headings/Heading"
import ProjectList from "../components/Projects/ProjectList"
import Filters from "../users/Filter"
import MobileNav from "../components/MobileNav"
import { Footer } from "../components/Footer"

export default function Projects() {
  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <Heading label="Work" />
        <Filters allTags={['UI/UX', 'Web Dev', 'Data & AI']} />
        <ProjectList />
      </div>
      <Footer />
    </div>
  )
}