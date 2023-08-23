import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

function ToggleThemeButton() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="btn-toggle" onClick={() => toggleTheme()}>
      {darkMode ? "Go Dark !" : "Go Light !"}
    </button>
  );
}
export default ToggleThemeButton;
