

export default function ExNavbar() {
  function handleClick() {
    console.log("Button clicked!");
  }
  function newone() {
    console.log("newohe clicked!");
  }
  return (
  <div className="m-10">
        <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click me
    </button>
    <span  onClick={newone} className=" p-1.5 text-xs font-medium uppercase tracking-wider text-gray-100 bg-red-800 rounded-lg bg-opacity-75">block</span>

  </div>
  );
}

