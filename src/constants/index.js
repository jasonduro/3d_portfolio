import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
} from "../assets";

import AbelProfile from '../assets/Abel_profile.png';
import ValentinaCoco from '../assets/vcoco.png';
import MeetApp from '../assets/meetappss.png';
import MyFlixApp from '../assets/myFlix_angular.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Product Manager",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Design Sprint Facilitator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Associate Product Manager",
    company_name: "Avisare",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2016 - June 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Duro Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2017 - Dec 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Digital Product School",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2020 - Nov 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Emteria",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jason is a great teacher and excited about how design can enhance user experiences.",
    name: "Abel Hernandez CSPO., CSM.",
    designation: "Lead Product Manager",
    company: "Humana",
    image: AbelProfile,
  },
  {
    testimonial:
      "Jason was crucial in what we accomplished. He kept the team motivated, engaged and on-time.",
    name: "Valentina Coco",
    designation: "Senior Organizational Change Expert",
    company: "Generali",
    image: ValentinaCoco,
  },
  {
    testimonial:
      "After Jason optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Angular Movie App",
    description:
      "Built with Angular using TypeScript - a movie app that allows users to register an account and view a list of movies. Users can also view information about a movie and add or remove movies from their list of favorites. Built on top of the existing server-side code from the myFlix project.",
    tags: [
      {
        name: "angular", 
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: MyFlixApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Meet App",
    description:
      "A project that utilized Test Driven Development to create a serverless, progressive web application. This project was created to help people discover Coding Events in their city. It uses the Google Calendar API to fetch upcoming events. It also displays a chart with the number of upcoming events in each city and allows users to filter events by city.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: MeetApp,
    source_code_link: "https://jasonduro.github.io/meet/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };