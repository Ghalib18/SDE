"use client"

import { motion } from "framer-motion"

const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Spring Security",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Hibernate",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "RAG",
    icon: "https://cdn.simpleicons.org/chainlink/375BD2",
  },
  {
  name: "Kubernetes",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
},
{
  name: "Docker",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
},

{
  name: "Kafka",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
},
  {
    name: "GenAI",
    icon: "https://cdn.simpleicons.org/google/4285F4",
  },
  {
    name: "REST API",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
  },
]

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-14">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.3 + index * 0.05,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            y: -8,
            scale: 1.08,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
          }}
          className="group relative"
        >
          {/* Skill Card */}
          <div className="relative bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100 cursor-pointer transition-all duration-300">

            {/* Neumorphic Background */}
            <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-50 to-white pointer-events-none" />

            {/* Icon */}
            <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Tooltip */}
            <div
              className="
                absolute
                left-1/2
                top-full
                mt-4
                -translate-x-1/2
                whitespace-nowrap
                rounded-lg
                bg-slate-800
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                opacity-0
                invisible
                translate-y-1
                transition-all
                duration-200
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                z-50
                pointer-events-none
                shadow-lg
              "
            >
              {/* Tooltip Arrow */}
              <div
                className="
                  absolute
                  -top-1.5
                  left-1/2
                  -translate-x-1/2
                  h-3
                  w-3
                  rotate-45
                  bg-slate-800
                "
              />

              {skill.name}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}