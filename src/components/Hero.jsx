import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import robo from '../assets/images/robo.jpg'
import { english } from "../assets";
import { arabic } from "../assets";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Hero = () => {

  const [showLanguage, setShowLanguage] = useState(false)
  const handleLanguageClick=()=>{
    setShowLanguage(true)
  }
  const handleLanguageChange=(code)=>{
    i18n.changeLanguage(code);
    setShowLanguage(false)
  }

  const { t, i18n } = useTranslation();

  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-10 lg:mb-[3.25rem]">
          <h1 className="h1 mb-6">
            {t('world_best')}{" "}
            <span className="inline-block relative">
              {t('generator')}{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-6 justify-center ">
           <Link to='/form' ><button href="/learn-more" className=" px-[80px] continueBtnShadow bg-orange-700 text-white  py-4 font-bold rounded-md transitionC hover:scale-105 ">
               {t('make_plan')}
            </button>
            </Link> 
            <Link to='/register' ><button  href="/pricing"  style={{border:"2px solid #C2410C"}} className="login rounded-md font-bold px-2 py-4 btn-hover-effect hover:scale-105 transitionC   ">
              {t('login')}
            </button>
            </Link>
          </div>

          <div className="mt-10  flex items-center justify-center ">
            <span className="cursor-pointer p-3" onClick={handleLanguageClick}>{t('change_language')}</span>
            {showLanguage && (
              <>
                <img src={english} className="h-6 ms-5 cursor-pointer" onClick={() => handleLanguageChange("en")} alt="English" />
                <img src={arabic} className="h-6 mx-2 cursor-pointer " onClick={() => handleLanguageChange("ar")} alt="Arabic" />
              </>
            )}
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robo}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="flex items-center h-auto sm:h-[3.5rem] px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-full shadow-lg absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-white text-lg animate-bounce" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title={t('plan_generation')}
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
        </div>

        <div className="max-w-[1300px] overflow-hidden">
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;



// Add the following CSS for the hover effects

/*

*/
