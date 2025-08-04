import SplitText from "./SplitText";

function Header() {
  const handleAnimationComplete = () => {
    console.log("Animación completa");
  };

  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_example.png/200px-Logo_example.png"
        alt="Logo"
      />

      <SplitText
        text="La Antigua"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <h2>Cerca de ti</h2>
    </header>
  );
}

export default Header;
