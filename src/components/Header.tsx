import { Link } from 'react-scroll';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'articles', label: 'Articles' },
  { to: 'honors', label: 'Honors' },
  { to: 'photography', label: 'Photography' }, // <-- ADDED THIS LINE
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
            
            {/* START: "Hi" button with popover on the left */}
            <div className="relative mt-1">
              <button
                disabled
                className="text-foreground/40 cursor-not-allowed"
              >
                Hi
              </button>

              {/* The "Coming Soon" popover element */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 flex items-center pointer-events-none">
                {/* The text bubble */}
                <div className="whitespace-nowrap rounded-md bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground">
                  Coming Soon
                </div>
                {/* The triangle pointer (pointing right) */}
                <div className="h-2 w-2 bg-muted -ml-1 rotate-45" />
              </div>

            </div>
            {/* END: Updated "Hi" button */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;