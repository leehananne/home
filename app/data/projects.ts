export interface ProjectType {
    id: string;
    slug: string;
    title: string;
    associated: string;
    date: string;
    sortDate: Date; 
    imageUrl: string;
    tags: string[];
    pageAddress: string;
}

export const DataProjects: ProjectType[] = [
  { id: "1", slug: "nest-assured", title: "Nest Assured", associated: "Imperial College London", date: "June - Sep 2024", sortDate: new Date(2024, 8), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX" , "Physical Computing"], pageAddress: "/projects/nest_assured" },
  { id: "2", slug: "project-2", title: "Project 2", associated: "Imperial College London", date: "Aug 2024", sortDate: new Date(2024, 7), imageUrl: "https://placehold.co/200x200", tags: ["Data & AI"], pageAddress: "/projects/project_2" },
  { id: "3", slug: "project-3", title: "Project 3", associated: "Imperial College London", date: "Mar - May 2024", sortDate: new Date(2024, 4), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX"], pageAddress: "/projects/project_3" },
  { id: "4", slug: "project-4", title: "Project 4", associated: "Imperial College London", date: "Dec 2023", sortDate: new Date(2023, 11), imageUrl: "https://placehold.co/200x200", tags: ["Web Dev", "Data & AI"], pageAddress: "/projects/project_4" },
  { id: "5", slug: "project-5", title: "Project 5", associated: "Imperial College London", date: "Oct 2024", sortDate: new Date(2024, 9), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX", "Data & AI"], pageAddress: "/projects/project_5" },
  { id: "6", slug: "project-6", title: "Project 6", associated: "Imperial College London", date: "Jan 2024", sortDate: new Date(2024, 0), imageUrl: "https://placehold.co/200x200", tags: ["Web Dev"], pageAddress: "/projects/project_6" },
  { id: "7", slug: "project-7", title: "Project 7", associated: "Imperial College London", date: "July 2024", sortDate: new Date(2024, 6), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX", "Web Dev"], pageAddress: "/projects/project_7" },
  { id: "8", slug: "project-8", title: "Project 8", associated: "Imperial College London", date: "Nov 2023", sortDate: new Date(2023, 10), imageUrl: "https://placehold.co/200x200", tags: ["Data & AI"], pageAddress: "/projects/project_8" },
  { id: "9", slug: "project-9", title: "Project 9", associated: "Imperial College London", date: "Feb 2024", sortDate: new Date(2024, 1), imageUrl: "https://placehold.co/200x200", tags: ["Web Dev"], pageAddress: "/projects/project_9" },
  { id: "10", slug: "project-10", title: "Project 10", associated: "Imperial College London", date: "Apr 2024", sortDate: new Date(2024, 3), imageUrl: "https://placehold.co/200x200", tags: ["UI/UX", "Data & AI"], pageAddress: "/projects/project_10" },
];

// utility function to extract all unique tags from projects
export const getAllTags = (): string[] => {
  const allTags = DataProjects.flatMap(project => project.tags);
  return [...new Set(allTags)].sort();
};