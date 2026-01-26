import { useState } from "react";
import ColorList from "./ColorList";
import NewColor from "./NewColor";

function Colors() {
  const [colors, setColors] = useState(["turquoise", "blue", "red"]);
  const [activeColor, setActiveColor] = useState("");
  console.log("Active Color", activeColor);
  return (
    <div style={{ backgroundColor: activeColor }} className="p-4">
      <ColorList colors={colors} setColors={setColors}/>
      <NewColor colors={colors} setActiveColor={setActiveColor} />
    </div>
  );
}

export default Colors;
