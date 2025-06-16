import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

// Project data updated based on your resume
const projectData = [
  {
    title: 'Data Ingestion Platform',
    description: 'Engineered and deployed a user interface for a data ingestion platform, significantly increasing lead processing efficiency before on-boarding.',
    tags: ['React', 'UI/UX', 'Data Processing', 'Frontend'],
    github: 'https://github.com/3scava1i3r', // Note: Update with specific repo link if available
    live: '#',
  },
  {
    title: 'Brain Tumor Detection (CNN)',
    description: 'Developed a Convolutional Neural Network algorithm to analyze MRI images, achieving 96% accuracy in identifying brain tumors.',
    tags: ['Python', 'TensorFlow', 'Keras', 'AI/ML'],
    github: 'https://github.com/3scava1i3r', // Note: Update with specific repo link if available
    live: '#',
  },
  {
    title: 'Decentralized Application (Web3)',
    description: 'Built a full-stack decentralized application on the Ethereum blockchain, featuring smart contract interactions and a Web3-integrated frontend.',
    tags: ['Ethereum', 'Hardhat', 'TypeScript', 'Web3.js'],
    github: 'https://github.com/3scava1i3r', // Note: Update with specific repo link if available
    live: '#',
  },
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px tolerance
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center font-display">My Projects</h2>
        
        <div className="relative mt-12">
          {/* Scrollable Area */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mb-6 space-x-6 lg:space-x-8 scrollbar-hide"
          >
            {projectData.map((project, index) => (
              <Card key={index} className="flex flex-col w-[90vw] sm:w-[400px] flex-shrink-0 snap-center border-border/60 hover:border-primary/40 transition-colors duration-300">
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
            
            {/* "Find More" Card */}
            <Card className="flex flex-col items-center justify-center text-center w-[90vw] sm:w-[400px] flex-shrink-0 snap-center border-border/60 hover:border-primary/40 transition-colors duration-300 bg-card p-6">
              <CardHeader>
                <CardTitle className="font-display">Explore More</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center">
                <p className="text-muted-foreground">
                  Discover a wider range of my work, experiments, and contributions on GitHub.
                </p>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full">
                  <a href="https://github.com/3scava1i3r-Projects" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View All Projects
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Navigation Buttons (Desktop only) */}
          <div className="hidden lg:block">
             <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-10 disabled:opacity-30"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
              >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-10 disabled:opacity-30"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;