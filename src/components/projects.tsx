"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Frontend-Framework",
      description:
        "A modular JavaScript framework-based Calculator web application demonstrating client-side routing, state management, component creation, and server interaction using Express. This project serves as both an application and a framework example, highlighting best practices in building maintainable, extensible web applications.",
      image: "/images/calculator.png",
      tags: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "REST APIs"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/framework.mp4",
      githubLink: "https://github.com/raigoh/frontend-framework",
      featured: true,
    },
    {
      id: 2,
      title: "Match-me",
      description:
        "A TaskBuddy recommendation application designed to connect kood/Sisu students based on their profile information. The application helps students find study partners and collaborators with similar interests and skills.",
      image: "/images/match-me.png",
      tags: [
        "TypeScript",
        "React",
        "GraphQL",
        "Tailwind CSS",
        "Go",
        "PostgreSQL",
      ],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/match-me.mp4",
      githubLink: "https://github.com/raigoh/match-me",
      featured: true,
    },
    {
      id: 3,
      title: "Race Track Info Screens",
      description: "A real-time system to control races and inform spectators.",
      image: "/images/circuit.png",
      tags: ["HTML", "CSS", "JavaScript", "Express.js", "Socket.io", "Ngrok"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/race.mp4",
      githubLink: "https://github.com/raigoh/Circuit",
      featured: true,
    },
    {
      id: 4,
      title: "Literary Lions Forum",
      description:
        "Literary Lions Forum is a vibrant web-based discussion platform for literature enthusiasts. Connect with fellow book lovers, share your thoughts on your favorite works, and engage in stimulating literary discussions.",
      image: "/images/forum.png",
      tags: ["Go", "HTML", "CSS", "SQLite", "Docker"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/forum.mp4",
      githubLink: "https://github.com/raigoh/Volumes",
      featured: true,
    },
    {
      id: 5,
      title: "Train Pathfinding System",
      description:
        "This project implements a train pathfinding system that finds optimal routes for multiple trains in a railway network. It reads a network map, calculates the best paths for a given number of trains between specified start and end stations, and simulates the train movements.",
      image: "/images/network_visualization.png",
      tags: ["Go"],
      category: "backend",
      hasDemo: true,
      demoLink: "/videos/stations.mp4",
      githubLink: "https://github.com/raigoh/internal-mapping-system",
      featured: false,
    },
    {
      id: 6,
      title: "Cars-Viewer",
      description:
        "This application allows you to manage and view car models, manufacturers, and categories. It also provides functionalities for filtering and comparing different car models.",
      image: "/images/transport.png",
      tags: ["Go", "HTML", "CSS", "JavaScript", "Makefile", "RESTful APIs"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/cars.mp4",
      githubLink: "https://github.com/raigoh/transport-interface",
      featured: true,
    },
    {
      id: 7,
      title: "ASCII Art Decoder/Encoder",
      description:
        "This web application allows users to decode and encode ASCII art. It provides a simple interface where users can input ASCII art and choose to either decode or encode it.",
      image: "/images/kood.jpg",
      tags: ["Go", "HTML", "CSS"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/ascii.mp4",
      githubLink: "https://github.com/raigoh/Artix",
      featured: true,
    },
    {
      id: 8,
      title: "Password-generator",
      description:
        "A modern, secure password generator built with vanilla JavaScript that helps users create strong, customizable passwords with an intuitive interface and dark mode support.",
      image: "/images/password.png",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/password.mp4",
      githubLink: "https://github.com/raigoh/Password-generator",
      featured: false,
    },
    {
      id: 9,
      title: "Admin-Dashboard",
      description:
        "This repository contains the HTML and CSS code for a static webpage called 'Admin Dashboard.' It is a user interface template that can be used as a starting point for creating an admin dashboard for web applications.",
      image: "/images/admin_dashboard.png",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      hasDemo: false,
      githubLink: "https://github.com/raigoh/Admin-Dashboard",
      featured: false,
    },
    {
      id: 10,
      title: "Sign-Up Page",
      description:
        "This is a simple sign-up page template created with HTML and CSS. It provides a clean and responsive design for user registration.",
      image: "/images/Sign-up-Form.png",
      tags: ["HTML", "CSS"],
      category: "frontend",
      hasDemo: false,
      githubLink: "https://github.com/raigoh/Sign-up-Form",
      featured: false,
    },
    {
      id: 11,
      title: "Battleship",
      description:
        "Welcome to the Battleship game! This is a simple Python implementation of the classic game Battleship. The game is played on an 8x8 grid where you try to sink hidden battleships by guessing their locations.",
      image: "/images/battleship.png",
      tags: ["Python"],
      category: "backend",
      hasDemo: true,
      demoLink: "/videos/battleship.mp4",
      githubLink: "https://github.com/raigoh/Battleship",
      featured: false,
    },
  ];

  const getFilteredProjects = () => {
    let filtered = [];

    if (activeTab === "all") {
      // Sort by ID in ascending order before slicing
      filtered = projects.sort((a, b) => a.id - b.id);
    } else if (activeTab === "featured") {
      filtered = projects.filter((p) => p.featured);
    } else {
      filtered = projects.filter((p) => p.category === activeTab);
    }

    // Limit the number of projects shown based on visibleCount
    return filtered.slice(0, visibleCount);
  };

  const filteredProjects = getFilteredProjects();

  const loadMoreProjects = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => Math.min(prev + 6, projects.length)); // Load 6 more projects
    }
  };

  const showLessProjects = () => {
    setVisibleCount(6); // Collapse back to initial 6 projects
    setIsExpanded(false);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one presented
            unique challenges and opportunities to learn and grow.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-2xl">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.hasDemo && (
                        <Button size="sm" asChild>
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          {visibleCount < projects.length && (
            <Button
              variant="outline"
              onClick={loadMoreProjects}
              className="mr-4"
            >
              View More Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
          {visibleCount > 6 && (
            <Button variant="outline" onClick={showLessProjects}>
              Show Less
              <ArrowRight className="h-4 w-4 -rotate-90" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
