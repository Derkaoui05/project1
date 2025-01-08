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

export const HERO_CONTENT = `In an impressive journey spanning just one month, Yassir has transformed from a coding novice to a passionate aspiring developer, eagerly diving into the fascinating world of full-stack development. With an insatiable curiosity and relentless drive, he has tackled each challenge head-on, gaining foundational skills in front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies such as Laravel. Yassir's enthusiasm for exploring emerging library like React and framework like Next.js is evident in the innovative solutions he begins to craft for various problems. His commitment to continuous learning and unwavering dedication mark the early signs of a promising career in the vibrant realm of software development.`;

export const ABOUT_TEXT = `In the span of just one month, Yassir has undergone a remarkable transformation from a fledgling coder to an enthusiastic aspiring developer, deeply immersed in the world of full-stack development. His journey commenced with the basics of programming, quickly evolving into a growing understanding of both front-end and back-end technologies. Fueled by an insatiable curiosity and a relentless drive to excel, Yassir tackles each project with fervor, eagerly absorbing new concepts and techniques along the way. His enthusiasm for exploring the latest frameworks and languages is palpable, evident in the innovative solutions he begins to craft for every challenge he encounters. With a yearning to learn and a commitment to pushing boundaries, Yassir stands as a promising talent in the ever-evolving landscape of software development.`;

export const EXPERIENCES = [
    {
        year: "Aout 2024 - Octobre 2024",
        role:"Web Developer",
        company: "Maya Digital",
        description: "Developer and maintain a responsive sections of shelter project.",
        technologies: ["React","Tailwindcss","React-table","axios"]
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
        technologies: ["HTML", "CSS", "React", "TailwindCss", "Framer-motion"],
        status: "complete"
    },
    {
        title: "Syndic platform (in progress)",
        image: syndic,
        description:
            "A syndic platform is a digital tool that streamlines property management by enhancing communication, " +
            "financial tracking, issue reporting, and decision-making for managers and residents.",
        technologies: ["React", "Next.js", "Tailwindcss", "Framer-motion", "Shadcn Ui", "Laravel", "MySql"],
        status: "progress"
    },
    // {
    //     title: "E-Commerce Website",
    //     image: project3,
    //     description:
    //         "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    //     technologies: ["HTML", "CSS", "WordPress", "PHP"],
    // },
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