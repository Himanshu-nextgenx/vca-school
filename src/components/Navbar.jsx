import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import vcaLogo from '../assets/logovca.png';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Notices', path: '/notices' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // Only be transparent on the Home page; all other pages get solid white always
    const isHome = pathname === '/';
    const isTransparent = isHome && !scrolled;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const baseLink = `text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200`;
    const activeCls = isTransparent ? 'text-white bg-white/20' : 'text-primary bg-primary-50';
    const inactiveCls = isTransparent
        ? 'text-white/90 hover:text-white hover:bg-white/15'
        : 'text-gray-700 hover:text-primary hover:bg-primary-50';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isTransparent ? 'bg-transparent' : 'bg-white shadow-nav'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 flex-shrink-0">
                        <img
                            src={vcaLogo}
                            alt="VCA Logo"
                            className="w-12 h-12 lg:w-14 lg:h-14 object-contain rounded-xl bg-white p-0.5 shadow-md"
                        />
                        <div>
                            <p className={`font-bold text-base lg:text-lg leading-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary'
                                }`}>
                                Virat Children Academy
                            </p>
                            <p className={`text-xs font-medium transition-colors duration-300 ${isTransparent ? 'text-white/75' : 'text-gray-400'
                                }`}>
                                CBSE & RBSE • Est. 2026
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={({ isActive }) =>
                                    `${baseLink} ${isActive ? activeCls : inactiveCls}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/admissions"
                            className="ml-3 px-5 py-2 bg-accent text-white text-sm font-semibold rounded-lg shadow-md hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                        >
                            Apply Now
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${isTransparent ? 'text-white hover:bg-white/15' : 'text-primary hover:bg-primary-50'
                            }`}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <div className="bg-white border-t-4 border-primary shadow-lg px-4 py-4">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive ? 'text-primary bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/admissions"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 block text-center px-4 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors duration-200"
                        >
                            Apply Now — 2026–27
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
