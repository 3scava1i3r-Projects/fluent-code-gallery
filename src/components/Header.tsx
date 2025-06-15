
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'articles', label: 'Articles' },
  { to: 'work', label: 'Work' },
  { to: 'honors', label: 'Honors' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link to="hero" spy={true} smooth={true} duration={500} className="font-display text-lg font-bold cursor-pointer">
          Nikita Khvatov
        </Link>
        
        <div className="flex items-center gap-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer"
                  activeClass="text-foreground"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button variant="outline" size="sm" className="text-xs">EN / GE</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
