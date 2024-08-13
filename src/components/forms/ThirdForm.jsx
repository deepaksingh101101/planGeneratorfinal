import { useState } from "react";
import { BiRevision } from "react-icons/bi";

export default function ThirdForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };
    const [customerGroupData, setCustomerGroupData] = useState({
        customerGroup1: "",
        customerGroup1Description: "",
        customerGroup1IncomeLevel: "",
        customerGroup2: "",
        customerGroup2Description: "",
        customerGroup2IncomeLevel: "",
        customerGroup3: "",
        customerGroup3Description: "",
        customerGroup3IncomeLevel: ""
    });
    const handleCustomerGroupChange = (e) => {
        const { name, value } = e.target;
        setCustomerGroupData({ ...customerGroupData, [name]: value });
    };
    const [suggestions, setSuggestions] = useState({
        customerGroup1Description: ["Example 1", "Example 2", "Example 3", "Example 4"],
        customerGroup2Description: ["Example 2", "Example 5", "Example 6", "Example 5"],
        customerGroup3Description: ["Example 3", "Example 8", "Example 9", "Example 6"],
    });
    const incomeLevels = [
        { value: "low-income", label: "Low-income" },
        { value: "medium-income", label: "Medium-income" },
        { value: "high-income", label: "High-income" }
    ];
    const renderSuggestions = (field) => {
        return (
            <div className="mt-2 flex items-center justify-between px-20 space-y-2">
                {suggestions[field].map((suggestion, index) => (
                    <div
                        key={index}
                        className="py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700"
                        onClick={() => setCustomerGroupData({ ...customerGroupData, [field]: suggestion })}
                    >
                        <span className='text-[15px]' >{suggestion}</span>
                    </div>
                ))}
            </div>
        );
    };
  return (
    <div className="relative min-h-screen grid bg-transparent">
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="w-full space-y-12">
                <div className="lg:text-left text-center">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                                {/* Customer Group 1 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 1 Description (required)</label>
                                    <input
                                        type="text"
                                        name="customerGroup1Description"
                                        value={customerGroupData.customerGroup1Description}
                                        onChange={handleCustomerGroupChange}
                                        onClick={() => renderSuggestions('customerGroup1Description')}
                                        required
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></input>
                                    {renderSuggestions('customerGroup1Description')}
                                    <div className="flex justify-center my-3">
                                        <button
                                            type="button"
                                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                                            // onClick={regenerateSuggestions}
                                        >
                                            <BiRevision className='mx-2' />
                                            <span> Regenerate Suggestions</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 1 Income Level (required)</label>
                                    <div className="mt-4 space-y-4">
                                        {incomeLevels.map((level) => (
                                            <label key={level.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                                                <input
                                                    type="radio"
                                                    name="customerGroup1IncomeLevel"
                                                    value={level.value}
                                                    checked={customerGroupData.customerGroup1IncomeLevel === level.value}
                                                    onChange={handleCustomerGroupChange}
                                                    className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                    required
                                                />
                                                <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Customer Group 2 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 2 Description (optional)</label>
                                    <textarea
                                        name="customerGroup2Description"
                                        value={customerGroupData.customerGroup2Description}
                                        onChange={handleCustomerGroupChange}
                                        onClick={() => renderSuggestions('customerGroup2Description')}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                    {renderSuggestions('customerGroup2Description')}
                                    <div className="flex justify-center my-3">
                                        <button
                                            type="button"
                                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                                            // onClick={regenerateSuggestions}
                                        >
                                            <BiRevision className='mx-2' />
                                            <span> Regenerate Suggestions</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 2 Income Level (optional)</label>
                                    <div className="mt-4 space-y-4">
                                        {incomeLevels.map((level) => (
                                            <label key={level.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                                                <input
                                                    type="radio"
                                                    name="customerGroup2IncomeLevel"
                                                    value={level.value}
                                                    checked={customerGroupData.customerGroup2IncomeLevel === level.value}
                                                    onChange={handleCustomerGroupChange}
                                                    className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Customer Group 3 */}
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 3 Description (optional)</label>
                                    <textarea
                                        name="customerGroup3Description"
                                        value={customerGroupData.customerGroup3Description}
                                        onChange={handleCustomerGroupChange}
                                        onClick={() => renderSuggestions('customerGroup3Description')}
                                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                    ></textarea>
                                    {renderSuggestions('customerGroup3Description')}
                                    <div className="flex justify-center my-3">
                                        <button
                                            type="button"
                                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                                            // onClick={regenerateSuggestions}
                                        >
                                            <BiRevision className='mx-2' />
                                            <span> Regenerate Suggestions</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-bold text-lg text-white">Customer Group 3 Income Level (optional)</label>
                                    <div className="mt-4 space-y-4">
                                        {incomeLevels.map((level) => (
                                            <label key={level.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                                                <input
                                                    type="radio"
                                                    name="customerGroup3IncomeLevel"
                                                    value={level.value}
                                                    checked={customerGroupData.customerGroup3IncomeLevel === level.value}
                                                    onChange={handleCustomerGroupChange}
                                                    className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
