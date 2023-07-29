import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiAdobexd,
  SiAdobephotoshop,
  SiRedux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Mobile and Web Development:",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <SiTypescript key={5} />,
          <SiRedux key={7} />,
        ],
      },
      {
        title: "UI/UX Design:",
        icons: [
          <FaFigma key={0} />,
          <SiAdobexd key={1} />,
          <SiAdobephotoshop key={2} />,
        ],
      },
      {
        title: "Back-End:",
        icons: [
          <FaNodeJs key={0} />,
          <FaPython key={1} />,
          <SiPostgresql key={2} />,
          <SiMongodb key={3} />,
        ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Hackthon Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Founder - SwipeUp Technology",
        // stage: "2012 - 2023",
        // stage:
        //   "Founder of Swipe Up Technology, focused on turning dreams into reality through technology",
      },
      {
        title: "Software Engineer - Linx",
        // stage: "2010 - 2012",
      },
      {
        title: "Software Engineer - Midway",
        // stage: "2008 - 2010",
      },
      {
        title: "Software Engineer - Lyncas",
        // stage: "2008 - 2010",
      },
      {
        title: "Software Engineer - Banco do Brasil Americas",
        // stage: "2008 - 2010",
      },
      {
        title: "Software Engineer - Indra",
        // stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      // {
      //   title: "BootCamp - Rocketseat",
      //   stage: "2011",
      // },
      {
        title:
          "Computer Science University Degree - University Center of João Pessoa - UNIPÊ",
        // stage: "2009",
      },
      {
        title: "Certified Bootcamp - Rocketseat",
        stage: "2019",
      },
      {
        title: "Certified Bootcamp - Rocketseat",
        stage: "2020",
      },
      {
        title: "Certified Ignite - Rocketseat",
        stage: "2021",
      },
      {
        title: "Certified Ignite - Rocketseat",
        stage: "2022",
      },
      {
        title: "Certified Ignite - Rocketseat",
        stage: "2023",
      },
      {
        title: "Certified - Architecture for the Web and Mobile",
        // stage: "2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="md:overflow-visible overflow-auto h-full bg-primary/30 py-32 text-center xl:text-left" >
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto  flex flex-col items-center xl:flex-row gap-x-6 h-[100vh]">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-50">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            8 years ago, I began freelancing as a developer. Since then, Ive
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed courses
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Hackathon
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex">-</div> */}
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
