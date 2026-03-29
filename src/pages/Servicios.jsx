import { Link } from 'react-router-dom'
import './Servicios.css'

function Servicios() {
    const services = [
        {
            number: '01',
            title: 'Diseño y Desarrollo Web',
            description: 'Desarrollamos páginas web a medida, intuitivas y emotivas. Nos enfocamos en construir una experiencia de usuario memorable que convierta visitantes en clientes.',
            features: ['Sitios Corporativos', 'Experiencia de Usuario (UI/UX)', 'Webs Administrables', 'Landing Pages']
        },
        {
            number: '02',
            title: 'Tiendas Virtuales (E-commerce)',
            description: 'Creamos e-commerce robustos y escalables. Integramos tecnologías esenciales para vender online con seguridad y eficiencia, adaptándonos al crecimiento de tu negocio.',
            features: ['Carritos de Compra', 'Pasarelas de Pagos', 'Catálogos Inteligentes', 'Gestión de Pedidos']
        },
        {
            number: '03',
            title: 'Branding e Identidad',
            description: 'Construimos identidades de marca poderosas. Desde el naming y logotipo hasta el desarrollo completo de la imagen corporativa para diferenciarte en el mercado.',
            features: ['Diseño de Logotipos', 'Manual de Marca', 'Naming', 'Identidad Visual']
        },
        {
            number: '04',
            title: 'Social Media Management',
            description: 'Gestionamos tus redes sociales con estrategia y creatividad. Creamos contenido relevante que conecta con tu audiencia y construimos comunidades leales.',
            features: ['Estrategia de Contenidos', 'Gestión de Comunidad', 'Diseño Gráfico', 'Reportes de Rendimiento']
        },
        {
            number: '05',
            title: 'Posicionamiento SEO',
            description: 'Posicionamos tu marca en los primeros lugares de Google de forma orgánica. Implementamos estrategias SEO on-page y off-page para aumentar tu visibilidad y tráfico.',
            features: ['Auditoría SEO', 'SEO On-page / Off-page', 'Optimización Técnica', 'Análisis de Palabras Clave']
        },
        {
            number: '06',
            title: 'Publicidad Digital (SEM)',
            description: 'Maximizamos tu inversión con campañas de publicidad pagada en Google y Redes Sociales. Segmentación precisa para atraer leads calificados de inmediato.',
            features: ['Google Ads', 'Meta Ads', 'Remarketing', 'Optimización de ROI']
        },
        {
            number: '07',
            title: 'Producción Audiovisual',
            description: 'Producimos videos corporativos y contenido animado de alto impacto. Contamos historias visuales que captan la atención y refuerzan el mensaje de tu marca.',
            features: ['Videos Corporativos', 'Animación 2D/3D', 'Fotografía Profesional', 'Edición y Post-producción']
        },
        {
            number: '08',
            title: 'Desarrollo de Intranets',
            description: 'Desarrollamos plataformas internas a medida para optimizar la gestión y comunicación de tu empresa. Herramientas colaborativas seguras y eficientes.',
            features: ['Plataformas Colaborativas', 'Gestión Documental', 'Automatización de Flujos', 'Seguridad de Datos']
        }
    ]

    return (
        <div className="servicios page-container">
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container">
                <div className="page-header">
                    <span className="section-tag">Nuestra Experticia</span>
                    <h1 className="page-title">Servicios de alto nivel</h1>
                    <p className="page-subtitle">
                        Soluciones integrales diseñadas para impulsar tu negocio al siguiente nivel.
                    </p>
                </div>

                <div className="services-list">
                    {services.map((service, index) => (
                        <div key={index} className="service-item">
                            <span className="service-number">{service.number}</span>
                            <div className="service-content">
                                <h2>{service.title}</h2>
                                <p className="service-description">{service.description}</p>
                            </div>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="cta-section">
                    <div className="cta-content glass">
                        <h2>¿Necesitas una solución personalizada?</h2>
                        <p>Hablemos sobre tu proyecto y cómo podemos ayudarte.</p>
                        <Link to="/contacto" className="btn-glow">Contáctanos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios
