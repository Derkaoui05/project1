import { FaDiagramProject, FaEnvelope, FaHouse, FaRenren, FaUser } from 'react-icons/fa6';

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: '#home',
    name: 'Home',
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: '#about',
    name: 'About',
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: '#skills',
    name: 'Skills',
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: '#projects',
    name: 'Projects',
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: '#contact',
    name: 'Contact',
  },
];