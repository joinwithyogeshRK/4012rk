import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Settings, Trophy, Gamepad, LayoutDashboard, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/dashboard', name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
    { path: '/challenges', name: 'Challenges', icon: <Gamepad className="h-5 w-5" /> },
    { path: '/achievements', name: 'Achievements', icon: <Trophy className="h-5 w-5" /> },
    { path: '/profile', name: 'Profile', icon: <User className="h-5 w-5" /> },
    { path: '/settings', name: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <nav className="glassmorphism sticky top-0 z-50 py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <h1 className="text-gradient font-bold text-2xl">PulsePlay</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300',
                location.pathname === link.path
                  ? 'bg-primary/20 text-primary'
                  : 'hover:bg-white/5'
              )}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-primary/50 bg-transparent hover:bg-primary/20"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </Button>
          <Button className="gradient-button">
            Start Playing
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-primary/50 bg-transparent hover:bg-primary/20"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism py-4 px-6 shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
                  location.pathname === link.path
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-white/5'
                )}
                onClick={closeMenu}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Button className="gradient-button mt-4">
              Start Playing
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
