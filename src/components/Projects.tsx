
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'AI-Powered Content Generator',
    description: 'A web app that uses generative AI to create blog posts and marketing copy from simple prompts, featuring a rich text editor.',
    tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
  {
    title: 'Automated E-commerce Analytics',
    description: 'A dashboard that automatically pulls data from Shopify, analyzes sales trends, and generates actionable insights using ML models.',
    tags: ['Python', 'Flask', 'React', 'Recharts'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-time Code Collaboration Tool',
    description: 'A platform for developers to write and share code in real-time, inspired by VS Code Live Share, built with WebSockets.',
    tags: ['TypeScript', 'Express', 'WebSockets', 'Next.js'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-display">My Projects</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <Card key={index} className="flex flex-col border-border/60 hover:border-primary/40 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-display">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-x-4">
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
