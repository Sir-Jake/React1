import { useState } from "react";
function SearchSection({page}) {
  const [value, setValue] = useState("");

  if (page !== "find") {
    return null;
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <div className="flex items-center">
          <input className="px-2 py-0.5 border" onChange={handleChange} />
          <button className="px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active: opacity-50">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
