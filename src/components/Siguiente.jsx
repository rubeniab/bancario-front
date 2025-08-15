import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Siguiente.styles";

function tipoPredioTexto(tipo) {
  switch (Number(tipo)) {
    case 1: return '1 Urbano';
    case 2: return '2 Suburbano';
    case 3: return '3 Rural';
    default: return 'Desconocido';
  }
}

function Siguiente() {
  const location = useLocation();
  const data = location.state?.data;
  const filtros = location.state?.filtros;
  const navigate = useNavigate();

  const [pdfUrl, setPdfUrl] = useState(null); // Para mostrar PDF

  if (!data) return <p>No hay datos para mostrar.</p>;

 const handleGenerarPDF = async () => {
    try {
      const res = await fetch("https://bancario-backend-production.up.railway.app/api/bancos/reporte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filtros),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al generar PDF");
      }

      const blob = await res.blob(); // Obtener el blob del PDF
      const url = window.URL.createObjectURL(blob);
      //const a = document.createElement("a");
      //a.href = url;
      //a.download = "reporte.pdf";
      // Abrir PDF en nueva pestaña
     setPdfUrl(url);

    // Opcional: liberar el URL después de un tiempo
    setTimeout(() => window.URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error("Error al generar PDF:", error);
    alert(error.message);
    }
  };

return (
    <div style={styles.contenedor}>
      <div style={styles.fila}>
        <div style={styles.campo}>
          <label style={styles.label}>Cuenta</label>
          <div style={styles.valor}>{data.REFERENCIA}</div>
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Tipo Predio</label>
          <div style={styles.valor}>{tipoPredioTexto(data.TIPO_PRED)}</div>
        </div>
      </div>

      <div style={styles.campo}>
        <label style={styles.label}>Propietario</label>
        <div style={styles.valor}>{data.NOMBRE}</div>
      </div>

      <div style={styles.campo}>
        <label style={styles.label}>Ubicación del Predio</label>
        <div style={styles.valor}>{data.CALLE}</div>
      </div>

      <div style={styles.campo}>
        <label style={styles.label}>Colonia</label>
        <div style={styles.valor}>{data.COLONIA}</div>
      </div>

      <div style={styles.valor}>
        {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(data.IMPORTE)}
      </div>


      <div style={styles.botones}>
        <button
          style={styles.boton}
          onClick={() => navigate("/")}
        >
          Regresar
        </button>

        <button
          style={styles.boton}
           onClick={handleGenerarPDF}
        >
          Generar línea de captura
        </button>

       
      </div>

       {pdfUrl && (
        <div style={{ marginTop: 20 }}>
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc" }}
            title="PDF"
          />
        </div>
      )}
    </div>
  );
}

export default Siguiente;
