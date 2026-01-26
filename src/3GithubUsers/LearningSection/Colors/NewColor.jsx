import { useState } from "react";

function NewColor({ colors, setColors }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const addColor = () => {
    console.log("Add color btwn click");
    let newColors = [...colors, value];
    console.log("New Colors", newColors);
    newColors.push(value);

    setColors(newColors);
    setValue("");
  };

  return (
    <div className="flex">
      <input value={value} className="border" onChange={handleChange} />
      <button
        onClick={addColor}
        className="py-0.5 px-2 rounded-md bg-blue-500 text-white active:opacity-50 shadow-md"
      >
        Add Color
      </button>
    </div>
  );
}

export default NewColor;
