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

export const HERO_CONTENT = `In an inspiring journey fueled by passion and determination, Yassir has evolved into a skilled full-stack developer, mastering modern technologies across web and software development. With a strong foundation in front-end frameworks like React and Next.js, coupled with expertise in back-end solutions using Laravel and ASP.NET, he crafts efficient and scalable applications. His insatiable curiosity drives him to explore emerging tools, refine his problem-solving skills, and push the boundaries of innovation. Whether building dynamic platforms, optimizing databases, or architecting robust systems, Yassir's commitment to continuous growth and excellence paves the way for a promising career in the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `Over the course of my journey, I have evolved into a passionate full-stack developer, constantly expanding my knowledge and skills in both front-end and back-end technologies. From mastering foundational tools like HTML, CSS, and JavaScript to exploring powerful frameworks such as React, Next.js, Laravel, and ASP.NET, I've embraced every challenge with enthusiasm. My drive to innovate and solve complex problems fuels my ongoing growth, and I'm always eager to dive into new technologies and refine my craft. Committed to continuous learning, I am excited to make my mark in the dynamic world of software development.`;

export const EXPERIENCES = [
    {
        year:"February 2025 - April",
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