import React from 'react';
import { useTranslation } from 'react-i18next';


  
export const Testimonies = () => {
   const { t } = useTranslation();

  const testimoniesData = [
    {
      id: 1,
      name: t('kanye_west_name'),
      title: t('rapper_entrepreneur_title'),
      text: t('rapper_entrepreneur_text'),
      img: "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
      twitter: "https://twitter.com/kanyewest"
    },
    {
      id: 2,
      name: t('tim_cook_name'),
      title: t('ceo_apple_title'),
      text: t('ceo_apple_text'),
      img: "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
      twitter: "https://twitter.com/tim_cook"
    },
    {
      id: 3,
      name: t('parag_agrawal_name'),
      title: t('ceo_twitter_title'),
      text: t('ceo_twitter_text'),
      img: "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
      twitter: "https://twitter.com/paraga"
    },
    {
      id: 4,
      name: t('satya_nadella_name'),
      title: t('ceo_microsoft_title'),
      text: t('ceo_microsoft_text'),
      img: "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
      twitter: "https://twitter.com/satyanadella"
    },
    {
      id: 5,
      name: t('dan_schulman_name'),
      title: t('ceo_paypal_title'),
      text: t('ceo_paypal_text'),
      img: "https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg",
      twitter: "https://twitter.com/dan_schulman"
    }
  ];
  return (
    <section id="testimonies" className="py-20 ">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            {/* <div
              className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40"
            >
            </div> */}
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              
              {t('what_customers_say')}

            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
            {t('its_not_just_us')}


            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimoniesData.map((testimony, index) => (
            <div key={testimony.id} className={`space-y-8 `}>
              <div className="relative group">
                <div
                  className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-orange-600 to-orange-300 blur  "
                ></div>
                <a href={testimony.twitter} className="cursor-pointer">
                  <div
                    className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimony.img}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt={testimony.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{testimony.name}</h3>
                        <p className="text-gray-500 text-md">{testimony.title}</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">{testimony.text}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

