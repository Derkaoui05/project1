import project3 from '../assets/projects/barber.png';
import project1 from '../assets/projects/healtcare.png';
import project2 from '../assets/projects/spark.jpeg';

export const PROJECTS = [
  {
    title: 'AI-powered meal planning - pure plate',
    image: project1,
    url: 'https://pureplate-rosy.vercel.app/',
    description:
      'Pure Plate is an AI-powered meal planning app that generates personalized weekly meal plans, recipes, and grocery lists based on dietary preferences, calorie goals, and Allergies. Users can sign in, save plans, and manage subscriptions for an optimized, healthy lifestyle.',
    technologies: [
      'Next.js',
      'TailwindCSS',
      'Typescript',
      'Shadcn UI',
      'PostgreSQL',
      'Prisma',
      'Clerk',
      'Stripe',
    ],
    status: 'complete',
  },
  {
    title: 'Digital Martketing Agency - Spark Studio',
    image: project2,
    url: 'https://sparkstudio.vercel.app',
    description:
      'Spark Studio is an innovative digital agency specializing in the creation of high-performance and visually appealing websites. Our goal is to support businesses by providing optimized digital solutions to maximize their online impact.',
    technologies: ['Next.js', 'TailwindCSS', 'Typescript', 'Shadcn UI', 'Framer-motion', 'Gsap'],
    status: 'complete',
  },
  {
    title: 'Barber SHop',
    image: project3,
    url: 'https://sharplook.vercel.app',
    description:
      'Developed a fully responsive and user-friendly website for a barber shop to showcase services, manage bookings, and build a professional online presence. Designed with a focus on performance, accessibility, and a clean user interface to ensure a smooth experience across all devices.',
    technologies: ['Next.js', 'Tailwindcss', 'Shadcn', 'Supabase', 'React Hook Form'],
    status: 'progress',
  },
];