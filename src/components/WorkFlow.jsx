import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WorkFlow() {
  const { t } = useTranslation();

  const steps = [
    {
      step: t('step1'),
      title: t('enter_business_information'),
      description: t('business_info_description'),
      alignment: 'right',
    },
    {
      step: t('step2'),
      title: t('edit_and_save'),
      description: t('edit_plan_description'),
      alignment: 'left',
    },
    {
      step: t('step3'),
      title: t('export'),
      description: t('export_description'),
      alignment: 'right',
    },
    {
      step: t('step4'),
      title: t('export'),
      description: t('export_description'),
      alignment: 'left',
    },
  ];

  return (
    <section>
      <div className="bg-[#0E0C15] text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-[#C2410C] uppercase tracking-loose">{t('working_process')}</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{t('how_it_works')}</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              {t('business_plan_description')}
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-[#C2410C] text-[#C2410C] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#C2410C] hover:border-transparent"
            >
              {t('explore_now')}
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden sm:p-10 h-full">
                <div
                  className="border-2 border-yellow-555 absolute h-full"
                  style={{ right: '50%', border: '2px solid #C2410C', borderRadius: '1%' }}
                ></div>
                <div
                  className="border-2 border-yellow-555 absolute h-full"
                  style={{ left: '50%', border: '2px solid #C2410C', borderRadius: '1%' }}
                ></div>

                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`mb-8 flex justify-between items-center w-full ${step.alignment === 'right' ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className={`order-1 w-5/12 px-1 py-4 text-${step.alignment}`}>
                      <p className="mb-3 text-base text-[#C2410C]">{step.step}</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">{step.title}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                alt=""
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
