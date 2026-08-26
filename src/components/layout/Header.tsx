import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training', to: '/training' },
  { label: 'Register / Enquire', to: '/enquire' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300
          ${isScrolled ? 'bg-white shadow-nav py-2' : 'bg-white/95 backdrop-blur-sm py-3'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src="/logo.png" alt="Aakash Associates Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `
                    px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                    ${isActive
                      ? 'text-primary bg-primary-50 font-semibold'
                      : 'text-primary/70 hover:text-primary hover:bg-gray-50'
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/enquire?tab=services"
                className="px-4 py-2 text-sm font-semibold text-primary border border-primary/30 rounded-lg hover:bg-primary-50 transition-colors duration-150"
              >
                Enquire for Services
              </Link>
              <Link
                to="/enquire?tab=training"
                className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors duration-150"
              >
                Join Training
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed inset-0 z-30 lg:hidden
          transition-all duration-300
          ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl
            transition-transform duration-300
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            flex flex-col
          `}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="font-display font-700 text-primary text-lg">Menu</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg text-primary hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Nav */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `
                  block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150
                  ${isActive
                    ? 'text-primary bg-primary-50 font-semibold'
                    : 'text-primary/70 hover:text-primary hover:bg-gray-50'
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Drawer CTAs */}
          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link
              to="/enquire?tab=services"
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-primary border border-primary/30 rounded-xl hover:bg-primary-50"
            >
              Enquire for Services
            </Link>
            <Link
              to="/enquire?tab=training"
              className="block w-full text-center px-4 py-3 text-sm font-semibold bg-primary text-white rounded-xl hover:bg-primary-700"
            >
              Join Training
            </Link>
          </div>
        </div>
      </div>

      {/* Header spacer */}
      <div className="h-16 sm:h-[68px]" />
    </>
  );
}
