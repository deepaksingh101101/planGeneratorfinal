// src/components/FirstForm.js
import { useDispatch, useSelector } from 'react-redux';
import { setFirstForm } from '../../features/formSlice';
import { useTranslation } from 'react-i18next';

export default function FirstForm() {
  const dispatch = useDispatch();
  const { firstForm } = useSelector((state) => state.form);

  const handleBusinessTypeChange = (e) => {
    const selectedOption = business.find((option) => option.value === e.target.value);
    if (selectedOption) {
      dispatch(setFirstForm({ name: 'businessType', value: selectedOption.label }));
    }
  };
  
  const handleBusinessPlanChange = (e) => {
    const selectedOption = businessOperationalStatus.find((option) => option.value === e.target.value);
    if (selectedOption) {
      dispatch(setFirstForm({ name: 'businessPlan', value: selectedOption.label }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(firstForm);
  };

  const { t } = useTranslation();

  const businessOperationalStatus = [
    { value: "request_fund_investors", label: t("request_fund_investors") },
    { value: "request_fund_banks", label: t("request_fund_banks") },
    { value: "self_learning", label: t("self_learning") },
    { value: "school_project", label: t("school_project") },
    { value: "workplace_project", label: t("workplace_project") },
    { value: "non_financial_approval", label: t("non_financial_approval") },
    { value: "other_reasons", label: t("other_reasons") }
  ];
  
  const business = [
    { value: "Existing_business", label: t("existing_business") },
    { value: "Upcoming_unlaunched_business", label: t("upcoming_unlaunched_business") },
  ];
  
  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full sm:p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-2 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                    <div>
                      <label className="font-bold text-lg text-white">{t("isThis")}</label>
                      <div className="mt-4 space-y-4">
                        {business.map((objective) => (
                          <label key={objective.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input required type="radio" name="objective" value={objective.value} checked={firstForm.businessType.answer === objective.label} onChange={handleBusinessTypeChange} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{objective.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">{t('whatWill')}</label>
                      <div className="mt-4 space-y-4">
                        {businessOperationalStatus?.map((status) => (
                          <label key={status.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input required type="radio" name="status" value={status.value} checked={firstForm.businessPlan.answer === status.label} onChange={handleBusinessPlanChange} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{status.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
