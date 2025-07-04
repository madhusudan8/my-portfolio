import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuAnchor } from "react-icons/lu";
import readyTensor from "../public/readyTensor.png";
import astra from "../public/astra.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Suvarchala Solutionzs",
    location: "Remote",
    description:
      "Gained one year of experience as a remote front-end developer, during which I proactively enhanced my skill set to become proficient in full-stack development, thereby broadening my technical capabilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "NE Group",
    location: "Hyderabad",
    description:
      "Currently employed as a proficient React developer with expertise in technologies such as React, Next.js, TypeScript, Tailwind, Redux Toolkit.",
    icon: React.createElement(FaReact),
    date: "2023 - 2025",
  },
  {
    title: "Compileinfy",
    location: "Hyderabad",
    description:
      "Currently employed as a proficient Full-stack developer with expertise in technologies such as Next.js, TypeScript, Tailwind, Transtack Query and AWS Amplify. Actively seeking full-time opportunities to further my career.",
    icon: React.createElement(LuAnchor),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ready Tensor",
    description:
      "Developed a platform for algorithm evaluation, featuring user submissions, filtering, avatars, and pagination.",
    tags: ["React", "TypeScript", "MUI", "Express.js", "Sequelize", "MySQL"],
    imageUrl: readyTensor,
  },
  {
    title: "Astra",
    description:
      "Led front-end development for an admin portal, implementing advanced filtering and seamless pagination.",
    tags: ["React", "Redux Toolkit", "SCSS"],
    imageUrl: astra,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "MUI",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux Tool Kit",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Framer Motion",
  "Tran-stack Query",
  "GraphQL",
  "AWS Amplify",
] as const;
