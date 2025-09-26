import ProjectList from "./components/ProjectList";
import MobileNav from "./components/MobileNav";
import Profile from "./components/Profile";
import SectionLabel from "./components/SectionLabel";
import EducationItem from "./components/EducationItem";

export default function Home() {
  return (
    <div>
      <MobileNav />
      <Profile />
      <SectionLabel label="Work"/>
      <ProjectList />
      <SectionLabel label="Education"/>
      <EducationItem organisation="Imperial College London" qualification="Master of Engineering (MEng)" course="Design Engineering" year="2022-2026" imageUrl="https://placehold.co/14x33"/>
    </div>
  );
}
