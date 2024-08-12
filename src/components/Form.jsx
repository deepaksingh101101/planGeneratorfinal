
import Section from "./Section";

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Starting the form */}
      <div className="relative min-h-screen grid bg-transparent">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <div
            className="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover"
          >
            <div className="absolute bg-transparent opacity-25 inset-0 z-0"></div>
            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
              <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className=" flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                      <label className="font-bold text-lg text-white">Account Number</label>
                      <input
                        type="text"
                        name="accnum"
                        placeholder="Account number"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                      />
                      <label className="font-bold text-lg text-white">Pin</label>
                      <input
                        type="password"
                        name="pin"
                        placeholder="****"
                        className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"
                      />
                      <label className="font-bold text-lg text-white">Initial Deposit</label>
                      <input
                        type="text"
                        name="amount"
                        placeholder="Amount in INR"
                        className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white"
                      />
                      <button
                        type="submit"
                        className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold"
                      >
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BottomLine /> */}
    </Section>
  );
};

export default Form;
