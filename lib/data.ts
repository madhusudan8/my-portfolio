import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Graduation",
    location: "Bhubaneswar, Odisha",
    description:
      "Successfully completed a four-year academic program, culminating in graduation. Subsequently, secured a position as a front-end developer, eager to apply my knowledge and skills in a professional environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
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
      "Currently employed as a proficient React developer with expertise in technologies such as React, Next.js, TypeScript, Tailwind, Redux Toolkit, and MongoDB. Actively seeking full-time opportunities to further my career.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ready Tensor",
    description:
      "Served as a full-stack developer for this startup project over the course of one year. The platform enables users to submit algorithms for evaluation, featuring advanced functionalities such as filtering, user avatars, and pagination.",
    tags: ["React", "TypeScript", "MUI", "Express.js", "Sequelize", "MySQL"],
    imageUrl: readyTensor,
  },
  {
    title: "Astra",
    description:
      "Led the front-end development of a dynamic admin portal in the betting industry. Implemented advanced features such as sophisticated filtering and enhanced user experience through seamless pagination and date range selection.",
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
  "MongoDB",
  "Git",
  "Framer Motion",
] as const;
