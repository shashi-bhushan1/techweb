export type Course = {
  id: string;
  title: string;
  category: string;
  tag?: string;
  image?: string;
};

export const categories = [
  "Computer Science / Information Technology",
  "Electronics & Communication / Electronics & Electrical",
  "Mechanical & Automobiles",
  "Civil & Architecture",
  "Commerce & Management",
  "Personality Development",
  "Placement Preparation",
  "Medical",
] as const;

export const courseTags = ["Published Courses", "Upcoming Courses"] as const;

export const courses: Course[] = [
  // Computer Science / Information Technology
  { id: "course-1", title: "Java Programming", category: "Computer Science / Information Technology", image: "/java programming.jpeg" },
  { id: "course-2", title: "Full Stack Web Development", category: "Computer Science / Information Technology", image: "/full stack web development.jpg" },
  { id: "course-3", title: "Backend Web Development", category: "Computer Science / Information Technology", image: "/backend web development.jpg" },
  { id: "course-4", title: "Frontend Web Development", category: "Computer Science / Information Technology", image: "/frontend web development.jpg" },
  { id: "course-5", title: "Artificial Intelligence", category: "Computer Science / Information Technology", image: "/artificial intelligence.jpg" },
  { id: "course-6", title: "Data Science", category: "Computer Science / Information Technology", image: "/data science.jpg" },
  { id: "course-7", title: "Machine Learning", category: "Computer Science / Information Technology", image: "/machine learning.jpg" },
  { id: "course-8", title: "UI/UX Design Fundamentals", category: "Computer Science / Information Technology", image: "/ui-ux.jpg" },
  { id: "course-9", title: "Cyber Security", category: "Computer Science / Information Technology", image: "/cyber security.jpg" },
  { id: "course-10", title: "Azure Cloud Computing", category: "Computer Science / Information Technology", image: "/azure cloud computing.jpg" },
  { id: "course-11", title: "Python Programming Essentials", category: "Computer Science / Information Technology", image: "/python programming essentials.jpg" },

  // Electronics & Communication / Electronics & Electrical
  { id: "course-12", title: "Internet Of Things", category: "Electronics & Communication / Electronics & Electrical", image: "/internet of things.jpg" },
  { id: "course-13", title: "Embedded Systems", category: "Electronics & Communication / Electronics & Electrical", image: "/embedded system.jpg" },
  { id: "course-14", title: "VLSI Design Fundamentals", category: "Electronics & Communication / Electronics & Electrical", image: "/vlsi design fundamentals.jpg" },
  { id: "course-15", title: "Hybrid and Electric Vehicles", category: "Electronics & Communication / Electronics & Electrical", image: "/hybrid and electric vehicles.jpg" },

  // Mechanical & Automobiles
  { id: "course-16", title: "AutoCAD Anas", category: "Mechanical & Automobiles", image: "/AutoCAD Anas.jpg" },
  { id: "course-17", title: "Mastering AutoCAD", category: "Mechanical & Automobiles", image: "/Mastering AutoCAD.jpg" },

  // Civil & Architecture
  { id: "course-18", title: "Building Information Modeling (BIM)", category: "Civil & Architecture", image: "/building information modeling.jpg" },

  // Commerce & Management
  { id: "course-19", title: "Strategic Human Resource Management", category: "Commerce & Management", image: "/strategic human resource management.jpg" },
  { id: "course-20", title: "Effective Human Resource Management", category: "Commerce & Management", image: "/effective human resource management.jpg" },
  { id: "course-21", title: "Financial Analytics Mastery", category: "Commerce & Management", image: "/financial analytics mastery.jpg" },
  { id: "course-22", title: "Investing Fundamentals: Stock Market Made Simple", category: "Commerce & Management", image: "/investing fundamentals- stock market made simple.jpg" },
  { id: "course-23", title: "Digital Marketing", category: "Commerce & Management", image: "/digital marketing.jpg" },
  { id: "course-24", title: "Launch Your Dream: The Entrepreneurship Guide", category: "Commerce & Management", image: "/entrepreneurship.jpg" },

  // Personality Development
  { id: "course-25", title: "Psychology: Understanding Human Behavior", category: "Personality Development", image: "/psychology.jpg" },

  // Placement Preparation
  { id: "course-26", title: "Placement Preparation Essentials", category: "Placement Preparation", image: "/placement preparation essentials.jpg" },

  // Medical
  { id: "course-27", title: "Nanoscience and Nanotechnology", category: "Medical", image: "/nanoscience and nanotechnology.jpg" },
];


