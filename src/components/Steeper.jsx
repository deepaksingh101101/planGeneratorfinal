import { useState } from 'react';
import Step from './step/Step';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { BiRevision } from "react-icons/bi";

const Steeper = () => {
    const steps = [
        { icon: "1", label: 'Step 1' },
        { icon: "2", label: 'Step 2' },
        { icon: "3", label: 'Step 3' },
        { icon: "4", label: 'Step 4' },
        { icon: "5", label: 'Step 5' },
        { icon: "6", label: 'Step 6' },
        { icon: "7", label: 'Step 7' }
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

    const [formData, setFormData] = useState({
        businessName: "",
        businessDescription: "",
        numberOfEmployees: "",
        productService: "",
        salesChannel: "",
        customerLocation: "",
        product1Name: "",
        product1Description: "",
        product2Name: "",
        product2Description: "",
        product3Name: "",
        product3Description: "",
        product4Name: "",
        product4Description: "",
        product5Name: "",
        product5Description: "",
        successDriver1: "",
        successDriver2: "",
        successDriver3: "",
        weakness1: "",
        weakness2: "",
        weakness3: ""
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

    const incomeLevels = [
        { value: "low-income", label: "Low-income" },
        { value: "medium-income", label: "Medium-income" },
        { value: "high-income", label: "High-income" }
    ];

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

    const [suggestions, setSuggestions] = useState({
        customerGroup1Description: ["Example 1", "Example 2", "Example 3", "Example 4"],
        customerGroup2Description: ["Example 2", "Example 5", "Example 6", "Example 5"],
        customerGroup3Description: ["Example 3", "Example 8", "Example 9", "Example 6"],
    });

    const handleCustomerGroupChange = (e) => {
        const { name, value } = e.target;
        setCustomerGroupData({ ...customerGroupData, [name]: value });
    };

    const regenerateSuggestions = () => {
        // Placeholder for actual suggestion regeneration logic
        setSuggestions({
            customerGroup1Description: ["New suggestion 1", "New suggestion 2", "New suggestion 3"],
            customerGroup2Description: ["New suggestion 4", "New suggestion 5", "New suggestion 6"],
            customerGroup3Description: ["New suggestion 7", "New suggestion 8", "New suggestion 9"],
        });
    };

    const businessOperationalStatus = [
        { value: "request_fund_investors", label: "To be used to request fund from investors" },
        { value: "request_fund_banks", label: "To be used to request fund from banks" },
        { value: "self_learning", label: "For self-learning" },
        { value: "school_project", label: "To be used as reference for school/university project" },
        { value: "workplace_project", label: "To be used as reference for workplace projects" },
        { value: "non_financial_approval", label: "To be used to submit to a non-financial institution for approval (e.g. getting VISA approval, franchise approval, tenant approval)" },
        { value: "other_reasons", label: "Other reasons" }
    ];
    const business = [
        { value: "Existing_business", label: "Existing business" },
        { value: "request_fund_banks", label: "Upcoming unlaunched business" },
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
    const renderDescription = (field) => {
        return (
            <div className="mt-2 px-2  space-y-2">
                {suggestions[field].map((suggestion, index) => (
                    <div
                        key={index}
                        className="py-2  px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700"
                        onClick={() => setCustomerGroupData({ ...customerGroupData, [field]: suggestion })}
                    >
                        <span className='text-[15px]' >{suggestion}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="steps-container mb-3 flex justify-center items-center bg-transparent">
                <div className="steps w-full overflow-auto">
                    {steps.map((step, idx) => (
                        <Step key={idx} icon={step.icon} label={step.label} isActive={idx === index} />
                    ))}
                </div>
            </div>

            <div className="container p-5" style={{ minHeight: "55vh" }}>
                <h4 className="font-bold px-16 text-[#771E99]">{steps[index].label}</h4>
                <h1 className=' ms-16 mt-10 text-3xl' >Select Business Plan Objective</h1>
                {index === 0 && (
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
                                                            <label className="font-bold text-lg text-white">Is this an existing or an upcoming business?</label>
                                                            <div className="mt-4 space-y-4">
                                                                {business.map((objective) => (
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
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {index === 1 && (
                    <>
                        {/* Step 2 content */}
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
                                                                className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
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
                                                                className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
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
                                                                className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
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
                                                                className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
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
                    </>
                )}

                {index === 2 && (
                    <>
                        {/* Customer Group Details */}
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
                                                                    onClick={regenerateSuggestions}
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
                                                                    onClick={regenerateSuggestions}
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
                                                                    onClick={regenerateSuggestions}
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
                    </>
                )}

                {index === 3 && (
                    <>
                        {/* Product or Service Details */}
                        <div className="relative min-h-screen grid bg-transparent">
                            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
                                <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
                                    <div className="w-full space-y-12">
                                        <div className="lg:text-left text-center">
                                            <div className="flex items-center justify-center">
                                                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                                                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                                                        {/* Product 1 */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 1 Name (required)</label>
                                                            <input
                                                                type="text"
                                                                name="product1Name"
                                                                value={formData.product1Name}
                                                                onChange={handleChange}
                                                                required
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 1 Description (optional)</label>
                                                            <textarea
                                                                name="product1Description"
                                                                value={formData.product1Description}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            ></textarea>
                                                        </div>

                                                        {/* Product 2 */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 2 Name (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="product2Name"
                                                                value={formData.product2Name}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 2 Description (optional)</label>
                                                            <textarea
                                                                name="product2Description"
                                                                value={formData.product2Description}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            ></textarea>
                                                        </div>

                                                        {/* Product 3 */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 3 Name (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="product3Name"
                                                                value={formData.product3Name}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 3 Description (optional)</label>
                                                            <textarea
                                                                name="product3Description"
                                                                value={formData.product3Description}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            ></textarea>
                                                        </div>

                                                        {/* Product 4 */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 4 Name (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="product4Name"
                                                                value={formData.product4Name}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 4 Description (optional)</label>
                                                            <textarea
                                                                name="product4Description"
                                                                value={formData.product4Description}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            ></textarea>
                                                        </div>

                                                        {/* Product 5 */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 5 Name (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="product5Name"
                                                                value={formData.product5Name}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Product or Service 5 Description (optional)</label>
                                                            <textarea
                                                                name="product5Description"
                                                                value={formData.product5Description}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            ></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {index === 4 && (
                    <>
                        {/* Success Drivers and Weaknesses */}
                        <div className="relative min-h-screen grid bg-transparent">
                            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
                                <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
                                    <div className="w-full space-y-12">
                                        <div className="lg:text-left text-center">
                                            <div className="flex items-center justify-center">
                                                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                                                    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                                                        {/* Success Drivers */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Success Driver 1 (required)</label>
                                                            <input
                                                                type="text"
                                                                name="successDriver1"
                                                                value={formData.successDriver1}
                                                                onChange={handleChange}
                                                                required
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Success Driver 2 (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="successDriver2"
                                                                value={formData.successDriver2}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Success Driver 3 (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="successDriver3"
                                                                value={formData.successDriver3}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>

                                                        {/* Weaknesses */}
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Weakness 1 (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="weakness1"
                                                                value={formData.weakness1}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Weakness 2 (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="weakness2"
                                                                value={formData.weakness2}
                                                                onChange={handleChange}
                                                                className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="font-bold text-lg text-white">Weakness 3 (optional)</label>
                                                            <input
                                                                type="text"
                                                                name="weakness3"
                                                                value={formData.weakness3}
                                                                onChange={handleChange}
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
                                <FaArrowRight />
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
                                <FaArrowLeft />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steeper;
