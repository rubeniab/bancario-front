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
    display: "flex",
    justifyContent: "center", // Centra los botones
    gap: "10px", // Espacio entre botones
    flexWrap: "wrap", // Para que en pantallas pequeñas se acomoden uno debajo del otro
    marginTop: "20px",
  },
  boton: {
    padding: "8px 16px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#5fa9d6",
    color: "#fff",
    minWidth: "140px", // Menor ancho base
    flex: "1 1 auto", // Permite que crezcan o se achiquen
    maxWidth: "200px", // Evita que sean demasiado anchos
  },
  botonHover: {
    backgroundColor: "#4f95c3",
  },
};

export default styles;
