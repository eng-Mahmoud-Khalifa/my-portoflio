import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Award, Code2 } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Code2 },
  { label: "Technologies", value: "15+", icon: Award },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Passionate About <span className="gradient-text">Web Development</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glass">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Frontend Engineer</span> specializing 
                in React, Next.js, Angular, and TypeScript with strong experience in building 
                responsive, high-performance user interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Skilled in state management, API integration, reusable component architecture, 
                and UI optimization. Delivered multiple production-level projects including 
                dashboards, e-commerce platforms, and dynamic web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="card-glass flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Cairo, Egypt</p>
                </div>
              </motion.div>

              <motion.div
                className="card-glass flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-xl bg-accent/10">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Graduated</p>
                  <p className="font-medium">2022</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-glass text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
            
            {/* Education Card */}
            <motion.div
              className="col-span-2 card-glass"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Bachelor's in Computer & Information Science
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    Ain Shams University - Information System Department
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">Graduation Project:</span> Plant Disease Recognition - 
                    AI-based application that detects plant diseases from images (Grade: Excellent)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
