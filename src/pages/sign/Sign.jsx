import GPT from "../../components/gpt/GPT";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <div className="min-h-screen bg-[#0E0C15] text-gray-100 flex justify-center mt-20">
      <div className="w-full m-0 bg-[#0E0C15] shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 p-6 sm:p-12">
          <div>
            <img src={logo} className="w-32 h-8 mx-auto" alt="Logo" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-4xl xl:text-5xl font-extrabold text-white">
              Sign In
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                {/* Email Input Field */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-[#3A3A48] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-[#23222C] mt-5 text-white"
                  type="email"
                  placeholder="Email"
                />
                {/* Password Input Field */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-[#3A3A48] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-[#23222C] mt-5 text-white"
                  type="password"
                  placeholder="Password"
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-[#5A1C8B] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign In</span>
                </button>
                {/* Sign In Link */}
                <p className="mt-6 text-xs text-gray-400 text-center">
                  Dont't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-indigo-500 border-b border-gray-500 border-dotted"
                  >
                    Create One
                  </Link>
                </p>
                <p className="mt-6 text-xs text-gray-400 text-center">
                  I agree to abide by templatana's{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#0E0C15] text-center hidden lg:flex mt-24 justify-center">
          <div className="mx-16 w-full text-white">
            <GPT />
            <h2 className="text-4xl font-bold mb-4 mt-20 animate-bounce">
              Business Plan Generator
            </h2>
            <p className="text-lg leading-relaxed animate-pulse text-left">
              Simplify your business planning process with our intuitive
              generator. Whether you're a startup or an established business,
              create comprehensive plans with ease.
            </p>
            <p className="mt-6 text-md text-gray-300 animate-fade-in text-right">
              Join us today and bring your business ideas to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
