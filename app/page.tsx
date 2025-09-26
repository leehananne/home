import ProjectList from "./components/Projects/ProjectList";
import MobileNav from "./components/MobileNav";
import Profile from "./components/Profile";
import Heading from "./components/Headings/Heading";
import Subheading from "./components/Headings/Subheading";
import EducationItem from "./components/EducationItem";
import ExperienceItem from "./components/ExperienceItem";
import SkillTile from "./components/Tiles/SkillTile";

export default function Home() {
  return (
    <div>
      <MobileNav />
      <div className="self-stretch px-10 py-7 inline-flex flex-col justify-start items-start gap-7">
        <Profile />
        
        <Heading label="Work"/>
        <ProjectList />
        
        <Heading label="Education"/>
        <EducationItem organisation="Imperial College London" qualification="Master of Engineering (MEng)" course="Design Engineering" year="2022-2026" imageUrl="https://placehold.co/14x33"/>
        
        <Heading label="Experience" />
        <ExperienceItem role="UI/UX Engineer" type='Internship' company="Schroders Personal Wealth" dates="March - September 2025" imageUrl="/schroders.svg"/>

        <Heading label="Skills" />
        <Subheading label="Design & Front-End" />
        <SkillTile imageUrl="/figma.svg"/>
        <Subheading label="Programming & Hardware" />
      </div>
      
    </div>
  );
}
