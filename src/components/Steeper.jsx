import { useState } from 'react';

import Step from './step/Step';
import patientRegistrationIcon from '../assets/icons/registration.png';
import disease from '../assets/icons/disease.png';
import treatement from '../assets/icons/treatement.png';

const Steeper = () => {
    const steps = [
        { icon: patientRegistrationIcon, label: 'Registration' },
        { icon: disease, label: 'Diseases' },
        { icon: treatement, label: 'Treatment' }
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
                <h4 className="font-bold text-[#771E99]">{steps[index].label}</h4>

                <div className="flex justify-between flex-row-reverse">
                    <div className="flex justify-end">
                        {index >= 0 && index < steps.length - 1 && (
                            <button
                                type="button"
                                className="relative my-5 text-white text-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                onClick={handleIncreaseIndex}
                            >
                                Next
                                <i className="fa-solid fa-circle-arrow-right ml-2"></i>
                            </button>
                        )}
                    </div>
                    <div className="flex justify-between">
                        {index > 0 && (
                            <button
                                type="button"
                                className="relative my-5 text-white text-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                onClick={handleDecreaseIndex}
                            >
                                <i className="fa-solid fa-circle-arrow-right mr-2 transform rotate-180"></i>
                                Back
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steeper;
