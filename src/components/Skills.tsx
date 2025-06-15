
import { motion } from 'framer-motion';
import { Code, Server, BrainCircuit, Layers, Database, GitMerge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  { icon: Code, name: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server, name: 'Backend', tech: ['Node.js', 'Express', 'Python', 'Flask'] },
  { icon: Database, name: 'Databases', tech: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { icon: BrainCircuit, name: 'AI/ML', tech: ['PyTorch', 'LangChain', 'OpenAI API'] },
  { icon: Layers, name: 'DevOps', tech: ['Docker', 'AWS', 'Vercel'] },
  { icon: GitMerge, name: 'Tools', tech: ['Git', 'GitHub', 'VS Code'] },
];

const Skills = () => {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-display">My Skills</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center p-6 rounded-lg border border-border/60">
              <skill.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-display">{skill.name}</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {skill.tech.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
