const PlanCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-[#5740a5] border-2 shadow-lg rounded-lg p-6 w-full">
        <div className="flex justify-center mb-4">
          <button className="bg-black text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-all">
            Talk To Plan
          </button>
        </div>
        <h3 className="text-center text-gray-700 font-semibold mb-4">
          What would you like to change about the <span className="font-bold">Executive Summary</span> above?
        </h3>
        <input
          type="text"
          placeholder="E.g. replace business origins topic with product description topic"
          className="w-full px-4 py-2 border-[#5740a5] border-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <p className="text-gray-500 text-sm mb-4">
          Note: changes here won’t apply to the final plan so you can explore freely. Full editing will be available once unlocked at the end of the page.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
            Make Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
