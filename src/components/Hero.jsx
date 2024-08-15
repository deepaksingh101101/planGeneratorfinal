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
const Hero = () => {

  const [showLanguage, setShowLanguage] = useState(false)
  const handleLanguageClick=()=>{
    setShowLanguage(true)
  }
  const handleLanguageChange=(ln)=>{
    setShowLanguage(false)
  }


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
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            World's Best AI Business Plan{" "}
            <span className="inline-block relative">
              Generator{" "}
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
            Fill out simple forms, select language, and get a business plan in under 15 minutes. Try It Out!
          </p>
          <div className="flex flex-wrap gap-6 justify-center ">
          <button href="/learn-more" className=" px-[80px] continueBtnShadow bg-orange-700 text-white  py-4 font-bold rounded-md transitionC hover:scale-105 ">
               Make Business Plan
            </button>
            <button  href="/pricing"  style={{border:"2px solid #C2410C"}} className="login rounded-md font-bold px-2  btn-hover-effect hover:scale-105 transitionC  ">
            Login if you've already made a plan
            </button>
           
          </div>

<div className="mt-5  flex items-center justify-center ">
<span className="cursor-pointer" onClick={handleLanguageClick}  >Change Language</span>
{showLanguage && <><img src={english} className="h-6 ms-5 cursor-pointer" onClick={()=>handleLanguageChange("en")}  alt="English" />
<img src={arabic} className="h-6 mx-2 cursor-pointer " onClick={()=>handleLanguageChange("ar")}  alt="English" />
</>
}
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

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Plan generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          {/* <BackgroundCircles /> */}
        </div>

<div className="max-w-[1300px] overflow-hidden">
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
</div>

{/* <WhoIsThisFor/> */}

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;

// Add the following CSS for the hover effects

/*

*/
