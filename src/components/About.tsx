import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const skillCategories = [
  {
    title: 'Front-end',
    skills: ['TypeScript', 'React', 'Redux Toolkit', 'NextJs', 'Vite', 'Jest', 'React Native', 'SCSS', 'Daisy UI', 'Shadcn'],
  },
  {
    title: 'Web3 and security',
    skills: ['Solidity', 'Web3.js', 'Hardhat', 'Foundry', 'Ethers'],
  },
  {
    title: 'Back-end',
    skills: ['Supabase', 'PostgreSQL', 'MySQL', 'MongoDB', 'Node', 'Microservices', 'Python', 'Flask', 'FastAPI', 'Express'],
  },
  {
    title: 'AI and Automation',
    skills: ['Ollama', 'n8n', 'Python', 'REST APIs', 'Bash'],
  }
];

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="mb-16">
        <h2 className="text-xl font-normal tracking-tight text-muted-foreground sm:text-2xl font-display">... /About me</h2>
      </div>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-x-16 gap-y-8 items-start">
        {/* Left Side: Skills */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="rounded-2xl border border-border/60 p-6 bg-card transition-colors hover:bg-primary group">
            <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-foreground">Front-end</h3>
            <p className="text-muted-foreground leading-relaxed break-words group-hover:text-primary-foreground">{skillCategories[0].skills.join(' / ')}</p>
          </motion.div>

          <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="rounded-2xl border border-border/60 p-6 bg-card transition-colors hover:bg-primary group">
              <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-foreground">Web3 and Security</h3>
              <p className="text-muted-foreground leading-relaxed break-words group-hover:text-primary-foreground">{skillCategories[1].skills.join(' / ')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="flex items-center justify-center gap-4">
              <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-full border-2 flex-shrink-0 transition-colors">
                <a href="https://github.com/3scava1i3r" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="w-7 h-7"/>
                </a>
              </Button>
              <Button asChild variant="default" size="icon" className="w-16 h-16 rounded-full flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://github.com/3scava1i3r/3scava1i3r" aria-label="External link" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-7 h-7"/>
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="rounded-2xl border border-border/60 p-6 bg-card transition-colors hover:bg-primary group">
            <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-foreground">Back-end</h3>
            <p className="text-muted-foreground leading-relaxed break-words group-hover:text-primary-foreground">{skillCategories[2].skills.join(' / ')}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 items-end pt-4">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }} className="text-muted-foreground italic">
              Some of my <span className="text-primary/80 not-italic font-semibold">favorite</span> technologies, topics, or tools that I worked with
            </motion.p>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="rounded-2xl border border-border/60 p-6 bg-card transition-colors hover:bg-primary group">
              <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-foreground">AI and Automation</h3>
              <p className="text-muted-foreground leading-relaxed break-words group-hover:text-primary-foreground">{skillCategories[3].skills.join(' / ')}</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Intro + Image */}
        <div className="sticky top-28 space-y-8">
          <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-2xl leading-relaxed text-primary">
            Hello! I'm Hritwik, I'm a <span className="font-bold">full-stack developer</span>.
            <br />
            More than 1 year experience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/lovable-uploads/8addd7fe-cb41-43cf-afb3-1ed5e3b543d7.png" alt="A photo of Hritwik" className="rounded-3xl object-cover aspect-[4/5] w-full grayscale" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
