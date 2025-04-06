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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Create a constant for the reusable text
export const DEFAULT_CODE_AVAILABILITY =
  "I'm happy to share and discuss the source code with recruiters and fellow developers. Feel free to reach out through the contact form for a detailed walkthrough of the implementation.";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const projects = [
    {
      id: 1,
      title: "Web-Game",
      description:
        "A modern multiplayer twist on the classic Pong game featuring a unique dodecagon-shaped arena with real-time physics and stunning neon visuals.",
      image: "/images/pong.png",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "WebSocket",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "REST APIs",
        "Ngrok",
      ],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/web-game.mp4",
      githubLink: "https://github.com/raigoh/web-game",
      featured: true,
      learnings: [
        "We gained experience in building a real-time multiplayer game system from scratch, implementing core functionalities like WebSocket communication, room management, and player synchronization",
        "We learned to create a dynamic game state system using Socket.IO, making real-time updates more efficient and reducing network overhead",
        "We developed skills in implementing server-side game logic with Node.js and Express.js, managing multiple player connections and game rooms",
        "We created a centralized game state management system with broadcast patterns, enabling synchronized gameplay and persistent room states",
        "We built a robust multiplayer web game with both player interaction and real-time communication, handling complex game states and user interactions",
        "We implemented server communication using Socket.IO and Express.js, creating real-time endpoints for managing game sessions and player data",
        "We enhanced understanding of event-driven architecture and state management through building custom game mechanics and multiplayer features",
        "We learned to structure a project with clear separation between client and server logic, dividing game core functionality from networking code",
      ],
      improvements:
        "I'd like to add user authentication and persistent player profiles for tracking game progress. The multiplayer system needs smoother real-time synchronization and latency optimization. A comprehensive leaderboard system would improve engagement, and the game mechanics could benefit from additional game modes. Also to expand the UI with mobile responsiveness and touch controls for cross-platform play.",
      feedback:
        "The peer review process highlighted my strong performance in developing the multiplayer web game. Fellow team members particularly noted my reliability in delivering quality work and problem-solving abilities. My technical proficiency was demonstrated through implementing complex real-time features and meeting project requirements effectively. The feedback emphasized my positive team contributions, being open to collaboration and maintaining a productive atmosphere. Team members appreciated my ability to understand the project scope and create appropriate solutions, especially in handling WebSocket communication and game state management. My problem-solving approach was praised for finding efficient solutions without compromising quality. The review also highlighted my growth throughout the project, particularly in grasping multiplayer game concepts and implementing them successfully. This feedback demonstrates my capability to be both a technical contributor and supportive team member who helps maintain a positive development environment.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 2,
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
      learnings: [
        "We gained experience in building a modular JavaScript framework from scratch, implementing core functionalities like routing, state management, and component creation",
        "We learned to create a flexible component system using curried functions, making element creation more intuitive and reducing boilerplate code",
        "We developed skills in implementing client-side routing for a single-page application, managing navigation without page reloads",
        "We created a centralized state management system with subscription patterns, enabling reactive UI updates and persistent storage",
        "We built a robust calculator application with both basic and scientific modes, handling complex mathematical operations and user interactions",
        "We implemented server communication using Express.js, creating RESTful endpoints for managing calculation history",
        "We enhanced understanding of event delegation and DOM manipulation through building custom UI components",
        "We learned to structure a project with clear separation of concerns, dividing framework core functionality from application-specific code",
      ],
      improvements:
        "I'd like to add keyboard shortcuts and local storage encryption for sensitive calculations. The UI component system needs built-in animations and smoother transitions between modes. A searchable calculation history would improve usability, and the scientific calculator could benefit from graphing capabilities. I'm also planning to expand the theming system to support custom user-defined themes.",
      feedback:
        "The peer review process highlighted my consistent engagement and valuable contributions throughout the project. Fellow students particularly noted my active participation in all aspects of development and review processes. My technical proficiency was recognized through reliable code quality and meeting project deadlines efficiently. The feedback emphasized my strong communication skills, being both concise in explanations and open to receiving feedback. Team members appreciated my supportive approach and team-first mindset, noting my ability to adapt to shifting priorities and handle changes effectively. My problem-solving abilities were praised for balancing practical solutions with creative approaches. The review also highlighted my leadership qualities, particularly in leading by example and motivating others. This feedback demonstrates my ability to be a reliable team member who contributes both technically and collaboratively to project success.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 3,
      title: "Match-Me",
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
      learnings: [
        "We gained hands-on experience in implementing real-time communication using WebSocket and GraphQL subscriptions, enabling instant chat and status updates between users",
        "We developed skills in building secure authentication systems using JWT tokens and handling sensitive user data appropriately",
        "We enhanced database design abilities with PostgreSQL, implementing complex queries and relationships for user matching and profile management",
        "We improved frontend development skills using React with TypeScript and Tailwind CSS, creating responsive interfaces that adapt across different devices",
        "We learned to develop and implement matching algorithms, incorporating multiple criteria and weighted scoring systems",
        "We gained experience in building modular, maintainable code architecture, effectively separating frontend and backend concerns",
        "We strengthened understanding of state management and real-time data synchronization in a full-stack environment",
        "We developed skills in error handling and input validation across both frontend and backend systems",
      ],
      improvements:
        "Future enhancements would include data visualization for match statistics, improved chat features with delivery status and file sharing, and customizable UI themes. I'd also implement offline support and explore machine learning to refine the matching algorithm based on user interactions and success patterns.",
      feedback:
        "The peer review process highlighted strong positive feedback regarding my engagement and technical contributions. Fellow students particularly noted my active involvement in helping others understand the codebase through individual sessions and detailed explanations. My communication skills were praised, especially in explaining technical concepts and design rationales. The feedback emphasized my strong problem-solving abilities and willingness to help troubleshoot issues, including conducting in-depth code review sessions. Team members appreciated my collaborative approach, availability for discussions, and ability to handle challenging situations, particularly during git-related issues. My technical proficiency was recognized through successful implementation of features and problem resolution. The review also noted my ability to provide constructive feedback on ideas while maintaining open discussions about potential solutions. This feedback demonstrates my commitment to team success and ability to contribute meaningfully to complex projects.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 4,
      title: "Race Track Info Screens",
      description: "A real-time system to control races and inform spectators.",
      image: "/images/circuit.png",
      tags: ["HTML", "CSS", "JavaScript", "Express.js", "Socket.io", "Ngrok"],
      category: "fullstack",
      hasDemo: true,
      demoLink: "/videos/race.mp4",
      githubLink: "https://github.com/raigoh/Circuit",
      featured: true,
      learnings: [
        "We learned how to implement real-time communication between multiple interfaces using Socket.IO, ensuring instant updates across all user screens",
        "We gained experience in building secure authentication systems, implementing role-based access with different keys for each user type",
        "We developed skills in responsive design, creating interfaces that work seamlessly across mobile, tablet, and desktop devices",
        "We mastered state management across a complex system, keeping race data synchronized between all connected users",
        "We improved code organization skills by building a modular, event-driven architecture that's easy to maintain and scale",
        "We learned to handle different environment configurations, creating separate settings for development and production",
        "We enhanced UI/UX skills by designing intuitive interfaces for different user roles, from race officials to spectators",
        "We gained practical experience in handling real-time data updates and race timing systems",
      ],
      improvements:
        "The system needs a persistent database for storing race histories and driver statistics. I'd upgrade the authentication to use JWT tokens with proper role management, improve the UI with real-time notifications and loading states, and add a comprehensive race replay system. The mobile experience also needs optimization with touch-friendly controls.",
      feedback:
        "I received positive feedback from my peers regarding my engagement and technical abilities. They specifically praised my responsiveness to feedback, even when it came late in the development process. My communication skills were highlighted as a strength, with peers noting that I presented the project concepts and solutions clearly. They appreciated my active participation in discussions and willingness to incorporate suggestions. The feedback emphasized my good teamwork abilities and how I remained responsive throughout the project. My technical implementation met the requirements effectively, and peers noted my ability to explain my approach well. They particularly valued my collaborative attitude and how I engaged constructively with the review process. Overall, the feedback reflected that I demonstrated both strong technical competence and good communication skills, while maintaining a positive and responsive approach to teamwork.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 5,
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
      learnings: [
        "We learned how to build a complete web application using Go, from routing to database management",
        "We gained practical experience in implementing user authentication and session management",
        "We developed skills in creating and managing SQLite databases with proper table relationships",
        "We improved understanding of middleware patterns for logging, authentication, and error handling",
        "We learned how to structure a large project with clear separation of concerns and modular components",
      ],
      improvements:
        "I plan to implement real-time chat using WebSockets, enhance search with filters and tags, add support for image uploads, and make the frontend more interactive with dynamic content loading and notifications while maintaining the robust backend structure.",
      feedback:
        "I received strong positive feedback during the peer review process. Reviewers particularly praised my active engagement and immediate response to bug fixes, noting I was present throughout the process. My technical understanding was highlighted as thorough, with comments noting I showed strong knowledge and skill in implementation. The communication of my approach was well-received, though feedback suggested I could improve in being more open to receiving constructive criticism. Peers recognized my motivation and programming abilities, especially in handling technical challenges and implementing comprehensive error handling. While maintaining respectful interactions throughout, the experience taught me the value of embracing diverse perspectives during code reviews.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 6,
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
      learnings: [
        "We strengthened technical expertise through complex problem-solving and efficient code implementation",
        "We developed strong code review skills and learned to provide well-explained feedback to peers",
        "We improved ability to explain technical decisions and architectural choices clearly",
        "We gained valuable experience in receiving and incorporating peer feedback constructively",
        "We learned the importance of balancing technical excellence with team communication",
      ],
      improvements:
        "I'd like to develop a web-based interface for better network visualization and interaction. The system needs more user-friendly error messages and the ability to save/load network configurations as JSON files. Adding basic statistics display like total path length and stops would make the results more meaningful to users.",
      feedback:
        "I received strong peer feedback during the review process, with particularly high marks in technical execution and project understanding. Reviewers highlighted my active engagement in discussions and thorough explanation of architectural decisions, especially regarding the middleware implementation which exceeded project requirements. My technical contributions and problem-solving approach were noted as strengths, along with efficient task completion and code quality. While I demonstrated good adaptability and critical thinking, feedback suggested opportunities for growth in leadership initiative and team communication. Peers appreciated my willingness to explain technical decisions and incorporate feedback, though noted I could take more initiative in guiding team direction. Overall, the feedback emphasized my strong technical foundation while highlighting areas for development in leadership and proactive communication.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 7,
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
      learnings: [
        "I learned the importance of effective middleware implementation and server architecture",
        "I developed a deep understanding of HTTP server patterns and graceful shutdown procedures",
        "I mastered implementing production-grade features like rate limiting and logging systems",
        "I improved my Go programming skills through practical server-side development",
        "I gained hands-on experience in building robust error handling and recovery systems",
      ],
      improvements:
        "My priorities for improvement include adding comprehensive unit and integration tests, implementing Prometheus metrics for monitoring, and setting up structured logging. I also want to implement configuration management through YAML files and containerize the application with Docker to make deployment more flexible and reliable.",
      feedback:
        "I received excellent feedback during the peer review process. Reviewers particularly praised my initiative in implementing middleware as a bonus feature, demonstrating strong technical understanding. My active participation in discussions and thorough documentation were highlighted as strengths. The implementation of logging, rate limiting, and error recovery middleware was specifically noted as going beyond the basic requirements. Peers appreciated my clear explanations of architectural decisions and prompt responses to review comments.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 8,
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
      learnings: [
        "I learned the importance of effective project structuring and modular programming",
        "I developed a deep understanding of creating maintainable and scalable architectures",
        "I mastered organizing file structures and breaking down components logically",
        "I improved my debugging skills through better code organization",
        "I gained hands-on experience in building extensible software systems",
      ],
      improvements:
        "The main area for enhancement is implementing a more comprehensive error handling system with detailed tracking and user-friendly messages. Better error logging and recovery mechanisms would significantly improve reliability and create a smoother user experience.",
      feedback:
        "I received excellent feedback from my peers during the review process. They highlighted my quick response to feedback, active engagement throughout the process, and strong technical understanding. My communication was rated highly, with reviewers noting I was 'fast and clear with no problem to connect and discuss.' They also appreciated my implementation skills, mentioning that 'everything worked and looked great.' I demonstrated strong presentation and communication skills throughout the review process.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 9,
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
      learnings: [
        "I developed a secure password generator implementing NIST guidelines, gaining experience in cryptographic best practices and security considerations",
        "I created a modular JavaScript architecture using ES6 modules, improving my skills in organizing code with clear separation of concerns",
        "I implemented real-time password strength evaluation with multiple criteria, enhancing my understanding of security patterns and validation logic",
        "I built an accessible UI following WCAG guidelines, learning to create inclusive web applications with proper ARIA labels and keyboard navigation",
        "I designed a responsive interface with CSS custom properties and modern layout techniques, strengthening my skills in mobile-first development",
        "I developed a theme system with dark mode support, learning to manage application-wide state changes and user preferences",
        "I created a robust error handling system with user-friendly feedback, improving my skills in building reliable user interfaces",
        "I implemented secure clipboard operations and local storage management, gaining experience in handling sensitive data safely",
      ],
      improvements:
        "I want to add visual password strength indicators with specific feedback on weaknesses, implement a secure password vault with encryption, and add password history tracking with categorization features. Secure password sharing with end-to-end encryption would also be valuable for team collaboration.",
      feedback:
        "In developing this password generator, I focused on creating a secure and accessible application with modern web standards. I implemented a modular architecture that made the code maintainable and easy to extend. The project features robust password strength evaluation, responsive design with dark mode support, and proper accessibility implementation. I'm particularly proud of the clean code structure and thorough documentation I maintained throughout development. This project demonstrates my ability to build secure, user-friendly web applications while following best practices in modern JavaScript development.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 10,
      title: "Admin-Dashboard",
      description:
        "This repository contains the HTML and CSS code for a static webpage called 'Admin Dashboard.' It is a user interface template that can be used as a starting point for creating an admin dashboard for web applications.",
      image: "/images/admin_dashboard.png",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      hasDemo: false,
      githubLink: "https://github.com/raigoh/Admin-Dashboard",
      featured: false,
      learnings: [
        "I mastered CSS Grid and Flexbox by creating complex dashboard layouts",
        "I learned to organize CSS effectively using BEM methodology",
        "I gained hands-on experience integrating Material Icons for UI elements",
        "I implemented interactive features like favorite buttons using JavaScript",
        "I developed skills in creating responsive designs with nested grid structures",
      ],
      improvements:
        "I'd like to implement a customizable dark/light theme system, add user authentication for saving favorite projects and personalizing layouts, and enhance project cards with interactive statistics and previews. A robust search and filtering system would also make finding specific projects much easier.",
      feedback:
        "In developing this admin dashboard, I successfully implemented a responsive layout using CSS Grid and Flexbox, demonstrating my growth in modern CSS techniques. I'm particularly proud of the clean code organization using BEM methodology and the interactive features I added with JavaScript. The project showcases my ability to create professional user interfaces while maintaining good coding practices.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 11,
      title: "Sign-Up Page",
      description:
        "This is a simple sign-up page template created with HTML and CSS. It provides a clean and responsive design for user registration.",
      image: "/images/Sign-up-Form.png",
      tags: ["HTML", "CSS"],
      category: "frontend",
      hasDemo: false,
      githubLink: "https://github.com/raigoh/Sign-up-Form",
      featured: false,
      learnings: [
        "I implemented responsive design using flexbox and media queries to ensure the form works on both desktop and mobile devices",
        "I learned to create professional form layouts with proper input validation and styling",
        "I gained experience working with external assets like custom fonts and background images",
        "I improved my CSS skills by implementing hover effects and custom button styling",
        "I practiced mobile-first design principles by adapting layouts for different screen sizes",
      ],
      improvements:
        "Adding real-time password strength validation, dynamic error messages, and animated transitions would greatly enhance user experience. I'd also implement social media authentication options and optimize the mobile experience with better touch input handling and progressive form loading.",
      feedback:
        "In building this sign-up form, I successfully created a responsive and user-friendly interface that works seamlessly across different devices. I'm particularly proud of the clean layout implementation using flexbox and the professional styling with custom hover effects and form validation. The project demonstrates my ability to create modern web forms while maintaining good design principles and attention to user experience.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
    },
    {
      id: 12,
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
      learnings: [
        "I implemented game logic for ship placement and collision detection in Python",
        "I learned to work with 2D arrays to create and manage the game board",
        "I developed input validation to ensure proper user interaction",
        "I gained experience with random number generation for ship placement",
        "I improved my skills in creating user-friendly game",
      ],
      improvements:
        "I plan to create a graphical interface using Pygame, add sound effects for game events, and implement different difficulty levels with varying AI strategies. Adding multiplayer functionality would make the game more engaging, and refactoring to object-oriented principles would improve the code organization.",
      feedback:
        "In developing this Battleship game, I successfully implemented complex game logic using Python, including ship placement algorithms and collision detection. I'm particularly proud of creating an efficient 2D array system for the game board and implementing thorough input validation for user moves. The project demonstrates my ability to write clean, functional game logic while maintaining good user interaction through clear feedback and game state management.",
      codeAvailability: DEFAULT_CODE_AVAILABILITY,
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
                    <div
                      className="relative overflow-hidden aspect-video cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="secondary"
                          className="pointer-events-none"
                        >
                          View Details
                        </Button>
                      </div>
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

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
            <DialogHeader className="flex-none border-b bg-background pb-4">
              <DialogTitle className="text-2xl">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                Detailed information about {selectedProject.title} project
                including technologies, learnings, and improvements.
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-y-auto flex-1">
              <div className="space-y-6 pt-4 px-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    About
                  </h4>
                  <p className="break-words whitespace-normal">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="break-words"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedProject.learnings && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Key Learnings
                    </h4>
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                      {selectedProject.learnings.map((learning, index) => (
                        <li
                          key={index}
                          className="break-words whitespace-normal"
                        >
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.improvements && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Future Improvements
                    </h4>
                    <p className="break-words whitespace-normal">
                      {selectedProject.improvements}
                    </p>
                  </div>
                )}

                {selectedProject.feedback && (
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Project Feedback
                    </h4>
                    <p className="break-words whitespace-normal">
                      {selectedProject.feedback}
                    </p>
                  </div>
                )}

                <div className="text-sm italic text-muted-foreground break-words whitespace-normal">
                  {selectedProject.codeAvailability}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  {selectedProject.hasDemo && (
                    <Button size="sm" asChild>
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
