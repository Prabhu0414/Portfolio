import javascript from '../assets/javascript-266x300.png';
import typescript from '../assets/800px-Typescript.svg.png';
import react from '../assets/react.png';
import vscode from '../assets/vs_logo_bg-removebg-preview.png';
import java from '../assets/java (1).png';
import canva from '../assets/Canva.webp';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import bootstap from '../assets/bootstrap.png';
import github from '../assets/github.jpg';
import mongo from '../assets/mongodb.png';
import sql from '../assets/mysql.webp';
import next from '../assets/next-js.png';
import node from '../assets/node.js.png';
import postgres from '../assets/postgresql.png';
import postman from '../assets/postman.png';
import tailwind from '../assets/tailwindcss.png';

export const skillCategories = [
  {
    title: "Programming",
    items: [
      { languageName: "JAVA", url: java },
      { languageName: "JavaScript", url: javascript },
      { languageName: "TypeScript", url: typescript },
    ],
  },
  {
    title: "Full-Stack Web Development",
    items: [
      { languageName: "React", url: react },
      { languageName: "Node.js", url: node },
      { languageName: "Tailwind", url: tailwind },
      { languageName: "Next.js", url: next },
      { languageName: "Bootstrap", url: bootstap },
    ],
  },
  {
    title: "Databases",
    items: [
      { languageName: "SQL", url: sql },
      { languageName: "MongoDB", url: mongo },
      { languageName: "PostgresSQL", url: postgres },
    ],
  },
  {
    title: "DevOps",
    items: [
      { languageName: "GIT", url: git },
      { languageName: "GITHUB", url: github },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { languageName: "POSTMAN", url: postman },
      { languageName: "Visual Studio Code", url: vscode },
      { languageName: "CANVA", url: canva },
      { languageName: "FIGMA", url: figma },
    ],
  },
];
