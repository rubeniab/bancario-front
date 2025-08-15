import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Siguiente from './components/Siguiente';

function ConsultarPredial() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/siguiente" element={<Siguiente />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default ConsultarPredial;
