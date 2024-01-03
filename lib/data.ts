import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "../public/public/rmtdev.png";
import wordanalyticsImg from "../public/public/wordanalytics.png";
import readyTensor from "../public/public/readyTensor.png";
import astra from "../public/public/astra.png";

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
      "After completing a four-year academic program, I successfully graduated and subsequently secured a position as a front-end developer. I am enthusiastic about applying my acquired knowledge and skills in a professional work environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Suvarchala Solutionzs",
    location: "Remote",
    description:
      "I have accumulated one year of experience working remotely as a front-end developer. During this time, I proactively upskilled myself to become proficient in full-stack development, expanding my capabilities beyond the front-end domain.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "SportsIT",
    location: "Hyderabad",
    description:
      "I am currently a proficient React developer with expertise in utilizing technologies such as React, Next.js, TypeScript, Tailwind, Redux Toolkit, and MongoDB within my stack. I am actively seeking full-time opportunities .",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ready Tensor",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Users can submit their algotithms to get Evalution Score. It has features like filtering, Avatars and pagination",
    tags: ["React", "Typescript", "MUI", "Express.js", "Sequelize", "My Sql"],
    imageUrl: readyTensor,
  },
  {
    title: "Astra",
    description:
      "Lead front-end developer for a dynamic Admin Portal in the betting industry. Implemented features like advanced filtering Enhanced user experience with seamless pagination and date range selection",
    tags: ["React", "Redux Toolkit", "SCSS"],
    imageUrl: astra,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
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
