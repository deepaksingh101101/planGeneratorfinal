import Heading from "./Heading";
import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
} from "../assets";
import { FaBusinessTime } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Benefits = () => {

  const { t, i18n } = useTranslation();

 const benefits = [
    {
      id: "0",
      title: t('entrepreneurs_title'),
      text: t('entrepreneurs_description'),
      backgroundUrl: "./src/assets/whoIsThisFor/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: t('business_owners_title'),
      text: t('business_owners_description'),
      backgroundUrl: "./src/assets/whoIsThisFor/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: t('anyone_title'),
      text: t('anyone_description'),
      backgroundUrl: "./src/assets/whoIsThisFor/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    }
  ];


  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title={t('who_is_this_for')}
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block shadow-slate-500 shadow-sm relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto ">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  
                </div>
              </div>

              {/* {item.light && <GradientLight />} */}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
