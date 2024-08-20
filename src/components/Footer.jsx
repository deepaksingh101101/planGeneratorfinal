import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
<div className="flex justify-center ">
    <div className="max-w-4xl flex flex-col justify-center text-white py-10">
        <div className="text-center">
            <h3 className="lg:text-[3.75rem] lg:leading-[4.75rem] mb-3">{t('Footer_heading')}</h3>
            <p> {t('Footer_subheading')}</p>
            <div className="flex  mt-3 lg:mt-10 justify-center my-10">
            <div className="flex flex-wrap gap-6 justify-center ">
          <button href="/learn-more" className=" px-[70px] continueBtnShadow bg-orange-700 text-white  py-4 font-bold rounded-md transitionC hover:scale-105 ">
               {t('button1')}
            </button>
            <button  href="/pricing"  style={{border:"2px solid #C2410C"}} className="login rounded-md font-bold px-2 py-4 btn-hover-effect hover:scale-105 transitionC  ">
            {t('button2')}
            </button>
           
          </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; {t('copyright')} </p>
            <div className="order-1 md:order-2">
                <span className="px-2">{t('privacy_policy')}</span>
                <span className="px-2 border-l">{t('refund')}</span>
            </div>
        </div>
    </div>
</div>
  );
};

export default Footer;
