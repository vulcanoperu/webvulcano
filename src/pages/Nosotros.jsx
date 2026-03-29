import './Nosotros.css'

function Nosotros() {
    const values = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            ),
            title: 'Orientados a Resultados',
            description: 'Cada proyecto está diseñado para generar impacto medible en tu negocio.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            ),
            title: 'Innovación Constante',
            description: 'Adoptamos las últimas tecnologías para mantener tu negocio a la vanguardia.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: 'Colaboración Transparente',
            description: 'Trabajamos contigo como un equipo, con comunicación clara y honesta.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            ),
            title: 'Agilidad y Eficiencia',
            description: 'Entregamos soluciones de calidad en tiempos optimizados.'
        }
    ]

    return (
        <div className="nosotros page-container">
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container">
                <div className="page-header">
                    <span className="section-tag">Quiénes Somos</span>
                    <h1 className="page-title">Expertos en transformación digital</h1>
                    <p className="page-subtitle">
                        Somos un equipo multidisciplinario apasionado por crear soluciones que impulsan el crecimiento de tu negocio.
                    </p>
                </div>

                {/* Mission */}
                <section className="mission-section">
                    <div className="mission-content glass">
                        <h2>Nuestra Misión</h2>
                        <p>
                            Transformar negocios a través de la tecnología, el diseño y la estrategia,
                            creando experiencias digitales que generan resultados tangibles y sostenibles.
                        </p>
                    </div>
                </section>

                {/* Values */}
                <section className="values-section">
                    <div className="section-header">
                        <span className="section-tag">Nuestros Valores</span>
                        <h2 className="section-title">Lo que nos define</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card glass">
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="experience-section">
                    <div className="experience-content glass">
                        <div className="experience-stat">
                            <span className="stat-big">18+</span>
                            <span className="stat-label">Años de experiencia</span>
                        </div>
                        <div className="experience-stat">
                            <span className="stat-big">200+</span>
                            <span className="stat-label">Proyectos completados</span>
                        </div>
                        <div className="experience-stat">
                            <span className="stat-big">95%</span>
                            <span className="stat-label">Clientes satisfechos</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Nosotros
