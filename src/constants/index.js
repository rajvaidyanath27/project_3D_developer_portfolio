import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  nextjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  chat,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  resturent,
  currency,
  ai,
  threejs,
} from "../assets";

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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DSA & Algorithms",
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
    name: "Next JS",
    icon: nextjs,
  },
   
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Senior Secondry",
    company_name: "Sunbeam School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - Feb 2023",
    points: [
      "Completed my 12th",
       "Completed coursework in Physics, Chemistry, Mathematics, and Computer Science."
    ],
  },
  {
    title: "Graduation",
    company_name: "Galgotia University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with  teams and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in Hackathons and other Technical events.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Coming soon...",
    company_name: "Intern",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
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
      "I thought it was impossible to make a website as beautiful as our product, but Raj proved me wrong.",
    name: "Risabh Chauhan",
    designation: "Student",
   
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Raj does.",
    name: "Rajveer Singh",
    designation: "Student",
    
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Raj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Priyank Sanket",
    designation: "Student",
    
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      " Allows users to have Awesome  Chat App with realtime messaging fuctionality with socket.io . We have one on one chat as well as group chatting functionality in this app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      
    ],
    image: chat,
    source_code_link: "https://github.com/rajvaidyanath27/Chat-App",
  },
  {
    name: "AI Object Detector",
    description:
      "The app uses the device camera or uploaded images to detect and label real-world objects in real-time. Styled with Tailwind CSS for a modern, responsive UI. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tenserflow",
        color: "green-text-gradient",
      },
      {
        name: "canvas",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://ai-object-detector-with-next-js-eta.vercel.app/",
  },
  {
    name: "Resturant Table Booking",
    description:
      "A comprehensive Table booking platform, Users can book tables by selecting the date, time, and number of guests. Come with your partner and enjoy ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: resturent,
    source_code_link: "https://github.com/rajvaidyanath27/Full-stack-resturant",
  },
  {
    name: "Currency Converter",
    description:
      "Convert one currency to another in real time using the latest exchange rates. This project is useful for travelers, businesses, and anyone dealing with international transactions.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "api's",
        color: "pink-text-gradient",
      },
    ],
    image: currency,
    source_code_link: "https://github.com/rajvaidyanath27/Currency-Converter",
  },
];

export { services, technologies, experiences, testimonials, projects };
