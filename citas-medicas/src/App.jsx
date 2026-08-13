import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitasDetalle'
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  return (

    <BrowserRouter>
      <nav className="nav">
        <Link className="nav__link" to="/">Inicio</Link>
        <Link className="nav__link" to="/citas">Ver Citas</Link>
      </nav>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App
