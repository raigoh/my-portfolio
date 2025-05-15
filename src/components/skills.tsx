"use client";

import { motion } from "framer-motion";
import {
  Database,
  Server,
  Layout,
  Terminal,
  Cloud,
  Layers,
  Shield,
  Monitor,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: [
        "Node.js",
        "Python",
        "Express",
        "GraphQL",
        "RESTful APIs",
        "Docker",
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["PostgreSQL", "MySQL", "SQL", "SQLite", "MariaDB"],
    },
    {
      category: "IT Systems & Support",
      icon: <Monitor className="h-6 w-6" />,
      items: [
        "Windows Server",
        "Linux",
        "Microsoft Office",
        "Google Workspace",
        "Hardware Setup",
        "Network Administration",
        "Help Desk Support",
      ],
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      items: [
        "OSINT",
        "Data Collection",
        "API Integration",
        "Rate Limiting",
        "Data Normalization",
        "Error Handling",
        "Security Best Practices",
        "Ethical Data Collection",
        "API Key Management",
      ],
    },
    {
      category: "Tools & Collaboration",
      icon: <Terminal className="h-6 w-6" />,
      items: [
        "GitHub",
        "Gitea",
        "Agile",
        "Scrum",
        "Technical Documentation",
        "CLI Development",
        "Data Processing",
        "Web Scraping",
        "Environment Variables",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack,
            with experience in both development and IT systems support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
