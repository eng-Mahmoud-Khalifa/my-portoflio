import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "Full-featured e-commerce platform with product listing, shopping cart, checkout flow, and user authentication. Built with modern best practices.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/eng-Mahmoud-Khalifa",
    demo: "#",
    featured: true,
  },
  {
    title: "Movies Website",
    description:
      "Dynamic movie browsing application with search, favorites, and detailed movie information. Uses public movie API for real-time data.",
    technologies: ["Next.js", "React", "Bootstrap", "REST API", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
    github: "https://github.com/eng-Mahmoud-Khalifa",
    demo: "#",
    featured: true,
  },
  {
    title: "Plant Disease Recognition",
    description:
      "AI-powered desktop application that detects plant diseases from images and provides treatment recommendations. Graduation project with Excellent grade.",
    technologies: ["Python", "Machine Learning", "Image Processing", "AI"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    github: "https://github.com/eng-Mahmoud-Khalifa",
    demo: "#",
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="card-glass overflow-hidden h-full flex flex-col"
                whileHover={{ y: -8 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={
                  hoveredIndex === index
                    ? {
                        rotateX: 2,
                        rotateY: -2,
                      }
                    : {
                        rotateX: 0,
                        rotateY: 0,
                      }
                }
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl -m-6 mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {project.featured && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground"
                    >
                      Featured
                    </motion.span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col pt-2">
                  <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-auto"
                      whileHover={{ x: 4 }}
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/eng-Mahmoud-Khalifa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects on GitHub
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
