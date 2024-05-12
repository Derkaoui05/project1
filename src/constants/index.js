import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


import {
  FaDiagramProject,
  FaEnvelope,
  FaHouse,
  FaRenren,
  FaUser,
} from "react-icons/fa6";

export const HERO_CONTENT = `In a remarkable journey spanning just one year, Yassir has evolved from a coding novice to a passionate junior developer deeply immersed in the intricate world of full-stack development. With an insatiable curiosity and relentless drive, he has embraced every challenge, mastering both front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Laravel and MongoDB. Yassir's enthusiasm for exploring the latest frameworks like React and NextJS, and languages like Python, shines through in the innovative solutions he crafts for complex problems. His commitment to continuous learning and unwavering dedication make him a rising star in the vibrant realm of software development.`;

export const ABOUT_TEXT = `In the span of just one year, Yassir has undergone a remarkable transformation from a fledgling coder to a passionate junior developer deeply immersed in the world of full-stack development. His journey commenced with the basics of programming, gradually evolving into a profound understanding of both front-end and back-end technologies. Fuelled by an insatiable curiosity and a relentless drive to excel, Yassir tackles each project with fervor, eagerly absorbing new concepts and techniques along the way. His enthusiasm for exploring the latest frameworks and languages is palpable, evident in the innovative solutions he crafts for every challenge he encounters. With a yearning to learn and a commitment to pushing boundaries, Yassir stands as a promising talent in the ever-evolving landscape of software development.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "2MAG Agency",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Google Inc",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Vercel",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "MongoDb"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Ibm",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["NextJS", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "WordPress", "PHP"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCss","Framer-Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "mySQL"],
  },
];

export const CONTACT = {
  address: "EL Qods, EL Bernoussi, Casablanca ",
  phoneNo: "+212 674494786 ",
  email: "derkaouidev@gmail.com",
};  

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];