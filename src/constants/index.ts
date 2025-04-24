import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  web,
  webBakery,
  LAIDON,
  VIETJAPAN,
  N404,
} from "../assets/index";

export interface isNavLink {
  id: string | number;
  title: string;
}

export interface isService extends isNavLink {
  icon: string;
}

export interface isExperience extends isNavLink {
  companyName: string;
  iconBg: string;
  icon?: string;
  date: string;
  points: string[];
}

export interface isProTag {
  name: string;
  color: string;
}

export interface isProject {
  name: string;
  description: string;
  tags: isProTag[];
  image: string;
  source_code_link: string;
}

export const navLinks: isNavLink[] = [
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
  { id: 1, title: "Web Developer", icon: web },
  { id: 2, title: "React Developer", icon: reactjs },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences: isExperience[] = [
  {
    id: 1,
    title: "SAP Developer",
    companyName: "LAIDON Consulting VietNam",
    icon: LAIDON,
    iconBg: "#383E56",
    date: "01/2022 - 09/2022",
    points: [
      "SAP tutorial and familiarization (According to SAP UI5 and  BuildMe documentation). Migrated the front-end codebase to TypeScript, reducing the number of runtime errors by 50% and improving overall code quality and maintainability.",
      "Mar-Aug : Working in SimpleMDG product web application (SAP UI5 app, API implementation with NodeJs). I created a Project page to manage information using JavaScript. ",
      "In addition, I also updated, maintained and fixed web errors. In the process of doing, there is a custom system with TypeScript .",
    ],
  },
  {
    id: 2,
    title: "React Developer",
    companyName: "Viet Japan Partner",
    icon: VIETJAPAN,
    iconBg: "#E6DEDD",
    date: "12/2022 - 5/2023",
    points: [
      "I participated in a project to make a web product for students to answer questions from schools. Implemented a modular and scalable CSS architecture using BEM (Block Element Modifier) methodology, reducing CSS file size by 20% and making maintenance easier for future developers",
      "The project uses ReactJS, PHP, Typescript and the Ant Design library.In which my specific job is to make 2 pages about Policy and Term. Has all the functions like :",
      "+ Create new contracts, add contracts based on existing contracts, delete contracts when not active ",
      "+ Bug fixes and validation updates, functionality for other sites",
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    companyName: "BE EARNING JSC",
    icon: N404,
    iconBg: "#383E56",
    date: "03/2024 - 12/2024",
    points: [
      "I participate in the company's MTD project with small apps that have their own functions. The project uses ReactJS, Typescript, TailwindCSS and other small libraries.",
      "My specific job is to create and update features of wallets, accounts and user transactions. Participated in customer feedback sessions, implementing key UI/UX improvements that resulted in a 15% decrease in customer support inquiries. Designed and developed a reusable React component library, reducing development time for subsequent projects by an average of 10%. Has full functions such as:",
      " + With wallet: create wallet account, update wallet background and name, share transactions via wallet QR codes, wallet transaction history ",
      " + With account information: updated according to user-optional functions on the phone ",
      " + For trading accounts: will be displayed when users search using the ID provided when purchasing bundled packages ",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "This is a personal CV that clearly stated the highlights such as the company used to do, experience and personal products. This is the product I built with new technologies such as Vite, Three, Frame-Motion and using ReactJs, TypeScript, Tailwindcss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "typescript ",
        color: "green-text-gradient",
      },
      {
        name: "three",
        color: "pink-text-gradient",
      },
    ],
    image: html,
    source_code_link: "gágsadf",
  },
  {
    name: "Web Bakery",
    description:
      "The project uses ReactJS, redux toolkit query, typescript , tailwind css. The website allows users to view and buy online cakes, new cakes and promotions. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit query",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: webBakery,
    source_code_link: "https://bakery-web-ashy.vercel.app",
  },
];

export { services, technologies, experiences, projects };
