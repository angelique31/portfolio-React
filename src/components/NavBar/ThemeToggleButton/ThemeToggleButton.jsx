import { useContext } from "react";
import PortfolioContext from "../../../context/portfolioContext";

// function ThemeToggleButton() {
//   const { toggleTheme } = useContext(PortfolioContext);

//   return <button onClick={toggleTheme}>Basculer le mode</button>;
// }

// export default ThemeToggleButton;

function ThemeToggleButton() {
  const { toggleTheme, currentTheme } = useContext(PortfolioContext);

  return (
    <button onClick={toggleTheme}>
      {currentTheme === "darkTheme"
        ? "Passer au mode clair"
        : "Passer au mode sombre"}
    </button>
  );
}
export default ThemeToggleButton;
