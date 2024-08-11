import React from 'react';
import { FaDollarSign, FaUniversity, FaRegAddressCard } from 'react-icons/fa';

const plans = [
  {
    icon: <FaDollarSign className="text-5xl mx-auto mb-4 text-white" />,
    title: "Entrepreneurs looking for investor funding",
    description:
      "Our AI business plan generator helps entrepreneurs in creating professional business plans designed to impress potential investors and secure funding.",
  },
  {
    icon: <FaUniversity className="text-5xl mx-auto mb-4" />,
    title: "Business owners and entrepreneurs looking for a bank loan",
    description:
      "Our AI business plan generator is SBA-approved and follows most banks' business plan templates.",
  },
  {
    icon: <FaRegAddressCard className="text-5xl mx-auto mb-4" />,
    title: "For anyone looking to make a business plan",
    description:
      "Whether you want an AI-generated business plan for self-learning, as a reference for a project, or for submission to a non-financial institution, we've got you covered.",
  },
];

export const WhoIsThisFor = () => {
  return (
    <div className="bg-navy text-white py-12 mt-80">
      <h2 className="text-4xl font-bold text-center mb-12">Who is this for?</h2>
      <div className="container mx-auto px-4 flex  flex-col md:flex-col lg:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-light-navy rounded-lg p-6 w-full mb-10 text-center shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-400 hover:bg-orange-600 transition duration-300 ease-in-out md:w-full "
          >
            {plan.icon}
            <h3 className=" text-[20px] lg:text-[22px] font-semibold mb-2 text-start leading-[30px] my-5">{plan.title}</h3>
            <p className=" text-[16px] lg:text-[18px] my-6 text-start">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
