import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Download, Sun, Moon } from 'lucide-react';
import { Container } from 'react-bootstrap';
import Button from './Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const sections = ['expertise', 'work', 'independent', 'resume', 'contact'];
            let current = '';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', path: '#work', id: 'work' },
        { name: 'Expertise', path: '#expertise', id: 'expertise' },
        { name: 'Independent', path: '#independent', id: 'independent' }
    ];

    return (
        <header 
            className={`fixed-top transition-all duration-300 py-3`}
            style={{ 
                backgroundColor: scrolled ? 'var(--bg-nav-scrolled)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
                zIndex: 1030
            }}
        >
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    {/* Brand Mark */}
                    <a href="#" className="text-decoration-none d-flex align-items-center gap-2">
                        <span className="font-editorial fw-bold fs-5 text-primary" style={{ letterSpacing: '-0.05em' }}>AB.</span>
                        <span className="text-muted d-none d-sm-block font-editorial" style={{ fontSize: '1.2rem', marginTop: '-2px', fontWeight: 300 }}>/</span>
                        <span className="fw-medium d-none d-sm-block text-secondary hover-text-primary transition-colors font-mono" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>Abdul Basith</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="d-none d-md-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-4 pe-4 border-end border-subtle">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className={`text-decoration-none font-mono transition-colors ${activeSection === link.id ? 'text-primary fw-medium' : 'text-secondary hover-text-primary'}`}
                                    style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <a href="#resume" className="text-decoration-none">
                                <span className="font-mono text-secondary hover-text-primary transition-colors" style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>
                                    Resume
                                </span>
                            </a>
                            <a href="#contact" className="text-decoration-none">
                                <Button variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                                    Contact
                                </Button>
                            </a>
                            <button 
                                onClick={toggleTheme}
                                className="bg-transparent border-0 text-secondary hover-text-primary p-1 d-flex align-items-center justify-content-center transition-colors rounded-circle"
                                aria-label="Toggle theme"
                                title="Toggle theme"
                                style={{ width: '32px', height: '32px' }}
                            >
                                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="d-md-none d-flex align-items-center gap-2">
                        <button 
                            onClick={toggleTheme}
                            className="bg-transparent border-0 text-secondary p-1 d-flex align-items-center justify-content-center transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button 
                            className="bg-transparent border-0 text-primary p-1"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle navigation"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                        className="d-md-none bg-elevated border-bottom border-subtle overflow-hidden"
                    >
                        <Container className="py-4 d-flex flex-column gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-decoration-none font-mono p-2 ${activeSection === link.id ? 'bg-recessed text-primary fw-medium' : 'text-secondary'}`}
                                    style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="text-secondary opacity-25 my-2" />
                            <a href="#resume" onClick={() => setMobileOpen(false)} className="text-decoration-none font-mono p-2 text-secondary" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>
                                Resume
                            </a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-decoration-none mt-2">
                                <Button variant="primary" className="w-100 justify-content-center">
                                    Contact
                                </Button>
                            </a>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
