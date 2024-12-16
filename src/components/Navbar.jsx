import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false); // Close the hamburger menu on larger screens
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="nav-bar">
            <div className="name">Santosh Hrushith</div>
            <div className="hamburger" onClick={toggleMenu}>☰</div>
            <div className={`all ${menuOpen ? "show" : ""}`}>
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;