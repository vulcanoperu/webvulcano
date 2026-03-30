import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const [ctaText, setCtaText] = useState('');
    const [ctaIsDeleting, setCtaIsDeleting] = useState(false);
    const [ctaLoopNum, setCtaLoopNum] = useState(0);
    const [ctaTypingSpeed, setCtaTypingSpeed] = useState(150);

    const phrases = [
        "para vender más.",
        "para escalar tu negocio.",
        "para destacar online.",
        "para impactar al mundo."
    ];

    useEffect(() => {
        let ticker = setInterval(() => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(40); // Faster delete
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(100); // Normal typing
            }

            if (!isDeleting && text === fullText) {
                setIsDeleting(true);
                setTypingSpeed(2500); // Pause at end of word
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // Pause before next word
            }
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const ctaPhrases = [
        "tu negocio?",
        "tus ventas?",
        "tu marca?",
        "tu futuro?"
    ];

    useEffect(() => {
        let ticker = setInterval(() => {
            const i = ctaLoopNum % ctaPhrases.length;
            const fullText = ctaPhrases[i];

            if (ctaIsDeleting) {
                setCtaText(fullText.substring(0, ctaText.length - 1));
                setCtaTypingSpeed(40);
            } else {
                setCtaText(fullText.substring(0, ctaText.length + 1));
                setCtaTypingSpeed(80);
            }

            if (!ctaIsDeleting && ctaText === fullText) {
                setCtaIsDeleting(true);
                setCtaTypingSpeed(3000);
            } else if (ctaIsDeleting && ctaText === '') {
                setCtaIsDeleting(false);
                setCtaLoopNum(ctaLoopNum + 1);
                setCtaTypingSpeed(500);
            }
        }, ctaTypingSpeed);

        return () => clearInterval(ticker);
    }, [ctaText, ctaIsDeleting, ctaLoopNum, ctaTypingSpeed]);

    const services = [
        {
            number: '01',
            title: 'Diseño Web',
            desc: 'Desarrollamos páginas web a medida, intuitivas y emotivas.'
        },
        {
            number: '02',
            title: 'E-commerce',
            desc: 'Creamos e-commerce robustos y escalables para vender online con seguridad.'
        },
        {
            number: '03',
            title: 'Branding e Identidad',
            desc: 'Construimos identidades de marca poderosas para diferenciarte en el mercado.'
        },
        {
            number: '04',
            title: 'Social Media',
            desc: 'Gestionamos redes sociales con estrategia que conecta con tu audiencia.'
        },
        {
            number: '05',
            title: 'Posicionamiento SEO',
            desc: 'Posicionamos tu marca en los primeros lugares de Google de forma orgánica.'
        },
        {
            number: '06',
            title: 'Publicidad Digital',
            desc: 'Maximizamos tu inversión con campañas de publicidad pagada precisa.'
        },
        {
            number: '07',
            title: 'Audiovisual',
            desc: 'Producimos videos corporativos y contenido animado de alto impacto.'
        },
        {
            number: '08',
            title: 'Intranets',
            desc: 'Sistemas a medida para optimizar los procesos de tu empresa.'
        }
    ];

    const duplicatedServices = [...services, ...services];

    return (
        <div className="home">
            {/* Mesh Background */}
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="badge">Agencia Digital</span>
                    <h1 className="hero-title">
                        <span className="hero-title-static">Estrategia, diseño y tecnología</span>
                        <div className="typewriter-container">
                            <span className="gradient-text typewriter">{text || '\u00A0'}</span>
                            <span className="cursor">|</span>
                        </div>
                    </h1>
                    <p className="hero-subtitle">
                        Analizamos tu negocio, detectamos oportunidades y construimos un sistema orientado a ventas.
                    </p>
                    <div className="hero-actions">
                        <Link to="/servicios" className="btn-glow">Descubre nuestros servicios</Link>
                        <Link to="/proyectos" className="btn-secondary">Ver proyectos</Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                    <span>Desliza</span>
                </div>
            </section>

            {/* Services Preview */}
            <section className="services-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Lo que hacemos</span>
                        <h2 className="section-title">Soluciones integrales</h2>
                    </div>
                    <div className="slider-container">
                        <div className="slider-track">
                            {duplicatedServices.map((service, index) => (
                                <div className="slide" key={index}>
                                    <Link to="/servicios" className="service-card glass">
                                        <span className="service-number">{service.number}</span>
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cta-center">
                        <Link to="/servicios" className="btn-glow">Ver todos los servicios</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2 className="cta-title">
                            <span>¿Listo para transformar</span>
                            <div className="typewriter-container">
                                <span className="gradient-text typewriter">{ctaText || '\u00A0'}</span>
                                <span className="cursor">|</span>
                            </div>
                        </h2>
                        <p>Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos.</p>
                        <Link to="/contacto" className="btn-primary">Agenda una consulta</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
