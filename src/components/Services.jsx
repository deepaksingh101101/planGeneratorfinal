import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check,ai } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t} = useTranslation();
  
  const Services_tools = [
    t('Service1'),
    t('Service2'),
    t('Service3'),
    
  ];
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={t('Tasweeqy_AI_title')}
          text={t('Tasweeqy_AI_subtitle')}
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right hidden md:inline "
                width={800}
                alt="Smartest AI"
                height={730}
                src={ai}
              />
            </div>

            <div className="relative z-1 md:max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">{t('Tasweeqy_AI_tool')} </h4>
              <p className="body-2 mb-[3rem] text-n-3">
              {t('Tasweeqy_AI_tool_text')} 
              </p>
              <ul className="body-2">
                {Services_tools.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} className="animate-pulse" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="flex items-center h-auto sm:h-[3.5rem] px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-full shadow-lg absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-white text-lg animate-bounce" />
          </div>

         

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
