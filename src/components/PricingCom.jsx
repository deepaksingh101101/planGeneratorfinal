export default function PricingCom() {
  return (
    <div className="flex justify-center flex-wrap items-center lg:grid-cols-2 px-8 gap-10 text-white mt-10">
      <div className="flex min-h-[500px] flex-col items-center bg-purple-700 p-8 rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <div className="text-center">
          <h2 className="font-extrabold text-3xl mb-2 animate-pulse">Starter</h2>
          <p className="opacity-70 text-lg italic">For individuals & small teams</p>
          <div className="flex flex-col items-center my-8">
            <p className="font-extrabold text-4xl">$29</p>
            <p className="text-sm opacity-60">/month</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { label: 'All Does All the Work', iconColor: 'fill-orange-300' },
            { label: 'Edit With AI' },
            { label: 'Save As Word' },
            { label: 'GPT Model 3.5' },
            { label: 'Plan Quota 3 Plans' },
            { label: 'About 10 Pages Per Plan' },
            { label: 'Good Foe Getting Your Foot in the door' },
          ].map((feature, index) => (
            <p key={index} className="flex items-center text-sm font-semibold text-gray-200 hover:text-violet-200 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <b>{feature.label}</b>
              {feature.iconColor && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`w-4 h-4 ml-1 ${feature.iconColor}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </p>
          ))}
          <div className="flex justify-center mt-8">
            <button className="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 hover:text-purple-900 rounded-xl transition-all duration-200 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[500px] flex-col items-center bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 p-8 rounded-lg shadow-lg relative border-8 border-purple-600 max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded animate-bounce">
          POPULAR
        </p>
        <div className="text-center">
          <div className="flex gap-4 justify-center">
            <p className="font-extrabold text-3xl mb-2 animate-pulse">Pro</p>
          </div>
          <p className="opacity-70 text-lg italic">For agencies and businesses</p>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col items-center my-8">
              <p className="font-extrabold text-4xl">$79</p>
              <p className="text-sm opacity-60">/month</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[
             { label: 'All Does All the Work', iconColor: 'fill-orange-300' },
             { label: 'Edit With AI' },
             { label: 'Save As Word' },
             { label: 'GPT Model 4' },
             { label: 'Plan Quota 10 Plans' },
             { label: 'About 20 Pages Per Plan' },
             { label: 'Good For Closing the deal' }, 
          ].map((feature, index) => (
            <p key={index} className="flex items-center text-sm font-semibold text-gray-200 hover:text-violet-200 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <b>{feature.label}</b>
              {feature.iconColor && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`w-4 h-4 ml-1 ${feature.iconColor}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </p>
          ))}
          <div className="flex justify-center mt-8">
            <button className="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 hover:text-purple-900 rounded-xl transition-all duration-200 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
