import { loading } from "../assets";
import { useTranslation } from 'react-i18next';

const Generating = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-full shadow-lg ${className || ""} text-white text-lg animate-bounce`}
    >
      <img className="w-6 h-6 mr-4 animate-spin" src={loading} alt={t('loading')} />
      {t('generateBusinessPlan')}
    </div>
  );
};

export default Generating;
