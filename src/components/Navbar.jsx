import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { Navbar as BSNavbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <BSNavbar
            expand="md"
            fixed="top"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            className={`transition-all duration-300 ${scrolled ? 'bg-dark-900 shadow-sm py-2' : 'bg-transparent py-4'}`}
            variant="dark"
        >
            <Container>
                <BSNavbar.Brand
                    as={Link}
                    to="/"
                    onClick={() => setExpanded(false)}
                    className="d-flex align-items-center gap-2 font-weight-bold text-white hover-neon"
                >
                    <Terminal className="text-neon-blue" size={24} />
                    <span>AB<span className="text-neon-blue">.dev</span></span>
                </BSNavbar.Brand>

                <BSNavbar.Toggle aria-controls="offcanvasNavbar-expand-md" className="border-0 shadow-none" />

                <BSNavbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="end"
                    restoreFocus={false}
                    show={expanded}
                    onHide={() => setExpanded(false)}
                    className="bg-dark-800 text-white"
                >
                    <Offcanvas.Header closeButton closeVariant="white">
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                            {navLinks.map((link) => (
                                <Nav.Link
                                    key={link.name}
                                    as={Link}
                                    to={link.path}
                                    active={location.pathname === link.path}
                                    onClick={() => setExpanded(false)}
                                    className={`text-light nav-link-custom ${location.pathname === link.path ? 'text-neon-blue fw-bold' : ''}`}
                                >
                                    {link.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Offcanvas.Body>
                </BSNavbar.Offcanvas>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
