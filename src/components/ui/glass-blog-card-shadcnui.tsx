import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { BookOpen, Github, ExternalLink } from 'lucide-react';

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  github?: string;
  live?: string;
  caseStudy?: string;
  tags?: string[];
  className?: string;
}

const defaultPost = {
  title: 'The Future of UI Design',
  excerpt:
    'Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.',
  image:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  github: '#',
  live: '#',
  caseStudy: '#',
  tags: ['Design', 'UI/UX'],
};

export function GlassBlogCard({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  github = defaultPost.github,
  live = defaultPost.live,
  caseStudy = defaultPost.caseStudy,
  tags = defaultPost.tags,
  className,
}: GlassBlogCardProps) {
  const visibleTags = tags?.slice(0, 3) || [];
  const remaining = tags ? tags.length - visibleTags.length : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn('w-full max-w-[400px]', className)}
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image (left) - smaller on md+ */}
          <div className="md:w-1/3 relative overflow-hidden bg-muted">
            <motion.img
              src={image}
              alt={title}
              className="h-48 w-full object-cover md:h-full md:w-full transition-transform duration-500 group-hover:scale-110 filter grayscale dark:grayscale-0 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

            {/* Hover Overlay Action (over image) */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25"
              >
                <BookOpen className="h-4 w-4" />
                Read Article
              </motion.button>
            </div>
          </div>

          {/* Content (right) - larger area */}
          <div className="flex flex-col gap-4 p-5 md:w-2/3">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {visibleTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-background/50 backdrop-blur-sm hover:bg-background/80 truncate"
                  >
                    {tag}
                  </Badge>
                ))}
                {remaining > 0 && (
                  <Badge variant="secondary" className="bg-background/60">
                    +{remaining}
                  </Badge>
                )}
              </div>

              <h3 className="text-lg md:text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
            </div>

            <div className="mt-auto flex justify-end gap-x-4 border-t border-border/50 pt-4">
              {github !== '#' && github !== '' && (
                <Button variant="outline" asChild>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {live !== '#' && live !== '' && (
                <Button variant="outline" asChild>
                  <a href={live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {caseStudy !== '#' && caseStudy !== '' && (
                <Button variant="outline" asChild>
                  <a href={caseStudy} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" /> Case Study
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default GlassBlogCard;
