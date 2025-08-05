"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaRobot,
  FaCloud,
  FaBrain,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import {
  SiReact,
} from "react-icons/si";

const skills = [
  {
    domain: "Programming Languages",
    icon: <FaCode className="text-xl text-rose-600" />,
    skills: ["Python", "HTML/CSS", "JavaScript", "C++", "Java", "C# (Unity)"],
  },
  {
    domain: "Data Science / AI",
    icon: <FaBrain className="text-xl text-rose-500" />,
    skills: ["NLP", "ML"],
  },
  {
    domain: "Data Engineering",
    icon: <FaCloud className="text-xl text-rose-400" />,
    skills: [
      "Python",
      "SQL",
      "Data Mining",
      "AWS S3",
      "Data Modeling"
    ],
  },
  {
    domain: "Frontend Development",
    icon: <SiReact className="text-xl text-rose-300" />,
    skills: [
      "Tailwind",
      "CSS",
      "Bootstrap",
      "Responsive Design"
    ],
  },
  {
    domain: "Backend Development",
    icon: <FaServer className="text-xl text-rose-200" />,
    skills: ["Node.js", "Express"],
  },
  {
    domain: "DBMS",
    icon: <FaDatabase className="text-xl text-rose-100" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    domain: "DSA & Problem Solving",
    icon: <FaRobot className="text-xl text-rose-50" />,
    skills: ["Algorithm Analysis", "Problem Solving"],
  },
  {
    domain: "Extra Curricular",
    icon: <FaChalkboardTeacher className="text-xl text-rose-300" />,
    skills: [
      "Sports",
      "Show Hosting",
      "Event Management",
      "Debate",
      "Script Writing",
      "Content Creation",
      "Video Editing",
    ],
  },
  {
    domain: "Soft Skills",
    icon: <FaUsers className="text-xl text-rose-400" />,
    skills: ["Good Listening", "Communication", "Team Management"],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-rose-50 to-rose-100 text-rose-900 flex flex-col items-center relative overflow-hidden">
      {/* Background petals will appear here automatically from App.js */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skill Set
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {skills.map((category, index) => (
          <motion.div
            key={category.domain}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-70 backdrop-blur-md border border-rose-200 rounded-2xl shadow-lg p-6 w-72 hover:bg-opacity-80 cursor-default"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.domain}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-rose-100 text-rose-800 text-sm px-3 py-1 rounded-full shadow-sm hover:bg-rose-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}