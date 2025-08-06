import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Siguiente.styles";

function Siguiente() {
  const location = useLocation();
  const data = location.state?.data;
  const filtros = location.state?.filtros;
  const navigate = useNavigate();

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

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reporte.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

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
          <div style={styles.valor}>{data.TIPO_PRED}</div>
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


      <div style={{ ...styles.botones, gap: '12px', flexWrap: 'wrap' }}>
  <button
    style={styles.boton}
    onClick={handleGenerarPDF}
  >
    Generar línea de captura
  </button>

  <button
    style={styles.boton}
    onClick={() => navigate("/")}
  >
    Regresar
  </button>
</div>
    </div>
  );
}

export default Siguiente;
