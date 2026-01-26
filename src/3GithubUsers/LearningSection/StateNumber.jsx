import {useState} from "react";

function StateNumber() {

    console.log("State Number rendered");
    const state = useState(0); //call it returns an array
    console.log("State is", state);
    //value, functionToUpdate
    const n =state[0];
    const updateN =state[1];

    console.log("State is", state);

  const increment = () => {
    console.log("Increment pressed");
    let newV = n + 1;
    updateN(newV);
  };
  const decrement = () => {
    console.log("Decrement pressed");
    let newV = n - 1;
    updateN(newV);
  };
  return (
    <div className="p-4">
      <button
        className=" m-2 rounded-full shadow-md bg-red-600 text-white font-bold active: opacity-50 cursor-pointer"
        style={{
          width: "20px",
          height: "20px",
        }}
        onClick={decrement}
      >
         -
      </button>
      <span>1</span>
      <button
        className=" m-2 rounded-full shadow-md bg-blue-700 text-white font-bold active: opacity-50 cursor-pointer"
        style={{
          width: "20px",
          height: "20px",
        }}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
export default StateNumber;
