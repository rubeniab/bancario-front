import SplitText from "./SplitText";
import "./Header.css"; // Asegúrate de que la ruta sea correcta

function Header() {
  const handleAnimationComplete = () => {
    console.log("Animación completa");
  };

  return (
    <header>
      <img
        src="/Logo.png" // Asegúrate de que la ruta sea correcta
        alt="Logo"
        className="logo"
      />

      <SplitText
        text="La Antigua"
        onLetterAnimationComplete={handleAnimationComplete}
        className="titulo"
      />

      <h2>Cerca de ti</h2>
    </header>
  );
}

export default Header;
