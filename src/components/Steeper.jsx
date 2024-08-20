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
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Steeper = () => {
    const { firstForm } = useSelector((state) => state.form);
const {t}=useTranslation();
    const steps = [
        { icon: "1", label:t('step1'),title:t('step1Title')},
        { icon: "2", label: t('step2'),title:t('step2Title')},
        { icon: "3", label: t('step3'),title:t('step3Title')},
        { icon: "4", label: t('step4'),title:t('step4Title')},
        { icon: "5", label: t('step5'),title:t('step5Title')},
        { icon: "6", label: t('step6'),title:t('step6Title')},
        { icon: "7", label: t('step7'),title:t('step7Title') }
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
                                    <h1 className=' ms-16 mt-10 text-3xl' >{t('step1Title')}</h1>

                        {/* Starting the form */}
                      <FirstForm/>
                    </>
                )}

                {index === 1 && (
                    <>
                                    <h1 className=' ms-16 mt-10 text-3xl' >{t('step2Title')}</h1>

                        {/* Step 2 content */}
                     <SecondForm/>
                    </>
                )}

                {index === 2 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >{t('step3Title')}</h1>

                        {/* Customer Group Details */}
                      <ThirdForm/>
                    </>
                )}

                {index === 3 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >{t('step4Title')}</h1>

                        {/* Product or Service Details */}
                     <FourthForm/>
                    </>
                )}

                {index === 4 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >{t('step5Title')}</h1>

                        {/* Success Drivers and Weaknesses */}
                       <FifthForm/>
                    </>
                )}
                {index === 5 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >{t('step6Title')}</h1>


                        {/* Success Drivers and Weaknesses */}
                       <SixthForm/>
                    </>
                )}
                {index === 6 && (
                    <>
                                                        <h1 className=' ms-16 mt-10 text-3xl' >{t('step7Title')}</h1>

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
