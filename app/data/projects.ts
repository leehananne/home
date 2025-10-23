import { images } from '../assets/images';
import { StaticImageData } from 'next/image';

export interface ProjectType {
    id: string;
    slug: string;
    title: string;
    associated: string;
    date: string;
    sortDate: Date; 
    imageUrl: string | StaticImageData;
    tags: string[];
    pageAddress: string;
}

export const DataProjects: ProjectType[] = [
  { id: "1", slug: "nest-assured", title: "Nest Assured", associated: "Imperial College London", date: "Oct 23 - June 2024", sortDate: new Date(2024, 6), imageUrl: images.projects.nestAssured, tags: ["UI/UX" , "Physical Computing"], pageAddress: "/projects/nest_assured" },
  { id: "2", slug: "helix", title: "Helix", associated: "Imperial College London", date: "June 2024", sortDate: new Date(2024, 6), imageUrl: images.projects.helix, tags: ["UI/UX"], pageAddress: "/projects/helix" },
  { id: "3", slug: "lyc-digitalised", title: "LYC Digitalised", associated: "Ngee Ann Polytechnic", date: "Oct - Dec 2019", sortDate: new Date(2019, 12), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX"], pageAddress: "/projects/lyc" },
  { id: "4", slug: "go-touch-grass", title: "Go Touch Grass", associated: "Imperial College London", date: "Oct - Dec 2023", sortDate: new Date(2023, 12), imageUrl: images.projects.goTouchGrass, tags: ["UI/UX", "Physical Computing"], pageAddress: "/projects/go_touch_grass" },
];

// utility function to extract all unique tags from projects
export const getAllTags = (): string[] => {
  const allTags = DataProjects.flatMap(project => project.tags);
  return [...new Set(allTags)].sort();
};