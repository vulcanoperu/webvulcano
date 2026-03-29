import { Link } from 'react-router-dom'
import './Proyectos.css'

function Proyectos() {
    const projects = [
        {
            id: 'transformacion-bancaria',
            category: 'Fintech',
            title: 'Transformación Bancaria Digital',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470'
        },
        {
            id: 'ecommerce-alta-escala',
            category: 'E-commerce',
            title: 'Plataforma de Alta Escala',
            image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=1470'
        },
        {
            id: 'sistema-gestion-empresarial',
            category: 'SaaS',
            title: 'Sistema de Gestión Empresarial',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415'
        },
        {
            id: 'app-fidelizacion',
            category: 'Retail',
            title: 'App de Fidelización',
            image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1470'
        },
        {
            id: 'plataforma-elearning',
            category: 'Educación',
            title: 'Plataforma E-learning',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374'
        },
        {
            id: 'telemedicina-integral',
            category: 'Salud',
            title: 'Telemedicina Integral',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1470'
        }
    ]

    return (
        <div className="proyectos page-container">
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container">
                <div className="page-header-projects">
                    <span className="section-tag-small">Portafolio</span>
                    <h1 className="projects-main-title">Trabajos que desafían lo convencional.</h1>
                </div>

                <div className="projects-grid-minimal">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={`/proyectos/${project.id}`}
                            className="project-item-ultra"
                        >
                            <div className="project-figure">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-mask">
                                    <span>Ver Caso de Estudio →</span>
                                </div>
                            </div>
                            <div className="project-caption">
                                <span className="p-cat">{project.category}</span>
                                <h3 className="p-title">{project.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Proyectos
