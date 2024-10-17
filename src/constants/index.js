import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  cc,
  contact,
  css,
  estate,
  evrbit,
  express,
  figma,
  git,
  github,
  html,
  javascript,
  jira,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  vue,
  xd,
  logo,
  wild,
  camera,
  navana,
  bookLook,
  education,
  wbs,
  pokeball,
  apple,
  gsap,
  three,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React js",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue js",
    type: "Frontend",
  },
  {
    imageUrl: three,
    name: "Three js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  {
    imageUrl: xd,
    name: "xd",
    type: "Frontend",
  },
  {
    imageUrl: cc,
    name: "Adobe cc",
    type: "Frontend",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Project Management",
  },
];

export const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company_name: "Cologne, Germany",
    icon: logo,
    iconBg: "#fcdc9f",
    date: "March 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "Evrbit GmbH, Cologne",
    icon: evrbit,
    iconBg: "#accbe1",
    date: "January 2022 - February 2024",
    points: [
      "Collaborated with stakeholders, 8 frontend developer from iOS, Android and Web team, 6 backend developer and marketing team to develop Walby App.",
      "Designed and delivered wireframes & user click-flow for better user experience.",
      "Created and maintained 2 fluid Design System by using Figma and XD which was scalable and easy to use for developers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UX/UI Designer",
    company_name: "WildDesign GmbH, Gelsenkirchen",
    icon: wild,
    iconBg: "#30a648",
    date: "May 2021 - December 2021",
    points: [
      "Maintained and improved the design of the company's website and web applications.",
      "Designed and delivered wireframes & user click-flow for better user experience.",
      "Tailored user experience to meet the needs of the target audience.",
      "Trained and mentored two intern to improve their skills.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Photographer",
    company_name: "Packshot Company, Düsseldorf",
    icon: camera,
    iconBg: "#f084e1",
    date: "November 2019 - April 2021",
    points: [
      "Produced best quality photos which were better fit for e-commerce industry and social media.",
      "Collaborating with cross-functional teams including QA, studio managers, and other photographer to produce high-quality products.",
      "Maintained studio equipment and kept them in good condition.",
      "Used Adobe Lightroom and Photoshop to edit photos.",
    ],
  },
  {
    title: "3D Artist",
    company_name: "Align Technology, Cologne",
    icon: threads,
    iconBg: "#57c4e6",
    date: "March 2018 - December 2018",
    points: [
      "Produced best quality 3D Product which were better fit for industry and Business.",
      "Collaborating with cross-functional teams including Doctors, managers, and other 3D Designers to produce high-quality products.",
      "Used 3D Mouse and customised 3D software called Treat.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Navana Group, Dhaka",
    icon: navana,
    iconBg: "#b1d1b0",
    date: "September 2012 - April 2016",
    points: [
      "Illustrated concept, draw basic layout and discussed with stakeholders to improved the concept.",
      "Designed marketing materials, such as brochures, posters, and banners for country wide campaign.",
      "Collaborating with cross-functional teams including vendor, 28 showroom-personals, product managers, and responsible persons to create high-quality design.",
      "Used Adobe Illustrator, Photoshop and InDesign to create design.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mdMehediBillah",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mehedibillah/",
  },
];

export const projects = [
  {
    id: "booklook",
    iconUrl: bookLook,
    theme: "btn-back-yellow",
    name: "BookLook24",
    description:
      "BookLook24 is a full-stack web application that allows users to search for books, view book details, and save books to their reading list. The project has a clean and user-friendly interface, making it easy for users to navigate and find the books they are looking for.",

    more: "MERN stack was used to build the project, with data fetched from the OpenLibrary API.",
    projectLink: "",
    link: "https://github.com/mdMehediBillah/BookLook24",
  },

  {
    id: "pokeFight",
    iconUrl: pokeball,
    theme: "btn-back-orange",
    name: "PokeFight",
    description:
      "Developed a full-stack online PokeFight game where users can battle against the computer. This demo project was created to showcase my skills for my portfolio, with all data fetched from the PokeAPI.",
    more: "Built using React.js, Node.js, Express, and MongoDB, the game also features a statistics panel where users can view their game history",
    projectLink: "",
    link: "https://github.com/mdMehediBillah/PokeFight-Gr2",
  },
  {
    id: "cloneIphone15",
    iconUrl: apple,
    theme: "btn-back-blue",
    name: "Landing page iPhone 15 pro",
    description:
      "The project is a clone of the iPhone 15 Pro landing page, showcasing the latest features of the phone. The project was built to showcase my skills for my portfolio.3D iPhone model was rendered using Three.js, and animations were implemented using GSAP.",

    more: "The project was built using React.js, Three. js, GSAP and Tailwind CSS, and deployed on Vercel.",
    projectLink: "",
    link: "https://github.com/mdMehediBillah/iPhone15",
  },
  // {
  //   id: "meghna-store",
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Meghna Store",
  //   description:
  //     "Developed a full-stack online store tailored for South-Asian people seeking different food options than those typically available in Europe. This demo project was built to showcase my skills for my portfolio. ",
  //   more: "It was developed using Vue.js, Node.js, Express, and MongoDB, and includes a shopping cart feature that displays free shipping availability.",
  //   projectLink: "",
  //   link: "https://github.com/mdMehediBillah/Meghna-webStore",
  // },

  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Doctor's Appointment App",
  //   description:
  //     "Ongoing project where user will see avability of Doctors appointment and they can book the appointment through the app. The app will send notification to the user and doctor. The app will also show the history of the appointment.",
  //   more: "Using React.js, Node.js, Express, and MongoDB",
  //   projectLink: "",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  //   {
  //     iconUrl: estate,
  //     theme: "btn-back-black",
  //     name: "Real-Estate Application",
  //     description:
  //       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //     projectLink: "",
  //     link: "https://github.com/adrianhajdin/projects_realestate",
  //   },
];

export const educations = [
  {
    iconUrl: wbs,
    theme: "btn-back-yellow",
    degree: "Bootcamp in Full Stack Web Development",
    uni: "WBS Coding School, Berlin, Germany",
    date: "April 2024 - September 2024",
    points: [
      "Studied Full Stack Web Development with React, Node.js, Express, and MongoDB.",
      "Participated in code reviews and collaborated with other developers to improve code quality.",
      "Completed a final project that involved designing and building a full-stack web application from scratch.",
      "Used Git and GitHub to manage code version control.",
      "Used 3-tier architecture to build scalable applications and deployed those applications.",
    ],
    link: "https://www.wbscodingschool.com/?_gl=1*1swudlz*_up*MQ..&gclid=CjwKCAjwx4O4BhAnEiwA42SbVA9CTMu35kZqwXFX9YFOg2jin_DPB8zqbWbs2ScNwMAkrM6wyg_G2RoC0rYQAvD_BwE",
  },
  {
    iconUrl: education,
    theme: "btn-back-blue",
    degree: "Master in Digital Media",
    uni: "Hochschule Rhein-Waal, Kamp-Lintfort, Germany",
    date: "April 2016 - November 2019",
    points: [
      "Studied in Cross-media-platform where student came from varies disciple as Computer Science, Product Design, Graphic Design and more.",
      "Human Oriented Design, Design thinking Process and UX/UI-Frameworks, Design System were strong points for the Degree",
      "Completed main project by UX research, Personas, user-flow, designed scalable design system, Low & Hi-Fi Wireframes and clickable Prototype",

      "Thesis: 'AI-Driven Chair Design: A Case Study on the Impact of Product Design on User Experience'",
    ],
    link: "https://www.hochschule-rhein-waal.de/de",
  },
  {
    iconUrl: education,
    theme: "btn-back-green",
    degree: "Bachelor in Graphic Design & Multimedia",
    uni: "Shanto-Mariam University of Creative Technology, Dhaka, Bangladesh",
    date: "July 2007 - September 2011",
    points: [
      "Graphic Design, Typography, Illustration, Photography, Animation, 3D Modeling, Video Editing, Web Design, and Multimedia were the main subjects.",
      "Scholarship for the best student in the department for 4 years.",
      "Thesis: 'The Impact of Graphic Design on Social Media Marketing'",
    ],
    link: "https://smuct.ac.bd/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-red",
    degree: "Online Training for Fullstack Development",
    uni: "Codecademy, Udemi, Interaction Design Foundation",
    date: "July 2023 - September 2024",
    points: [
      "Accessibility: How to Design for All",
      "Building Interactive JavaScrip Responsive Websites",
      "Build Web Application with Vue.js",
      "Agile Methods for UX Design",
      "Conducting Usability Testing",
      "Scrum in software development",
    ],
    link: "",
  },
];
