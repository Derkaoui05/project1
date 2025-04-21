import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import syndic from "../assets/projects/syndic.webp";

import {
    FaDiagramProject,
    FaEnvelope,
    FaHouse,
    FaRenren,
    FaUser,
} from "react-icons/fa6";

export const HERO_CONTENT = `Fueled by passion and determination, Yassir has grown into a skilled full-stack developer, mastering modern technologies in both web and software development. With a solid foundation in front-end frameworks like React and Next.js, and back-end expertise in Laravel and Jakarta EE, he builds efficient, scalable, and high-performing applications. His curiosity drives him to explore new tools, enhance his problem-solving skills, and push the limits of innovation. From developing dynamic platforms to optimizing databases and designing robust systems, Yassir's dedication to continuous learning and excellence shapes a promising path in today's fast-paced tech world.`;

export const ABOUT_TEXT = `I'm Yassir, a full-stack developer who finds joy in turning ideas into clean, functional code. What started with simple lines of HTML and CSS quickly grew into a real passion for building web applications using technologies like React, Next.js, Laravel, and Jakarta EE. I thrive in the flow of coding—solving problems, architecting systems, and creating seamless user experiences. Whether it's front-end polish or back-end logic, I love every step of the process. I'm always exploring new tools, leveling up my skills, and staying curious. For me, coding isn't just a job—it's a vibe, and I'm here to build, learn, and grow with every line.`;

export const EXPERIENCES = [
    {
        year:"February - April 2025",
        role:".NET Developer",
        company:"Electrical Components International",
        description:"Develop and maintain a platform of Employees request management with an intuitive dashboard for each employees and depends of roles",
        technologies:["ASP.NET Core", "React.js","TailwindCSS","Sql Server"]
    },
    {
        year: "August - October 2024",
        role:"Web Developer",
        company: "Maya Digital",
        description: "Develop and maintain a responsive sections of shelter project.",
        technologies: ["React","TailwindCSS","React-table","axios"]
    },
    {
        year: "MAY 2024 ",
        role: "Web Developer",
        company: "2MAG Agency",
        description: `Develop and maintain responsive e-commerce website using WorPress, HTML, CSS, JavaScript, and PHP.`,
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    },
    {
        year: "2022 - 2023",
        role: "Artificial Intelligence",
        company: "Ifiag And M-bway",
        description: `Cerificate of appreciation proudly presented to me for successful completion of the Masterclass on Artificial Intelligence`,
    },

];

export const PROJECTS = [
    {
        title: "Portfolio Website",
        image: project1,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: [ "React", "TailwindCSS", "Framer-motion"],
        status: "complete"
    },
    {
        title:"Digital Martketing Agency - Spark Studio",
        image: project1,
        description:"Spark Studio is an innovative digital agency specializing in the creation of high-performance and visually appealing websites. Our goal is to support businesses by providing optimized digital solutions to maximize their online impact.",
        technologies: ["Next.js","TailwindCSS","Typescript","ShadCN","Framer-motion","Gsap"],
        status:"complete"

    },
    {
        title: "Syndic platform (soon)",
        image: syndic,
        description:
            "A syndic platform is a digital tool that streamlines property management by enhancing communication, " +
            "financial tracking, issue reporting, and decision-making for managers and residents.",
        technologies: ["Next.js", "Tailwindcss", "Framer-motion", "Shadcn", "Laravel", "MySql"],
        status: "progress"
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

export const EDUCATION = [
    {
        year:'2024-2025',
        speciality:'Computer engineering',
        diploma:'Professional License',
        school:'ENSA Tangier',
    },
    {
        year:'2022-2024',
        speciality:'Information Technologie',
        diploma:'Diploma of specialize technician',
        school:'IFIAG Casablanca',
    },
    {
        year:'2021-2022',
        speciality:'Physics Science',
        diploma:'Baccaleaureat',
        school:'Ocean Atlantic',
    }
]