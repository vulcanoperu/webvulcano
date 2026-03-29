import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    VULCANO.
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    <li><Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link></li>
                    <li><Link to="/servicios" className={location.pathname === '/servicios' ? 'active' : ''}>Servicios</Link></li>
                    <li><Link to="/proyectos" className={location.pathname === '/proyectos' ? 'active' : ''}>Proyectos</Link></li>
                    <li><Link to="/contacto" className="nav-contact-btn">Contacto</Link></li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className={`menu-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Mobile Fullscreen Menu */}
                <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/servicios">Servicios</Link>
                        <Link to="/proyectos">Proyectos</Link>
                        <Link to="/contacto">Contacto</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
