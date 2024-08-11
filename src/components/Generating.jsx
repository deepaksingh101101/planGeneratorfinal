import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-gradient-to-r from-orange-800 to-orange-900 rounded-full shadow-lg ${className || ""} text-white text-lg animate-bounce`}
    >
      <img className="w-6 h-6 mr-4 animate-spin" style={{filter:"invert(1)"}} src={loading} alt="Loading" />
      Generate Your Business Plan In Minutes 
    </div>
  );
};

export default Generating;
