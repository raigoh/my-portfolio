"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform -rotate-6"></div>
            <div className="absolute inset-0 bg-card rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/images/raigo.jpg"
                alt="Profile"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold">
              I'm Raigo Hõim, a passionate Full-Stack Developer and Systems
              Specialist
            </h3>

            <p className="text-muted-foreground">
              My journey into the tech world began as an IT systems specialist,
              where my passion for coding and development quickly grew. Driven
              to expand my skills, I embraced the incredible learning
              opportunities at Kood/Sisu, diving deeper into the world of
              software development.
            </p>

            <p className="text-muted-foreground">
              I've built a robust foundation in both front-end and back-end
              technologies, specializing in creating secure, efficient web
              applications. My commitment to continuous learning ensures that I
              stay ahead in the fast-evolving tech landscape.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding, I'm exploring the latest technologies,
              working on personal projects, or deepening my knowledge through
              hands-on practice and learning.
            </p>

            <div className="pt-4 flex flex-col gap-4">
              <Button asChild>
                <a
                  href="/pdf/Raigo_English_CV.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download English Resume
                </a>
              </Button>
              <Button asChild>
                <a
                  href="/pdf/Raigo_Finnish_CV.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Finnish Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
