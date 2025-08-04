const styles = {
  contenedor: {
    maxWidth: "500px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0", // Cambia a cualquier color que quieras
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)", // Sombra borrosa con desplazamiento vertical y desenfoque
    borderRadius: "8px", // Opcional: para bordes redondeados
    padding: "20px" // Opcional: para que no quede tan pegado el contenido a los bordes
},
  fila: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  campo: {
    marginBottom: "10px",
    flex: 1,
  },
  label: {
    display: "block",
    marginBottom: "3px",
    fontWeight: "bold",
  },
  valor: {
    border: "1px solid #ccc",
    padding: "5px 10px",
    background: "#eee",
    minHeight: "30px",
  },
  botones: {
    marginTop: "20px",
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#4a89dc",
    color: "#fff",
    padding: "5px 15px",
    border: "none",
    margin: "0 5px",
    cursor: "pointer",
  },
  botonHover: {
    backgroundColor: "#357ab8",
  },
};

export default styles;
