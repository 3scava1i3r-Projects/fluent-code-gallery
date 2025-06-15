
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32 relative overflow-hidden">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">Get In Touch</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out!
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <a href="https://cal.com/hritwikt" target="_blank" rel="noopener noreferrer">Say Hello</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
