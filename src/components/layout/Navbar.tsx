import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../../data/businessData';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/booking', label: 'Book Now' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      e.preventDefault();
      navigate('/admin');
    } else {
      timeoutRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 500);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kai-deeper/95 backdrop-blur-md border-b-3 border-kai-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={handleLogoClick}>
            <img
              src="/assets/kaifavi.png"
              alt="Kai Gaming"
              className="h-10 w-10 sm:h-12 sm:w-12 object-cover object-top group-hover:rotate-6 transition-transform duration-200"
              style={{ clipPath: 'inset(0 0 25% 0)', mixBlendMode: 'lighten' }}
            />
            <span className="text-lg sm:text-xl font-black tracking-tight text-kai-text">
              KAI <span className="text-kai-red transition-all duration-200">GAMING</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? 'text-kai-red active'
                    : 'text-kai-muted hover:text-kai-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-neo bg-kai-surface text-kai-text text-xs py-2 px-4 border border-white/10 hover:border-kai-red/50 flex items-center gap-1.5"
            >
              <MessageCircle size={14} className="text-green-400" /> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-kai-muted hover:text-kai-text focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-kai-deeper border-t-3 border-kai-ink px-4 py-4 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3.5 text-sm font-bold uppercase tracking-wide rounded-xl border-2 border-kai-ink transition-all duration-200 min-h-[46px] flex items-center ${
                location.pathname === link.to
                  ? 'bg-kai-red text-kai-ink font-black'
                  : 'bg-kai-surface text-kai-text hover:bg-kai-dark'
              }`}
              style={{
                animation: `step-slide-in 0.25s ease-out ${i * 45}ms both`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3.5 text-sm font-bold uppercase tracking-wide rounded-xl border-2 border-green-500/40 bg-green-500/10 text-green-400 text-center flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
