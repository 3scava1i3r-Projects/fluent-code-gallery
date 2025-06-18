// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Link as ScrollLink } from 'react-scroll';
// // Icons updated to match the design in the image
// import { ArrowRight, Github, Linkedin, Send, Facebook, Instagram } from 'lucide-react';

// // Social links configuration to match the design
// const socialLinks = [
//   { name: 'Github', icon: <Github className="h-4 w-4" />, href: 'https://github.com/3scava1i3r' },
//   { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/hritwikt' },
//   // Using 'Send' icon as a good visual proxy for Telegram
//   { name: 'Telegram', icon: <Send className="h-4 w-4" />, href: '#' },
//   { name: 'Facebook', icon: <Facebook className="h-4 w-4" />, href: '#' },
//   { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: '#' },
// ];

// const Hero = () => {
//   return (
//     <section id="hero" className="container flex items-center justify-center min-h-screen py-16 md:py-24">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-6xl mx-auto"
//       >
//         {/* DESKTOP LAYOUT (lg and up) */}
//         <div className="hidden lg:grid grid-cols-[1fr,auto] grid-rows-2 gap-x-12 items-center">
//           <div className="row-span-2 flex flex-col justify-center items-start">
//             <h1 className="text-8xl xl:text-9xl font-bold font-display tracking-tight text-primary">
//               Full-stack
//             </h1>
//             <p className="mt-6 text-lg text-left text-muted-foreground max-w-md">
//               My goal is to write maintainable, clean and understandable code to process
//               development was enjoyable.
//             </p>
//             <div className="mt-10 flex flex-wrap items-center gap-3">
//               {socialLinks.map((social) => (
//                 <Button key={social.name} variant="outline" className="rounded-full gap-x-2.5 px-4 font-medium" asChild>
//                   <a href={social.href} target="_blank" rel="noopener noreferrer">
//                     {social.icon}
//                     {social.name}
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-start items-end h-full">
//             <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer">
//               <div className="flex items-center gap-x-4">
//                 <Button size="lg" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 px-8 h-16 text-base font-semibold shadow-sm transition-colors">
//                   Projects
//                 </Button>
//                 <Button variant="secondary" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 h-14 w-14">
//                   <ArrowRight className="h-5 w-5" />
//                 </Button>
//               </div>
//             </ScrollLink>
//           </div>

//           <div className="flex justify-start items-start h-full pt-4">
//             <h1 className="text-8xl xl:text-9xl font-bold font-display tracking-tight text-primary">
//               Developer
//             </h1>
//           </div>
//         </div>

//         {/* MOBILE & TABLET LAYOUT (up to lg) */}
//         <div className="lg:hidden flex flex-col items-center text-center">
//           <h1 className="text-6xl sm:text-7xl font-bold font-display tracking-tighter text-primary">
//             Full-stack Developer
//           </h1>
//           <p className="mt-6 text-lg text-muted-foreground max-w-xl">
//             My goal is to write maintainable, clean and understandable code to process
//             development was enjoyable.
//           </p>
//           <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="mt-10">
//             <div className="flex items-center gap-x-3">
//               <Button size="lg" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 px-8 h-16 text-base font-semibold shadow-sm transition-colors">
//                 Projects
//               </Button>
//               <Button variant="secondary" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 h-14 w-14">
//                 <ArrowRight className="h-5 w-5" />
//               </Button>
//             </div>
//           </ScrollLink>
//           <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
//             {socialLinks.map((social) => (
//               <Button key={social.name} variant="outline" className="rounded-full gap-x-2.5 px-4 font-medium" asChild>
//                 <a href={social.href} target="_blank" rel="noopener noreferrer">
//                   {social.icon}
//                   {social.name}
//                 </a>
//               </Button>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight, Mail, Github, Linkedin, Send, Twitter } from 'lucide-react';

// Import the background component you created
import { PerlinNoiseBackground } from '@/components/ui/perlin-noise-background';

// Social links configuration for easy management
const socialLinks = [
  { name: 'Github', icon: <Github className="h-4 w-4" />, href: 'https://github.com/3scava1i3r' },
  { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/hritwikt' },
  {name: 'Email', icon: <Mail className="h-4 w-4" />, href: 'mailto:tripathi.hritwik@gmail.com'},
  { name: 'Twitter', icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com/0xHritwik' },
  // { name: 'Facebook', icon: <Facebook className="h-4 w-4" />, href: '#' },
  // { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: '#' },
];

const Hero = () => {
  return (
    // The main section container must be relative to anchor the absolute background
    <section 
      id="hero" 
      className="relative container flex items-center justify-center min-h-screen py-16 md:py-24 overflow-hidden"
    >
      {/* 1. PERLIN NOISE BACKGROUND */}
      {/* This div is positioned absolutely to sit behind the content.
          A CSS mask creates the soft, circular fade-out effect. */}
      <div className="absolute top-0 left-0 w-1/2 h-full z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]">
        <PerlinNoiseBackground className="w-full h-full" />
      </div>

      {/* 2. MAIN CONTENT */}
      {/* This div holds all the text and buttons. It has a higher z-index to appear on top. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto z-10"
      >
        {/* 3. DESKTOP LAYOUT (visible on lg screens and up) */}
        <div className="hidden lg:grid grid-cols-[1fr,auto] grid-rows-2 gap-x-12 items-center">
          <div className="row-span-2 flex flex-col justify-center items-start">
            <h1 className="text-8xl xl:text-9xl font-bold font-display tracking-tight text-primary">
              Full-stack
            </h1>
            <p className="mt-6 text-lg text-left text-muted-foreground max-w-md">
              My goal is to write maintainable, clean and understandable code to process
              development was enjoyable.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" className="rounded-full gap-x-2.5 px-4 font-medium" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-start items-end h-full">
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              <div className="flex items-center gap-x-4">
                <Button size="lg" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 px-8 h-16 text-base font-semibold shadow-sm transition-colors">
                  Projects
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 h-14 w-14">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </ScrollLink>
          </div>

          <div className="flex justify-start items-start h-full pt-4">
            <h1 className="text-8xl xl:text-9xl font-bold font-display tracking-tight text-primary">
              Developer
            </h1>
          </div>
        </div>

        {/* 4. MOBILE & TABLET LAYOUT (hidden on lg screens and up) */}
        <div className="lg:hidden flex flex-col items-center text-center">
          <h1 className="text-6xl sm:text-7xl font-bold font-display tracking-tighter text-primary">
            Full-stack Developer
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            My goal is to write maintainable, clean and understandable code to process
            development was enjoyable.
          </p>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="mt-10">
            <div className="flex items-center gap-x-3">
              <Button size="lg" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 px-8 h-16 text-base font-semibold shadow-sm transition-colors">
                Projects
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 h-14 w-14">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </ScrollLink>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="outline" className="rounded-full gap-x-2.5 px-4 font-medium" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;