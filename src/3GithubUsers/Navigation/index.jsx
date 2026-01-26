function Navigation({ setPage }) {
  return (
    <div className="flex w-full justify-center gapx-4">
      <button
        onClick={() => {
          setPage("users");
        }}
        className="shadow-md rounded-md active: opacity-50 py-0.5 px-2 cursor-pointer"
      >
        <b>Users</b>
      </button>
      <button
        onClick={() => {
          setPage("find");
        }}
        className="shadow-md rounded-md active: opacity-50 py-0.5 px-2 cursor-pointer"
      >
        <b>Find</b>
      </button>
    </div>
  );
}

export default Navigation;
