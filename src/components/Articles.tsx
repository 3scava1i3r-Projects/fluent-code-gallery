
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <section id="articles" className="container py-24 sm:py-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">Articles</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          This section is currently under construction. Please check back later for insightful articles on web development, AI, and more.
        </p>
      </motion.div>
    </section>
  );
};
export default Articles;
