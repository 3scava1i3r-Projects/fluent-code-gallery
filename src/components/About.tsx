
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">About Me</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Hello! I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centric web applications. My journey in tech has led me to explore the exciting world of AI and automation, where I enjoy leveraging cutting-edge tools to build intelligent systems. I thrive on challenges and am constantly learning to keep up with the ever-evolving landscape of technology.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
