export const METADATA = {
  author: "Swagatam Bhattacharjee",
  title: "Portfolio | Swag",
  description:
    "Swagatam Porwal is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@allaboutSWAG6",
  keywords: [
    "Swagatam Bhattacharjee",
    "Backend Developer",
    "Web Developer",
    "React Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
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
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#0072C6", "#FFFFFF"],
    url: "https://github.com/Swag19602/ai-text-completion",
    tech: ["flask", "aws","materialui"],
  },
  {
    name: "Insta Reel",
    image: "/projects/instaReel.webp",
    blurImage: "/projects/instaReel.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#F58529", "#DD2A7B", "#8134AF", "#515BD4"],
    url: "https://github.com/Swag19602/Insta-Reel",
    tech: ["react", "materialui","nextjs"],
  },
  {
    name: "CryptoWorld",
    image: "/projects/crypto.jpeg",
    blurImage: "/projects/crypto.jpeg",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#000066", "#6699FF"],
    url: "https://main.d3fi6vd34hp9j6.amplifyapp.com/news",
    tech: ["react","materialui","nextjs"],
  },
  {
    name: "Spotify",
    image: "/projects/spotify.webp",
    blurImage: "/projects/spotify.webp",
    description: "A Tesla React Native App 🏎️",
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
    range: "June - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
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
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://business.altor.tech/",
    video: "/work/altor.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
