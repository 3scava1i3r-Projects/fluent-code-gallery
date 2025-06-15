
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="container relative flex flex-col items-center justify-center text-center min-h-screen py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl font-display">
          Full-stack Developer
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          I build robust web applications and explore the frontiers of AI-powered automation. Turning complex problems into elegant solutions.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
            <Button size="lg">Projects <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <Button size="lg" variant="outline">Get in Touch</Button>
          </ScrollLink>
        </div>
        <div className="mt-10 flex items-center gap-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
