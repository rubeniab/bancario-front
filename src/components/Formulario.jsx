import "./Formulario.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


function Formulario() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    CONG: "",
    REGION: "",
    MANZ: "",
    LOTE: "",
    NIVEL: "",
    DEPTO: "",
    TIPO_PRED: "",
  });

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://bancario-backend-production.up.railway.app/api/bancos/filtros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error en la consulta");

      const data = await res.json();

      // aquí navegas a la ruta /siguiente
      navigate("/siguiente", { state: { filtros: formData, data} });
      
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Ops! Ocurrió un problema.",
        text: "Verifica que hayas ingresado bien los campos. Inténtalo de nuevo.",
      })
    }
  };

   const [isAyudaOpen, setIsAyudaOpen] = useState(false);

  const etiquetas = {
    CONG: "Congregación",
    REGION: "Región",
    MANZ: "Manzana",
    LOTE: "Lote",
    NIVEL: "Nivel",
    DEPTO: "Depto.",
    TIPO_PRED: "T. Predio",
  };

  return (
    <div className="container">
<h3>
  Consulta de Impuesto Predial 2025
  <span className="ayuda-link" onClick={() => setIsAyudaOpen(true)}>
    Ayuda
  </span>
</h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key, index) => (
          <div key={index}>
            <label>{etiquetas[key]}</label>
            <input
              type="number"
              value={formData[key]}
              onChange={(e) => handleChange(e, key)}
            />
          </div>
        ))}
        <button type="submit">Consultar</button>
      </form>
{isAyudaOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={() => setIsAyudaOpen(false)}>X</button>
      <img src="/RECIBO2.jpg" alt="Ayuda" className="modal-image" />
    </div>
  </div>
)}
    </div>
  );
}

export default Formulario;
