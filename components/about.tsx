"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics & Communication</span>, I
        followed my heart into programming. I dove into a coding bootcamp and
        mastered <span className="font-medium">full-stack web development</span>
        . <span className="italic">What I love most about coding?</span> That
        magical moment when everything clicks and a solution comes together. My
        go-to tools are{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I'm always excited to pick up new tech.
      </p>

      <p>
        <span className="italic">When I step away from the keyboard</span>,
        you'll find me gaming, binge-watching movies, or glued to{" "}
        <span className="font-medium">
          F1 races, football matches, and NBA games
        </span>
        . I'm also teaching myself <span className="font-medium">chess</span> —
        turns out it's just as challenging as debugging code!
      </p>
    </motion.section>
  );
}

export default About;
