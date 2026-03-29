import { useState } from 'react'
import './Contacto.css'

function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('¡Gracias! Te contactaremos pronto.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    return (
        <div className="contacto page-container">
            <div className="mesh-container">
                <div className="mesh-gradient"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="container contact-split-layout">
                {/* Left Side: Info & Statement */}
                <div className="contact-column-info">
                    <div className="sticky-info">
                        <span className="contact-badge">CONTACTO</span>
                        <h1 className="contact-headline">Hablemos de tu próximo gran paso.</h1>

                        <div className="contact-methods-ultra">
                            <div className="method-item">
                                <span>EMAIL</span>
                                <a href="mailto:hola@vulcano.com">hola@vulcano.com</a>
                            </div>
                            <div className="method-item">
                                <span>TELÉFONO</span>
                                <a href="tel:+51999999999">+51 999 999 999</a>
                            </div>
                            <div className="method-item">
                                <span>OFICINA</span>
                                <p>San Isidro, Lima, Perú</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-column-form">
                    <form onSubmit={handleSubmit} className="form-ultra">
                        <div className="form-field">
                            <label>MI NOMBRE ES</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Escribe tu nombre aquí"
                            />
                        </div>

                        <div className="form-field">
                            <label>PUEDEN ESCRIBIRME A</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-field">
                            <label>O LLAMARME AL</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+51 --- --- ---"
                            />
                        </div>

                        <div className="form-field">
                            <label>TENGO ESTO EN MENTE</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="3"
                                placeholder="Cuéntanos brevemente sobre tu proyecto"
                            ></textarea>
                        </div>

                        <div className="form-submit-container">
                            <button type="submit" className="btn-ultra-submit">
                                ENVIAR MENSAJE
                                <span className="btn-line"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto
