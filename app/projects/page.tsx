import Heading from "../components/Headings/Heading"
import ProjectList from "../components/Projects/ProjectList"
import Filters from "../users/Filter"

export default function Projects() {
  return (
    <div>
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-2/3 mx-auto">
        <Heading label="Work" />
        <Filters allTags={['UI/UX', 'Web Dev', 'Data & AI']} />
        <ProjectList />
      </div>
    </div>
  )
}