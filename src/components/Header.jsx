import SplitText from "./SplitText";
import "./Header.css"; // Asegúrate de que la ruta sea correcta

function Header() {
  const handleAnimationComplete = () => {
    console.log("Animación completa");
  };

  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_example.png/200px-Logo_example.png"
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
