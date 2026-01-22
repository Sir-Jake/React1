function SearchSection() {
  console.log("Search Section rendered");
  console.log("State forces rendering of all components using state");

  let searchValue = "This is search value";

  const userInput = (e) => {
    console.log(e);
    const value = e.target.value;
    //console.log("Input value is", value);
    searchValue = e.target.value;
    console.log("Search value is", searchValue);
  };
  
  return (
    <div>
    <div className="flex justify-center my-4">
      <div className="flex items-center">
        <input className="px-2 py-0.5 border" onChange={userInput} />
        <button className="px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active: opacity-50">
          Search
        </button>
      </div>
    </div>
    <div>{searchValue}</div>
    </div>
  );
}

export default SearchSection;
