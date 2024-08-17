import { Link } from "react-router-dom";
import { logo,small_logo } from "../assets";

const Header = () => {
  return (
    <nav
      className={`fixed top-0 left-0 py-[20px] w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between">
        <a className="block w-[12rem] xl:mr-8" href="/">
           {/* Show the large logo on screens >= 500px */}
           <img
            src={logo}
            width={190}
            height={40}
            alt="Tasweeqy.ai"
            className="hidden sm:block"
          />
          {/* Show the small logo on screens < 500px */}
          <img
            src={small_logo}
            width={60}
            height={30}
            alt="Tasweeqy.ai"
            className="block sm:hidden"
          />
        </a>

<Link to='/sign' >
        <button href="/learn-more" className=" px-[80px] continueBtnShadow transitionC hover:scale-105 bg-orange-700 text-white  py-3 text-[17px] font-bold rounded-md  ">
               Login
            </button>
            </Link>
      </div>
    </nav>
  );
};

export default Header;
