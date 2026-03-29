import { useParams, Link } from 'react-router-dom'
import './ProyectoDetalle.css'

function ProyectoDetalle() {
    const { id } = useParams()

    const projectsData = {
        'transformacion-bancaria': {
            category: 'Fintech',
            title: 'Transformación Bancaria Digital',
            client: 'Banco Nacional S.A.',
            year: '2024',
            duration: '12 meses',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            overview: 'Rediseñamos completamente la infraestructura tecnológica de uno de los bancos más grandes de Latinoamérica, migrando de sistemas legacy a una arquitectura moderna basada en microservicios.',
            challenge: 'El banco enfrentaba limitaciones severas con su infraestructura de 20 años de antigüedad. Los tiempos de respuesta eran lentos, la escalabilidad limitada y la experiencia del usuario deficiente. Necesitaban una transformación completa sin interrumpir las operaciones diarias.',
            solution: 'Implementamos una arquitectura de microservicios en AWS, con APIs RESTful, bases de datos distribuidas y un frontend moderno en React. Utilizamos metodología ágil con entregas incrementales para minimizar riesgos.',
            results: [
                { metric: '300%', label: 'Aumento en transacciones digitales' },
                { metric: '45%', label: 'Reducción de costos operativos' },
                { metric: '2.5s', label: 'Tiempo de respuesta promedio' },
                { metric: '4.8/5', label: 'Satisfacción del cliente' }
            ],
            technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
            images: [
                'https://images.unsplash.com/photo-1551288049-bb1c003f2c8d?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1504868584819-f8eec0421735?auto=format&fit=crop&q=80&w=1476'
            ],
            testimonial: {
                quote: 'VULCANO transformó completamente nuestra operación digital. El equipo demostró un profesionalismo excepcional y entregó resultados que superaron nuestras expectativas.',
                author: 'Carlos Mendoza',
                position: 'CTO, Banco Nacional'
            }
        },
        'ecommerce-alta-escala': {
            category: 'E-commerce',
            title: 'Plataforma de Alta Escala',
            client: 'MegaRetail Corp.',
            year: '2023',
            duration: '8 meses',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            overview: 'Desarrollamos una plataforma e-commerce de alta disponibilidad capaz de manejar más de 1 millón de transacciones diarias durante eventos de alto tráfico como Black Friday.',
            challenge: 'La plataforma anterior colapsaba durante picos de tráfico, generando pérdidas millonarias. Necesitaban una solución escalable, rápida y confiable que pudiera crecer con el negocio.',
            solution: 'Arquitectura de microservicios con balanceo de carga automático, CDN global, caché distribuido y procesamiento asíncrono de pedidos. Implementamos pruebas de carga exhaustivas y monitoreo en tiempo real.',
            results: [
                { metric: '1M+', label: 'Transacciones diarias' },
                { metric: '99.9%', label: 'Uptime garantizado' },
                { metric: '60%', label: 'Aumento en conversión' },
                { metric: '1.2s', label: 'Tiempo de carga promedio' }
            ],
            technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Redis', 'Stripe', 'Vercel', 'Cloudflare'],
            images: [
                'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1523474253046-29a2fd279267?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1470'
            ],
            testimonial: {
                quote: 'La plataforma no solo soportó nuestro Black Friday más grande, sino que mejoró significativamente la experiencia de compra. Los resultados hablan por sí mismos.',
                author: 'Ana Rodríguez',
                position: 'CEO, MegaRetail'
            }
        },
        'sistema-gestion-empresarial': {
            category: 'SaaS',
            title: 'Sistema de Gestión Empresarial',
            client: 'HRTech Solutions',
            year: '2024',
            duration: '10 meses',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            overview: 'Plataforma SaaS integral para gestión de recursos humanos con inteligencia artificial para automatización de procesos y análisis predictivo.',
            challenge: 'Las empresas gastaban horas en tareas administrativas de RRHH. Necesitaban una solución que automatizara procesos repetitivos y proporcionara insights valiosos sobre su talento.',
            solution: 'Desarrollamos una plataforma modular con IA integrada para screening de CVs, análisis de sentimiento en evaluaciones, predicción de rotación y recomendaciones personalizadas. Dashboard intuitivo con visualizaciones en tiempo real.',
            results: [
                { metric: '500+', label: 'Empresas activas' },
                { metric: '50k', label: 'Usuarios activos' },
                { metric: '40%', label: 'Ahorro de tiempo' },
                { metric: '92%', label: 'Tasa de retención' }
            ],
            technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'AWS', 'OpenAI'],
            images: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1415',
                'https://images.unsplash.com/photo-1551288049-bb1c003f2c8d?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1470'
            ],
            testimonial: {
                quote: 'La IA ha revolucionado nuestra forma de trabajar. Lo que antes tomaba días, ahora toma minutos. Es increíble.',
                author: 'Roberto Silva',
                position: 'Director de Producto, HRTech'
            }
        },
        'app-fidelizacion': {
            category: 'Retail',
            title: 'App de Fidelización',
            client: 'SuperMarket Plus',
            year: '2023',
            duration: '6 meses',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            overview: 'Aplicación móvil de fidelización con gamificación, ofertas personalizadas y programa de puntos que incrementó la retención de clientes en 85%.',
            challenge: 'La cadena retail enfrentaba alta rotación de clientes y baja participación en su programa de lealtad tradicional. Necesitaban una solución moderna y atractiva.',
            solution: 'App nativa con sistema de puntos gamificado, ofertas personalizadas basadas en IA, notificaciones push inteligentes y experiencia de usuario excepcional. Integración completa con sistemas POS.',
            results: [
                { metric: '85%', label: 'Aumento en retención' },
                { metric: '2M', label: 'Descargas' },
                { metric: '4.7/5', label: 'Rating en stores' },
                { metric: '70%', label: 'Usuarios activos mensuales' }
            ],
            technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'OneSignal', 'Stripe'],
            images: [
                'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1374',
                'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470'
            ],
            testimonial: {
                quote: 'Nuestros clientes aman la app. La participación en el programa de lealtad se disparó y las ventas recurrentes aumentaron significativamente.',
                author: 'María González',
                position: 'Gerente de Marketing, SuperMarket Plus'
            }
        },
        'plataforma-elearning': {
            category: 'Educación',
            title: 'Plataforma E-learning',
            client: 'EduTech Academy',
            year: '2024',
            duration: '9 meses',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            overview: 'Sistema de aprendizaje adaptativo con gamificación, rutas personalizadas y análisis de progreso en tiempo real para institución educativa.',
            challenge: 'Los estudiantes tenían diferentes ritmos de aprendizaje y la plataforma tradicional no se adaptaba a necesidades individuales, resultando en bajas tasas de completación.',
            solution: 'Plataforma con IA que adapta el contenido según el progreso del estudiante, sistema de gamificación con logros y rankings, videoconferencias integradas y análisis predictivo de rendimiento.',
            results: [
                { metric: '100k', label: 'Estudiantes activos' },
                { metric: '95%', label: 'Tasa de completación' },
                { metric: '4.9/5', label: 'Satisfacción' },
                { metric: '35%', label: 'Mejora en calificaciones' }
            ],
            technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'WebRTC', 'AWS', 'TensorFlow'],
            images: [
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1374',
                'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1523240715639-9942f1422791?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470'
            ],
            testimonial: {
                quote: 'La plataforma ha transformado la forma en que enseñamos. Los estudiantes están más comprometidos y los resultados académicos han mejorado notablemente.',
                author: 'Dr. Luis Martínez',
                position: 'Director Académico, EduTech Academy'
            }
        },
        'telemedicina-integral': {
            category: 'Salud',
            title: 'Telemedicina Integral',
            client: 'HealthCare Digital',
            year: '2023',
            duration: '11 meses',
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            overview: 'Plataforma completa de telemedicina con videoconsultas, historial clínico electrónico, recetas digitales y cumplimiento total de normativas de salud.',
            challenge: 'La pandemia aceleró la necesidad de consultas remotas, pero las soluciones existentes no cumplían con estándares de seguridad médica ni ofrecían una experiencia integrada.',
            solution: 'Sistema end-to-end con encriptación de grado médico, integración con sistemas hospitalarios, videoconsultas HD, firma digital de recetas y cumplimiento HIPAA. Dashboard para médicos y pacientes.',
            results: [
                { metric: '50k', label: 'Consultas mensuales' },
                { metric: '98%', label: 'Satisfacción pacientes' },
                { metric: 'ISO 27001', label: 'Certificación de seguridad' },
                { metric: '24/7', label: 'Disponibilidad' }
            ],
            technologies: ['React', 'Node.js', 'WebRTC', 'PostgreSQL', 'AWS', 'Twilio', 'Blockchain'],
            images: [
                'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1538108149393-fdfd818d00e3?auto=format&fit=crop&q=80&w=1470',
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1470'
            ],
            testimonial: {
                quote: 'La plataforma nos permitió expandir nuestros servicios a zonas rurales. La calidad de las videoconsultas y la seguridad de los datos son excepcionales.',
                author: 'Dra. Patricia Ramos',
                position: 'Directora Médica, HealthCare Digital'
            }
        }
    }

    const project = projectsData[id]

    if (!project) {
        return (
            <div className="page-container">
                <div className="container">
                    <h1>Proyecto no encontrado</h1>
                    <Link to="/proyectos" className="btn-primary">Volver a proyectos</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="proyecto-detalle page-container">
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/proyectos">Proyectos</Link>
                    <span> / </span>
                    <span>{project.title}</span>
                </div>

                {/* Hero */}
                <div className="project-hero" style={{ background: project.gradient }}>
                    <span className="project-category-badge">{project.category}</span>
                    <h1>{project.title}</h1>
                    <div className="project-meta">
                        <span>Cliente: {project.client}</span>
                        <span>•</span>
                        <span>Año: {project.year}</span>
                        <span>•</span>
                        <span>Duración: {project.duration}</span>
                    </div>
                </div>

                {/* Overview */}
                <section className="project-section">
                    <h2>Resumen del Proyecto</h2>
                    <p className="large-text">{project.overview}</p>
                </section>

                {/* Challenge */}
                <section className="project-section glass">
                    <h2>El Desafío</h2>
                    <p>{project.challenge}</p>
                </section>

                {/* Solution */}
                <section className="project-section glass">
                    <h2>Nuestra Solución</h2>
                    <p>{project.solution}</p>
                </section>

                {/* Gallery */}
                <section className="project-section">
                    <h2>Galería del Proyecto</h2>
                    <div className="project-gallery">
                        {project.images.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`${project.title} - ${index}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Results */}
                <section className="project-section">
                    <h2>Resultados</h2>
                    <div className="results-grid">
                        {project.results.map((result, index) => (
                            <div key={index} className="result-card glass">
                                <span className="result-metric">{result.metric}</span>
                                <span className="result-label">{result.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technologies */}
                <section className="project-section">
                    <h2>Tecnologías Utilizadas</h2>
                    <div className="tech-stack">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-badge glass">{tech}</span>
                        ))}
                    </div>
                </section>

                {/* Testimonial */}
                <section className="project-section">
                    <div className="testimonial glass">
                        <p className="quote">"{project.testimonial.quote}"</p>
                        <div className="author">
                            <strong>{project.testimonial.author}</strong>
                            <span>{project.testimonial.position}</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="project-cta">
                    <h2>¿Tienes un proyecto similar?</h2>
                    <p>Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos.</p>
                    <Link to="/contacto" className="btn-glow">Contáctanos</Link>
                </section>
            </div>
        </div>
    )
}

export default ProyectoDetalle
