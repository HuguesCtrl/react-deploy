import { useContext } from "react";
import { ColorBody } from "../theme/BackgroundColor";

function Content() {
  const { color, setColorBody } = useContext(ColorBody);
  return (
    <div>
      <button onClick={() => setColorBody()}>
        {!color ? "Mettre le body en crimson" : "Mettre la couleur par défault"}
      </button>
    </div>
  );
}
export default Content;
