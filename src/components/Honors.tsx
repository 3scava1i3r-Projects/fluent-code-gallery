
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const honorsData = [
  {
    year: '2023',
    name: 'Grand Prize Winner at ETHGlobal Paris',
    org: 'ETHGlobal',
    desc: 'Achieved first place among hundreds of international teams.'
  },
  {
    year: '2022',
    name: '1st Runner-up, Flipkart Grid 4.0',
    org: 'Flipkart',
    desc: 'Placed in the top 1% out of over 150,000 participants.'
  },
  {
    year: '2021',
    name: 'Graph Protocol Winner, ETHCC Hackathon',
    org: 'ETHCC',
    desc: 'Developed a winning project utilizing The Graph protocol.'
  },
];

const Honors = () => {
  return (
    <section id="honors" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-display">Awards & Honors</h2>
        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          {honorsData.map((honor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-x-6"
            >
              <div className="p-2 rounded-full bg-accent/20 border border-accent/50">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{honor.year} - {honor.org}</p>
                <h3 className="text-lg font-bold text-primary mt-1">{honor.name}</h3>
                <p className="text-muted-foreground mt-1">{honor.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Honors;
