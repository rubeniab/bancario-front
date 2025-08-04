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
      const res = await fetch("http://localhost:3000/api/bancos/filtros", {
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

  return (
    <div className="container">
      <h3>
        Consulta de Impuesto Predial 2025
        <a href="#" style={{ float: "right", fontSize: "0.9rem" }}>
          Ayuda
        </a>
      </h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key, index) => (
          <div key={index}>
            <label>{key}</label>
            <input
              type="number"
              value={formData[key]}
              onChange={(e) => handleChange(e, key)}
            />
          </div>
        ))}
        <button type="submit">Consultar</button>
      </form>
    </div>
  );
}

export default Formulario;
