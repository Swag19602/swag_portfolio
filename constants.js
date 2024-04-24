export const METADATA = {
  author: "Swagatam Bhattacharjee",
  title: "Portfolio | Swag",
  description:
    "Swagatam Bhattacharjee is a Full Stack Developer from India, interested in crafting beautiful and functional applications.",
  siteUrl: "https://swag-portfolio.vercel.app/",
  twitterHandle: "@allaboutSWAG6",
  keywords: [
    "Swagatam Bhattacharjee",
    "Full Stack Developer",
    "Backend Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image: "/projects/description.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic FullStack Developer",
  "I build things for the web",
  "I create aesthetic and modern web apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: swagatambhattacharjee02@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/swagatam-bhattacharjee-5aa00a1b2/",
  },
  {
    name: "github",
    url: "https://github.com/Swag19602",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/itz_meswag/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/allaboutSWAG6",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "python",
    "nodejs",
    "firebase",
    "react",
    "vite",
    "figma",
  ],
  librariesAndFrameworks: [
    "aws",
    "docker",
    "nextjs",
    "tailwindcss",
    "materialui",
    "flask",
    "jest",
  ],
  databases: ["mysql", "mongodb", "postgresql", "prisma"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Google",
    image: "/projects/google-search-ads.jpg",
    blurImage: "/projects/google-search-ads.jpg",
    description: "Google clone using ReactJS + Material UI 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://master.d2ek86mdh3l2oh.amplifyapp.com/",
    tech: ["react","materialui","nextjs"],
  },
  {
    name: "AI Chatbot",
    image: "/projects/chatgpt.jpeg",
    blurImage: "/projects/chatgpt.jpeg",
    description: "AI chatbot using chatgpt API ✍🏻",
    gradient: ["#0072C6", "#FFFFFF"],
    url: "https://github.com/Swag19602/ai-text-completion",
    tech: ["flask", "aws","materialui"],
  },
  {
    name: "Insta Reel",
    image: "/projects/instaReel.webp",
    blurImage: "/projects/instaReel.webp",
    description:
      "Insta Reel app where you can watch all your short form videos 🎙",
    gradient: ["#F58529", "#DD2A7B", "#8134AF", "#515BD4"],
    url: "https://github.com/Swag19602/Insta-Reel",
    tech: ["react", "materialui","nextjs"],
  },
  {
    name: "CryptoWorld",
    image: "/projects/crypto.jpeg",
    blurImage: "/projects/crypto.jpeg",
    description: "A crypto trading app using React Js🏎️",
    gradient: ["#000066", "#6699FF"],
    url: "https://main.d3fi6vd34hp9j6.amplifyapp.com/news",
    tech: ["react","materialui","nextjs"],
  },
  {
    name: "Spotify",
    image: "/projects/spotify.webp",
    blurImage: "/projects/spotify.webp",
    description: "Spotify using React JS + Material UI 🏎️",
    gradient: ["#1DB954", "#191414"],
    url: "https://github.com/Swag19602/spotify_clone",
    tech: ["react","materialui"],
  },
];

export const WORK = [
  {
    id: 0,
    company: "ChatDaddy",
    title: "Full Stack Developerr",
    location: "China",
    range: "June 2023 - Current",
    responsibilities: [
      "worked as a lead in AI team, created AI chat assistant and solved complex problems working in Tech-Support team",
      "worked on TYPESCRIPT, PGSQL, MongoDB, TypeORM, Jest, Pino, OPENAPI-Typescript",
      "Serverless, Github Actions, Docker, AWS Lambda, AWS Gateway, AWS Amplify Worked on Microservice Event Driven Architecture"
    ],
    url: "https://www.chatdaddy.tech/",
    video: "/work/chatdaddy.mp4",
  },
  {
    id: 1,
    company: "Altor",
    title: "Backend Developer & DevOps Engineer",
    location: "Bangalore",
    range: "Aug - May 2023",
    responsibilities: [
      "recreated the whole backend with new features",
      "created ANTI-THEFT detection system for car and bike sentinel devices,",
      "worked with DOCKER, AWS (ECS, EC2 Instances, S3, Sagemaker, DynamoDb), SwaggerDocs, Atlassian, Jira Software", 
      "price controlling using finout, used datastudio for fleet report analysis Microservice Architecture",
      "using Terraform to automate the cloud infrastructure"
    ],
    url: "https://business.altor.tech/",
    video: "/work/altor.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
