import MobileNav from "./components/MobileNav";
import Profile from "./components/Profile";
import Heading from "./components/Headings/Heading";
import Subheading from "./components/Headings/Subheading";
import EducationItem from "./components/EducationItem";
import ExperienceItem from "./components/ExperienceItem";
import SkillList from "./components/Tiles/SkillList";
import LearningList from "./components/LearningLog/LearningList";
import { Footer } from "./components/Footer";
import { ProjectCarousel } from "./components/Projects/ProjectCarousel";
import CtaLink from "./users/CtaLink";

export default function Home() {
  return (
    <div>
      <MobileNav />
      <div className="px-10 py-7 flex flex-col justify-center items-center gap-7 w-full md:w-1/2 mx-auto">
        
        <Profile />
        
        <Heading label="Work"/>
        <ProjectCarousel />
        <CtaLink link="projects/" text="View All Projects" />
        
        <Heading label="Education"/>
        <EducationItem organisation="Imperial College London" qualification="Master of Engineering (MEng)" course="Design Engineering" year="2022-2026" imageUrl="/assets/logos-organisations/imperial.jpg"/>
        
        <Heading label="Experience" />
        <ExperienceItem role="UI/UX Engineer" type='Internship' company="Schroders Personal Wealth" dates="March - September 2025" imageUrl="/assets/logos-organisations/schroders.svg"/>

        <Heading label="Skills" />
        <SkillList />

        <Heading label="Learning Logs" />
        <LearningList />
        <CtaLink link="https://www.google.com" text="View All Logs" />
      </div>
      <Footer />
    </div>
  );
}
