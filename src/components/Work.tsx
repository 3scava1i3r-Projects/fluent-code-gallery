
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section id="work" className="container py-24 sm:py-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">Work Experience</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          My professional journey and work experience will be detailed here soon. Stay tuned!
        </p>
      </motion.div>
    </section>
  );
};
export default Work;
