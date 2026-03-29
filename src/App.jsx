import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import Interactive3D from './components/Interactive3D'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import ProyectoDetalle from './pages/ProyectoDetalle'
import Contacto from './pages/Contacto'
import './index.css' // Ensure index.css is loaded

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <ScrollReveal />
                <Interactive3D />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
