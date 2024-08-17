import { useState } from 'react';
import Step from './step/Step';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import FirstForm from './forms/FirstForm';
import SecondForm from './forms/SecondForm';
import ThirdForm from './forms/ThirdForm';
import FourthForm from './forms/FourthForm';
import FifthForm from './forms/FifthForm';
import SixthForm from './forms/SixthForm';
import SeventhForm from './forms/SeventhForm';

const Steeper = () => {
    const steps = [
        { icon: "1", label: 'Step 1',title:"Select Business Plan Objective" },
        { icon: "2", label: 'Step 2',title:"Enter Basic Business Information" },
        { icon: "3", label: 'Step 3',title:"Enter Customer Group Details" },
        { icon: "4", label: 'Step 4',title:"Enter Product or Service Details" },
        { icon: "5", label: 'Step 5',title:"Enter Success Drivers" },
        { icon: "6", label: 'Step 6',title:"Enter Currency and Initial Investment Details" },
        { icon: "7", label: 'Step 7',title:"Enter Financial Details and Plan Language" }
    ];

    const [index, setIndex] = useState(0);

    const handleIncreaseIndex = () => {
        setIndex((prevIndex) => (prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const handleDecreaseIndex = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
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
                {index === 0 && (
                    <>
                                    <h1 className=' ms-16 mt-10 text-3xl' >Select Business Plan Objective</h1>

                        {/* Starting the form */}
                      <FirstForm/>
                    </>
                )}

                {index === 1 && (
                    <>
                                    <h1 className=' ms-16 mt-10 text-3xl' >Enter Basic Business Information</h1>

                        {/* Step 2 content */}
                     <SecondForm/>
                    </>
                )}

                {index === 2 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >Enter Customer Group Details</h1>

                        {/* Customer Group Details */}
                      <ThirdForm/>
                    </>
                )}

                {index === 3 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >Enter Product or Service Details</h1>

                        {/* Product or Service Details */}
                     <FourthForm/>
                    </>
                )}

                {index === 4 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >Enter Success Drivers</h1>

                        {/* Success Drivers and Weaknesses */}
                       <FifthForm/>
                    </>
                )}
                {index === 5 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >Enter Currency and Initial Investment Details</h1>


                        {/* Success Drivers and Weaknesses */}
                       <SixthForm/>
                    </>
                )}
                {index === 6 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >Enter Financial Details and Plan Language</h1>

                        {/* Success Drivers and Weaknesses */}
                       <SeventhForm/>
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
