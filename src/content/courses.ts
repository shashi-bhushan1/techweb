export type Course = {
  id: string;
  title: string;
  tag?: string;
};

export const categories = [
  "Computer Science",
  "Electronics & Communication",
  "Mechanical/Automobile",
  "Civil/Architecture",
  "Marketing & Management",
  "Personality Development",
] as const;

export const courseTags = ["Published Courses", "Upcoming Courses"] as const;

export const courses: Course[] = [
  { id: "course-1", title: "Placement Preparation Essentials" },
  { id: "course-2", title: "Launch Your Dream: The Entrepreneurship Guide" },
  { id: "course-3", title: "Building Information Modeling (BIM)" },
  { id: "course-4", title: "Investing Fundamentals: Stock Market Made Simple" },
  { id: "course-5", title: "AutoCAD Anas" },
  { id: "course-6", title: "Psychology: Understanding Human Behavior" },
  { id: "course-7", title: "Nanoscience and Nanotechnology" },
  { id: "course-8", title: "VLSI Design Fundamentals" },
  { id: "course-9", title: "Java Programming" },
  { id: "course-10", title: "Full Stack Web Development" },
  { id: "course-11", title: "Backend Web Development" },
  { id: "course-12", title: "Hybrid and Electric Vehicles" },
  { id: "course-13", title: "Artificial Intelligence" },
  { id: "course-14", title: "Strategic Human Resource Management" },
  { id: "course-15", title: "Frontend Web Development" },
  { id: "course-16", title: "Effective Human Resource Management" },
  { id: "course-17", title: "Internet Of Things" },
  { id: "course-18", title: "Data Science" },
  { id: "course-19", title: "Machine Learning" },
  { id: "course-20", title: "UI/UX Design Fundamentals" },
  { id: "course-21", title: "Digital Marketing" },
  { id: "course-22", title: "Embedded Systems" },
  { id: "course-23", title: "Financial Analytics Mastery" },
  { id: "course-24", title: "Mastering AutoCAD" },
  { id: "course-25", title: "Cyber Security" },
  { id: "course-26", title: "Azure Cloud Computing" },
  { id: "course-27", title: "Python Programming Essentials" },
];


