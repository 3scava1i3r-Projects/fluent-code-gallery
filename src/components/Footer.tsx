
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Hritwik Tripathi. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <ScrollLink to="hero" smooth={true} duration={500}>
            <Button variant="outline" size="icon">
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Go to top</span>
            </Button>
          </ScrollLink>
          <a href="https://github.com/3scava1i3r" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github /></a>
          <a href="https://www.linkedin.com/in/hritwikt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
          <a href="mailto:tripathi.hritwik@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Mail /></a>
          <a href="https://twitter.com/0xHritwik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
