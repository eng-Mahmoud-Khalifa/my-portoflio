import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Bootstrap", level: 95 },
      { name: "Redux", level: 85 },
    ],
    color: "primary",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "NestJS", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
    color: "accent",
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Agile/Scrum", level: 80 },
      { name: "Design Patterns", level: 75 },
    ],
    color: "primary",
  },
];

const floatingIcons = [
  { icon: "⚛️", name: "React", delay: 0 },
  { icon: "▲", name: "Next.js", delay: 0.5 },
  { icon: "🟦", name: "TypeScript", delay: 1 },
  { icon: "💚", name: "Node.js", delay: 1.5 },
  { icon: "🍃", name: "MongoDB", delay: 2 },
  { icon: "🎨", name: "Tailwind", delay: 2.5 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={item.name}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${15 + (index * 15) % 70}%`,
              top: `${20 + (index * 25) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card-glass"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === "primary"
                            ? "bg-gradient-to-r from-primary to-primary/70"
                            : "bg-gradient-to-r from-accent to-accent/70"
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h4 className="text-center text-lg font-medium mb-6">
            Also experienced with
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5",
              "CSS3",
              "JavaScript ES6+",
              "jQuery",
              "Bootstrap",
              "SCSS",
              "Context API",
              "Mongoose",
              "C++",
              "Java",
              "Python",
              "Unit Testing",
              "SOLID Principles",
              "Clean Code",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass text-sm font-medium cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
