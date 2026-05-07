import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';

// Project data updated based on your resume
const projectData = [
  {
  title: 'AI-Powered PPD Rating Calculator',
  description: 'HIPAA-compliant SaaS platform for medical professionals to automate Permanent Partial Disability rating calculations. Features AI-powered assessment engine, AMA guideline compliance, automated report generation, and secure subscription management for healthcare providers.',
  tags: ['Hospital/Healthcare', 'SaaS/Solution', 'Gen AI Service', 'AI/Machine Learning', 'HIPAA Compliance', 'Medical Software', 'Healthcare Technology'],
  github: '#',
  live: 'https://ppdcalculator.ai',
  caseStudy: 'https://contra.com'
},
   {
    title: 'HIE Agency Website',
    description: 'Official website of HIE Agency Website, crafted using Vite.js with a fast, responsive design and modern developer experience at its core.',
    tags: ['Vite', 'Frontend', 'Web Design', 'Performance'],
    github: 'https://github.com/3scava1i3r', // Update with the actual repo if available
    live: 'https://hie.agency',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Issue Prioritizer – AI-Driven Task Scoring',
    description: 'An AI-powered tool that analyzes GitHub issues and ranks them based on urgency, impact, and complexity. Designed for busy dev teams to focus on what matters most, faster.',
    tags: ['AI', 'GitHub API', 'OpenAI', 'Node.js', 'Automation', 'DevTool'],
    github: 'https://github.com/3scava1i3r/Berry', // Adjust to match your actual repo URL
    live: 'https://berry-san.netlify.app', // Add Netlify/Vercel/Render URL if deployed
    caseStudy: 'https://contra.com'
  },
  {
    title: 'YY Labs',
    description: 'A curated collection of lightweight, no-fluff digital tools — from Python automations and AI-powered utilities to clean, modern frontend UI themes — built to help developers, creators, and indie makers move faster.',
    tags: ['Digital Products', 'Automation', 'AI Tools', 'UI Themes', 'Frontend', 'Python', 'Developer Tools'],
    github: '#',
    live: 'https://yylab.gumroad.com/',
    caseStudy: 'https://contra.com'
  },
  {
  title: 'Vega Blockchain - Chain Data Visualization',
  description: 'A real-time data visualization tool built for Vega Protocol, showcasing live derivatives trading data from their alpha mainnet using Vega’s public APIs. Features include order book listings, streaming trade events, and interactive market filtering, all aligned with Vega’s branding.',
  tags: ['JavaScript', 'GraphQL', 'REST', 'WebSockets', 'Data Visualization', 'Blockchain'],
  github: 'https://github.com/3scava1i3r', // Update with actual repo if available
  live: '#', // Add live demo link if hosted
  caseStudy: 'https://contra.com'
},
  {
    title: 'Data Ingestion Platform',
    description: 'Engineered and deployed a user interface for a data ingestion platform, significantly increasing lead processing efficiency before on-boarding.',
    tags: ['React', 'UI/UX', 'Data Processing', 'Frontend'],
    github: 'https://github.com/3scava1i3r', // Note: Update with specific repo link if available
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Brain Tumor Detection (CNN)',
    description: 'Developed a Convolutional Neural Network algorithm to analyze MRI images, achieving 96% accuracy in identifying brain tumors.',
    tags: ['Python', 'TensorFlow', 'Keras', 'AI/ML'],
    github: 'https://github.com/3scava1i3r/Brain-Tumor-Detection-CNN/', // Note: Update with specific repo link if available
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Debris – Random Sprite Generator',
    description: 'A lightweight Vite-powered web app that generates random sprites using pixel art logic. Ideal for game developers and NFT creators seeking unique visual assets.',
    tags: ['Vite', 'JavaScript', 'Canvas', 'Creative Coding', 'Frontend'],
    github: 'https://github.com/3scava1i3r-projects/debris', // Update if your repo name is different
    live: 'https://debris-sprite.netlify.app/', // Replace with your live link if hosted
    caseStudy: 'https://contra.com'
  },
  {
  title: 'Branded QR Code API',
  description: 'Commercial-grade QR code generation API for scalable, high-quality output with custom branding, logo insertion, color options, vector formats (SVG/PNG), and UPI payment QR support.',
  tags: ['API', 'QR Code', 'Branding', 'SVG', 'UPI', 'Commercial'],
  github: 'https://github.com/3scava1i3r/', // Update if you publish the repo
  live: '#', // Replace with actual deployment URL
  caseStudy: 'https://contra.com'
  },
  {
  title: 'Decentralized Insurance Platform (NDA Project)',
  description: 'A blockchain-based insurance proof-of-concept enabling automated cyclone/hurricane coverage with instant wallet payouts. Features included wallet integration, smart contracts, Chainlink oracles, streaming payments, and automated claim verification across EVM-compatible chains.',
  tags: ['React.js', 'Hardhat', 'Chainlink', 'Superfluid', 'Node.js', 'Web3', 'Polygon', 'Smart Contracts'],
  github: '', // Private/NDA project, so repo not available
  live: '',   // Add demo link if allowed
  caseStudy: 'https://contra.com'
},
  {
  title: 'Fractional NFTs (NDA Project)',
  description: 'A blockchain platform for fractionalizing high-value NFTs, enabling collective ownership, trading, and governance. Features included secure token issuance, marketplace integration, and multi-chain interoperability.',
  tags: ['Solidity', 'Rust', 'Ethereum', 'Sidechains', 'React', 'Web3', 'IPFS', 'NFTs'],
  github: '', // Private/NDA project, no public repo
  live: '',   // Add demo link if allowed
  caseStudy: 'https://contra.com'
},
  {
  title: 'Media Kit Generator',
  description: 'Python tool that auto-generates a media kit from any website by capturing responsive screenshots, a scroll video, and the site logo—saved in a ready-to-use folder.',
  tags: ['Python', 'Automation', 'Media Kit', 'Screenshots', 'Video', 'Web Tools'],
  github: 'https://github.com/3scava1i3r/media-kit', // Update if you publish the repo
  live: '#', // Replace with actual live/demo URL if available
  },
  {
    title: 'KEKW Arcade 🐸',
    description: 'DeFiSummer Hackathon 2021 Winner - NFT Meme Marketplace Prize. Built a retro NES-style meme NFT marketplace in 48 hours with Imgflip API integration, meme generator, wallet connection, and pixel-art gaming UI. Tech Stack: React • TypeScript • Tailwind • shadcn-ui • Vitest.',
    tags: ['React', 'TypeScript', 'Web3', 'NFT', 'Hackathon', 'DeFi', 'Blockchain'],
    github: '#',
    live: 'https://kekw.hie.agency/',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Mask x mStable Chrome Extension Integration',
    description: 'UI/UX design for integrating mStable savings protocol into Mask Network\'s browser extension, enabling users to earn yield on mUSD directly within social platforms like Twitter and Facebook. Delivered interactive prototypes, design system, and multi-protocol DeFi aggregation framework.',
    tags: ['UI/UX Design', 'DeFi', 'Ethereum', 'Figma', 'Cryptocurrency', 'Blockchain', 'Mask Network'],
    github: '#',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Zero to 500 DAOs: Building Sismo\'s Governance Layer',
    description: 'Full-stack integration of Tally as a data provider for Sismo Protocol, connecting governance data from 500+ DAOs to enable privacy-preserving reputation badges. Saved Sismo $6,000-$16,000 in costs and 2-3 weeks of development time while unlocking new revenue opportunities in DAO-focused products.',
    tags: ['Fullstack Engineer', 'TypeScript', 'Web3', 'DAO Governance', 'Zero-Knowledge Proofs', 'Sismo'],
    github: 'https://github.com/sismo-core/sismo-hub',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Powering $2M+ TVL: Real-Time NFT20 Protocol Data with Subgraph',
    description: 'Built a custom Subgraph for NFT20 protocol, indexing NFT trades, swaps, and liquidity pool data for real-time access via GraphQL. Enabled developers to build NFT apps and dashboards, enhancing ecosystem adoption for the $2M+ TVL protocol.',
    tags: ['Blockchain Developer', 'Backend Engineer', 'GraphQL', 'TypeScript', 'Cryptocurrency', 'Blockchain'],
    github: '#',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'TurboEth: Accelerating Web3 Growth with Privacy & Scalability',
    description: 'Enhanced TurboEth with IPFS decentralized storage via Web3.storage and zero-knowledge identity verification using Sismo. Enabled censorship-resistant applications, privacy-focused identity flows, and faster development cycles for Web3 startups.',
    tags: ['Blockchain Developer', 'Frontend Engineer', 'Fullstack Engineer', 'MetaMask', 'Next.js', 'Supabase', 'Cryptocurrency', 'Blockchain'],
    github: '#',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Building Web3UIKit Components to Reduce Web3 Dev Time',
    description: 'Contributed six critical UI components to Moralis Web3UIKit, including ENSAvatar, BlockNumber, ENS Support in ConnectButton, IPFSInput, Slider, and Crypto Exchange Logo Updates. Accelerated dApp development across multiple blockchain networks.',
    tags: ['Frontend Engineer', 'UX Engineer', 'React', 'Storybook', 'Cryptocurrency', 'Blockchain'],
    github: '#',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Smart Contract Audit: Protecting $35M TVL from Slippage Losses',
    description: 'Conducted an internal smart contract audit that identified and fixed a high-severity slippage risk in DeFi liquidity vault contracts. Implemented slippage protection and execution time buffers to prevent capital losses from adverse AMM price movements.',
    tags: ['Security Engineer', 'Solidity Engineer', 'Remix IDE', 'Solidity', 'TypeScript', 'Cryptocurrency', 'Blockchain'],
    github: '#',
    live: '#',
    caseStudy: 'https://contra.com'
  },
  {
    title: 'Driving Instruction Company Landing Page',
    description: 'Designed and developed a professional landing page for a driving instruction company using Framer, focusing on user-friendly navigation and conversion optimization.',
    tags: ['Web Design', 'Framer', 'Landing Page'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Interior Designer Portfolio Website',
    description: 'Created a portfolio landing page for an interior designer who worked on the Netflix office in Nagpur, built with Framer to showcase design expertise and projects.',
    tags: ['Web Design', 'Framer', 'Portfolio', 'Interior Design'],
    github: '#',
    live: '#',
    caseStudy: '#'
  },
  {
    title: 'Never Miss a Moment',
    description: 'Instantly capture stream highlights with a simple chat command. Your personal clipping assistant is here.',
    tags: ['Streaming', 'Clipping', 'Chat Bot', 'Automation'],
    github: '#',
    live: 'https://snipeme.xyz',
    caseStudy: '#'
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
              <Card key={index} className="flex flex-col min-h-[400px] w-[90vw] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[450px] max-w-[500px] flex-shrink-0 snap-center border-border/60 hover:border-primary/40 transition-colors duration-300">
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
                  {project.github !== '#' && project.github !== '' && (
                    <Button variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.live !== '#' && project.live !== '' && (
                    <Button variant="outline" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.caseStudy !== '#' && project.caseStudy !== '' && (
                    <Button variant="outline" asChild>
                      <a href={project.caseStudy} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="mr-2 h-4 w-4" /> Case Study
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}

            {/* "Find More" Card */}
            <Card className="flex flex-col items-center justify-center text-center min-h-[400px] w-[90vw] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[450px] max-w-[500px] flex-shrink-0 snap-center border-border/60 hover:border-primary/40 transition-colors duration-300 bg-card p-6">
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
              <motion.div whileTap={{ scale: 0.8, rotate: -10 }}>
                <ArrowLeft className="h-6 w-6" />
              </motion.div>
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-10 disabled:opacity-30"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
            >
              <motion.div whileTap={{ scale: 0.8, rotate: 10 }}>
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </Button>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="block lg:hidden mt-6 text-center">
            <p className="text-muted-foreground/70 text-sm font-medium">
              ← Swipe to explore projects →
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
