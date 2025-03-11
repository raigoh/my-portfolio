"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "IT-Systems Specialist Internship",
      company: "Kuvarnet OY",
      duration: "November 2021 - April 2022",
      location: "Tartu, Estonia",
      description: "Provided comprehensive IT support for organization.",
      achievements: [
        "Provided comprehensive IT support",
        "Managed Google Workspace and Office 365",
        "Implemented cybersecurity measures through secure Windows installations and new computer setups",
        "Supported Windows Server environments",
        "Assisted end-users with technical challenges",
      ],
      skills: [
        "Google Workspace",
        "Office 365",
        "Windows Server",
        "IT Support",
        "Cybersecurity",
        "Windows Installation",
        "Computer Setup",
        "System Configuration",
      ],
    },
    {
      id: 2,
      role: "IT-Systems Specialist Internship",
      company: "Gobain Eesti AS",
      duration: "May 2021 - August 2021",
      location: "Tartu, Estonia",
      description: "Supported daily IT operations for organization.",
      achievements: [
        "Supported daily IT operations",
        "Focused on cybersecurity and system administration",
        "Managed Windows Server environments",
        "Provided helpdesk and Office 365 support",
        "Contributed to IT infrastructure maintenance",
        "Set up new computers for employees",
        "Performed system cleaning and maintenance",
      ],
      skills: [
        "IT Operations",
        "Cybersecurity",
        "System Administration",
        "Windows Server",
        "Office 365",
        "Helpdesk Support",
        "IT Infrastructure",
        "Computer Setup",
        "System Maintenance",
        "Hardware Configuration",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My professional journey has equipped me with diverse experience in
            building and scaling systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-muted"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-lg font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
