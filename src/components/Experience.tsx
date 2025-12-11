import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "training",
    title: "ITI MEARN Full-Stack Training",
    organization: "Information Technology Institute (ITI)",
    period: "Jun 2025 – Dec 2025",
    description: [
      "Learned and applied React.js and Node.js in building projects",
      "Worked with team members on real-world tasks and debugging",
      "Intensive training on full-stack development with MERN stack",
    ],
    icon: GraduationCap,
    color: "primary",
  },
  {
    type: "work",
    title: "Technical Support",
    organization: "Telecom Egypt",
    period: "2022 – Present",
    description: [
      "Providing technical support and problem resolution",
      "Customer service and communication skills development",
      "Technical troubleshooting and system maintenance",
    ],
    icon: Briefcase,
    color: "accent",
  },
];

const certificates = [
  {
    title: "Frontend Development with React.js",
    issuer: "SEF Academy",
    date: "Jan 2025 – Oct 2025",
  },
  {
    title: "The Principles of Writing Clean Code",
    issuer: "Professional Certificate",
    date: "Oct 2025",
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB University",
    date: "Sep 2025",
  },
  {
    title: "Secure Software Development Lifecycle (SSDLC)",
    issuer: "Security Certificate",
    date: "Sep 2025",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    exp.color === "primary"
                      ? "bg-primary/20"
                      : "bg-accent/20"
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  <exp.icon
                    className={`w-4 h-4 ${
                      exp.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </motion.div>

                <motion.div
                  className="card-glass"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-4">
                    {exp.organization}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold mb-6 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-primary" />
              Certificates
            </motion.h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="card-glass group"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8"
            >
              <h4 className="text-lg font-medium mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Communication",
                  "Teamwork",
                  "Time Management",
                  "Critical Thinking",
                  "Self-Learning",
                  "Leadership",
                  "Adaptability",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full glass text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
