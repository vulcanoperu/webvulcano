import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const services = [
        'Diseño Web', 'Tiendas Virtuales', 'Branding', 'Social Media',
        'Posicionamiento SEO', 'Publicidad Digital', 'Producción Audiovisual', 'Intranets'
    ]

    return (
        <footer className="footer-clean">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-col brand">
                        <Link to="/" className="footer-logo">VULCANO.</Link>
                        <p className="footer-tagline">
                            Estrategia, diseño y tecnología para marcas que buscan el siguiente nivel.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Agencia</h4>
                        <nav className="footer-nav">
                            <Link to="/nosotros">Nosotros</Link>
                            <Link to="/servicios">Servicios</Link>
                            <Link to="/proyectos">Proyectos</Link>
                            <Link to="/contacto">Contacto</Link>
                        </nav>
                    </div>

                    <div className="footer-col">
                        <h4>Servicios</h4>
                        <div className="footer-services-list">
                            {services.map((service, index) => (
                                <Link key={index} to="/servicios">{service}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <div className="footer-contact">
                            <a href="mailto:hola@vulcano.com" className="email">hola@vulcano.com</a>
                            <div className="footer-social-simple">
                                <a href="#" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2026 VULCANO AGENCY.</p>
                        <p>Todos los derechos reservados. Lima, Perú.</p>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
