import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDollarSign, FaUniversity, FaRegAddressCard } from 'react-icons/fa';

export const WhoIsThisFor = () => {
  const { t } = useTranslation(); // Hook to handle translations

  const plans = [
    {
      icon: <FaDollarSign className="text-5xl mx-auto mb-4 text-white" />,
      title: t('entrepreneurs_title'),
      description: t('entrepreneurs_description'),
    },
    {
      icon: <FaUniversity className="text-5xl mx-auto mb-4" />,
      title: t('business_owners_title'),
      description: t('business_owners_description'),
    },
    {
      icon: <FaRegAddressCard className="text-5xl mx-auto mb-4" />,
      title: t('anyone_title'),
      description: t('anyone_description'),
    },
  ];

  return (
    <section className="bg-navy text-white py-12 mt-80">
      <h2 className="text-4xl font-bold text-center mb-12">{t('who_is_this_for')}</h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-y-0 lg:space-x-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-light-navy rounded-lg p-6 w-full text-center shadow-lg border border-gray-200 hover:shadow-2xl hover:border-gray-400 hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            {plan.icon}
            <h3 className="text-[20px] lg:text-[22px] font-semibold mb-2 leading-[30px] my-5 text-start">{plan.title}</h3>
            <p className="text-[16px] lg:text-[18px] my-6 text-start">{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIsThisFor;
