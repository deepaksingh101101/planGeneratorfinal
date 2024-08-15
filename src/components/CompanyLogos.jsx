import { useTranslation } from 'react-i18next';
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  const { t } = useTranslation(); // Hook to handle translations

  return (
    <div className={`${className} company-logos-container`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        {t('helping_people')}
      </h5>
      <div className="logos-wrapper">
        <ul className="logos-list">
          {companyLogos.map((logo, index) => (
            <li
              className="logo-item flex items-center justify-center"
              key={index}
            >
              <img src={logo} alt={`Logo ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
