"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & Systems Specialist";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Raigo Hõim
            </h1>
            <h2 className="text-xl md:text-2xl font-medium h-8">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              I’m passionate about building reliable and efficient web
              applications while continuously expanding my skills in both
              front-end and back-end development. Currently learning and
              experimenting with new technologies to solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/raigoh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/raigo-hoim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-card rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/me.jpg"
                  alt="Raigo Hõim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
