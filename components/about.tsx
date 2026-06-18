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
        ECE grad who followed his heart into code. After a full-stack bootcamp,
        I found my home in <span className="font-medium">React & Next.js</span>{" "}
        — building fast, clean web apps and always chasing that{" "}
        <span className="italic">"it finally works"</span> moment. I'm endlessly
        curious about new tech and love picking up something new.
      </p>

      <p>
        Off the keyboard:{" "}
        <span className="font-medium">
          F1 races, NBA games, football matches
        </span>
        , and slowly, painfully losing to{" "}
        <span className="font-medium">chess bots</span>.
      </p>
    </motion.section>
  );
}

export default About;
