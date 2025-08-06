// ResponsiveStyles.js
import { useMediaQuery } from 'react-responsive';

const useResponsiveStyles = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return {
    contenedor: {
      maxWidth: isMobile ? "90%" : isTablet ? "600px" : "700px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f0f0",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      borderRadius: "8px",
      padding: "20px",
    },
    fila: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
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
};

export default useResponsiveStyles;
