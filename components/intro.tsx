"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import sanu from "../public/sanu.jpeg";

function LiveCounter() {
  const [ms, setMs] = useState(0);

  useEffect(() => {
    const start = new Date("2022-01-01").getTime(); // 👈 your coding journey start date
    const update = () => setMs(Date.now() - start);
    update();
    const id = setInterval(update, 10);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-violet-300/60 text-xs align-middle">
      ({ms.toLocaleString()} ms into this journey)
    </span>
  );
}

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center text-2xl items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={sanu}
              alt="Madhu Portfolio"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-4xl md:text-5xl font-bold leading-tight text-center">
          <span className="font-mono text-violet-600 dark:text-violet-300 whitespace-nowrap">
            &lt;MadhuSudan /&gt;
          </span>
          <span className="font-normal text-gray-900 dark:text-white">
            {" "}
            — where <em>logic</em> meets <em>design</em>.
          </span>
        </p>

        {/* Live counter */}
        <p className="text-center mt-2 text-sm">
          <span className="font-mono text-violet-500/50 dark:text-violet-300/50">
            <LiveCounter />
          </span>
        </p>

        <p className="text-lg md:text-xl text-center text-gray-700 dark:text-white/70 mt-4 flex items-center justify-center gap-2 flex-wrap">
          Turning
          <code className="bg-violet-100 dark:bg-violet-500/20 rounded px-2 py-0.5 text-violet-700 dark:text-violet-200 text-sm font-mono">
            ideas
          </code>
          <span className="text-violet-600 dark:text-violet-300">→</span>
          <code className="bg-violet-100 dark:bg-violet-500/20 rounded px-2 py-0.5 text-violet-700 dark:text-violet-200 text-sm font-mono">
            interfaces
          </code>
          with React & Next.js
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1RgqRW82abrP1aHwaWs3dmAYLUL32BOtg/view?usp=sharing"
          target="_blank"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/madhusudan-panigrahi/"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/madhusudan8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
