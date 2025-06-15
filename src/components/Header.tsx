
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'articles', label: 'Articles' },
  { to: 'contact', label: 'Contacts' },
];

const Header = () => {
  return (
    <header className="w-full bg-background">
      <div className="container relative flex h-20 max-w-screen-2xl items-center justify-between">
        <Link to="hero" spy={true} smooth={true} duration={500} className="font-display text-lg font-bold cursor-pointer leading-tight">
          Hritwik<br />Tripathi
        </Link>
        
        <nav className="hidden absolute left-1/2 -translate-x-1/2 md:flex items-center space-x-6 text-sm font-medium">
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

        <div className="hidden md:flex items-center text-sm">
           <div className="flex flex-col items-center font-medium leading-tight">
            <button className="hover:text-foreground transition-colors">
              <span className="underline decoration-from-font underline-offset-4">En</span>
            </button>
            <button className="text-foreground/60 hover:text-foreground transition-colors">Ge</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
