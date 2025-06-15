
import { motion } from 'framer-motion';
import LaptopModel from './LaptopModel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const skillCategories = [
  {
    title: 'Front-end',
    skills: ['TypeScript', 'React', 'Vue', 'Vuex', 'Redux Toolkit', 'NextJs', 'Nuxt', 'Jest', 'GraphQL', 'React Native', 'Puppeteer', 'Enzyme'],
  },
  {
    title: 'Styles',
    skills: ['SCSS', 'SASS', 'PostCSS', 'Ant.d', 'MUI', 'Material UI'],
  },
  {
    title: 'Back-end',
    skills: ['Golang', 'Gin', 'GORM', 'PostgreSQL', 'MySQL', 'MongoDB', 'gRPC', 'Redis', 'Kafka', 'Node', 'Nest', 'TypeORM', 'Microservices'],
  },
  {
    title: 'DevOps',
    skills: ['Nginx', 'Brotli', 'Docker', '(CI/CD)', 'k8s', 'Bash'],
  }
];

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-x-16 gap-y-16 items-center">
        {/* Left Side: Skills Carousel */}
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display text-center lg:text-left">My Skills</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 relative"
            >
              <CarouselContent>
                {skillCategories.map((category, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="rounded-2xl border border-border/60 p-6 bg-card transition-colors hover:bg-primary group h-48 flex flex-col justify-center">
                        <h3 className="text-xl font-bold font-display mb-4 group-hover:text-primary-foreground">{category.title}</h3>
                        <p className="text-muted-foreground leading-relaxed break-words group-hover:text-primary-foreground">{category.skills.join(' / ')}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              </div>
            </Carousel>
          </motion.div>
        </div>

        {/* Right Side: Intro + Image */}
        <div className="sticky top-28 space-y-8">
          <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-2xl leading-relaxed text-primary">
            Hello! I'm Hritwik, I'm a <span className="font-bold">full-stack developer</span>.
            <br />
            More than 5 years experience.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <LaptopModel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
