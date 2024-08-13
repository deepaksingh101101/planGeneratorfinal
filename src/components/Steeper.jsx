import { useState } from 'react';

import Step from './step/Step';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Steeper = () => {
    const steps = [
        { icon: "1", label: 'Registration' },
        { icon: "2", label: 'Diseases' },
        { icon: "3", label: 'Treatment' },
        { icon: "4", label: 'Treatment' },
        { icon: "5", label: 'Treatment' },
        { icon: "6", label: 'Treatment' },
        { icon: "7", label: 'Treatment' }
    ];
    

    const [index, setIndex] = useState(0);

    const handleIncreaseIndex = () => {
        setIndex((prevIndex) => (prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handleDecreaseIndex = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
      };
    
      const businessPlanObjectives = [
        { value: "existing", label: "Existing business" },
        { value: "upcoming", label: "Upcoming unlaunched business" }
      ];
    
      const businessOperationalStatus = [
        { value: "request_fund_investors", label: "To be used to request fund from investors" },
        { value: "request_fund_banks", label: "To be used to request fund from banks" },
        { value: "self_learning", label: "For self-learning" },
        { value: "school_project", label: "To be used as reference for school/university project" },
        { value: "workplace_project", label: "To be used as reference for workplace projects" },
        { value: "non_financial_approval", label: "To be used to submit to a non-financial institution for approval (e.g. getting VISA approval, franchise approval, tenant approval)" },
        { value: "other_reasons", label: "Other reasons" }
      ];

      const [formData, setFormData] = useState({
        businessName: "",
        businessDescription: "",
        numberOfEmployees: "",
        productService: "",
        salesChannel: "",
        customerLocation: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const productServiceOptions = [
        { value: "product", label: "Product" },
        { value: "service", label: "Service (retail businesses are considered service)" }
      ];
    
      const salesChannelOptions = [
        { value: "online", label: "Online" },
        { value: "physical", label: "Physical Location" },
        { value: "both", label: "Both online and physical location" }
      ];
    
    
    

    return (
        <>
            <div className="steps-container mb-3 flex justify-center items-center bg-transparent">
                <div className="steps w-full overflow-auto">
                    {steps.map((step, idx) => (
                        <Step key={idx} icon={step.icon} label={step.label} isActive={idx === index}/>
                    ))}
                </div>
            </div>

            <div className="container p-5" style={{ minHeight: "55vh" }}>
                <h4 className="font-bold text-[#771E99]">{steps[index].label}</h4>

                {index === 0 &&(
                    <>
                        {/* Starting the form */}
      <div className="relative min-h-screen grid bg-transparent">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
          <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                      <div>
                        <label className="font-bold text-lg text-white">Select Business Plan Objective</label>
                        <div className="mt-4 space-y-4">
                          {businessPlanObjectives.map((objective) => (
                            <label key={objective.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                              <input type="radio" name="objective" value={objective.value} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                              <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{objective.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="font-bold text-lg text-white">Business Operational Status</label>
                        <div className="mt-4 space-y-4">
                          {businessOperationalStatus.map((status) => (
                            <label key={status.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                              <input type="radio" name="status" value={status.value} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                              <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{status.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      {/* <button
                        type="submit"
                        className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                      >
                        Submit
                      </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BottomLine /> */}
                    </>
                )}

                {index === 1 &&(
                    <>
                         {/* Starting the form */}
      <div className="relative min-h-screen grid bg-transparent">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
          <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                      {/* Business Name */}
                      <div>
                        <label className="font-bold text-lg text-white">Your business name (required)</label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                        />
                      </div>

                      {/* Business Description */}
                      <div>
                        <label className="font-bold text-lg text-white">Your business description (required)</label>
                        <textarea
                          name="businessDescription"
                          value={formData.businessDescription}
                          onChange={handleChange}
                          required
                          className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                        ></textarea>
                      </div>

                      {/* Number of Employees */}
                      <div>
                        <label className="font-bold text-lg text-white">Number of employees (required)</label>
                        <input
                          type="number"
                          name="numberOfEmployees"
                          value={formData.numberOfEmployees}
                          onChange={handleChange}
                          required
                          className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                        />
                      </div>

                      {/* Product or Service */}
                      <div>
                        <label className="font-bold text-lg text-white">Do you offer a product or service? (required)</label>
                        <div className="mt-4 space-y-4">
                          {productServiceOptions.map((option) => (
                            <label key={option.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                              <input
                                type="radio"
                                name="productService"
                                value={option.value}
                                checked={formData.productService === option.value}
                                onChange={handleChange}
                                className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                required
                              />
                              <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Sales Channel */}
                      <div>
                        <label className="font-bold text-lg text-white">How can customer get your product or service? (required)</label>
                        <div className="mt-4 space-y-4">
                          {salesChannelOptions.map((option) => (
                            <label key={option.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                              <input
                                type="radio"
                                name="salesChannel"
                                value={option.value}
                                checked={formData.salesChannel === option.value}
                                onChange={handleChange}
                                className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                required
                              />
                              <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Customer Location */}
                      <div>
                        <label className="font-bold text-lg text-white">Where do you serve your customers? (required)</label>
                        <input
                          type="text"
                          name="customerLocation"
                          value={formData.customerLocation}
                          onChange={handleChange}
                          required
                          className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BottomLine /> */}

                    </>
                )}

                <div className="flex justify-between flex-row-reverse items-center">
                    <div className="flex justify-end">
                        {index >= 0 && index < steps.length - 1 && (
                            <button
                                type="button"
                                className="relative my-5 text-white text-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full  p-5 text-center inline-flex items-center"
                                onClick={handleIncreaseIndex}
                            >
                                <FaArrowRight/>
                            </button>
                        )}
                    </div>
                    <div className="flex justify-between">
                        {index > 0 && (
                            <button
                                type="button"
                                className="relative my-5 text-white text-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full  p-5 text-center inline-flex items-center"
                                onClick={handleDecreaseIndex}
                            >
                                <FaArrowLeft/>
                            </button>
                        )}
                    </div>
                </div>
                <div className="mt-12">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg transform transition duration-500 ">
                  <h2 className="text-2xl font-bold text-white mb-4">We value your privacy</h2>
                  <p className="text-white">
                    At 15minuteplan.ai, we are committed to protecting your privacy and the security of your personal information. 
                    We collect only the necessary data to generate your business plan and improve our service, and we will never steal 
                    your business idea or share your information with third parties without your consent. 
                    <a href="#" className="underline text-white font-semibold">Learn more about our privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>
        </>
    );
};

export default Steeper;
