// src/components/FirstForm.js
import { useDispatch, useSelector } from 'react-redux';
import { setFirstForm } from '../../features/formSlice';

export default function FirstForm() {
  const dispatch = useDispatch();
  const { firstForm } = useSelector((state) => state.form);

  const handleBusinessTypeChange = (e) => {
    const selectedOption = business.find((option) => option.value === e.target.value);
    dispatch(setFirstForm({ name: 'businessType', value: selectedOption.label }));
  };

  const handleBusinessPlanChange = (e) => {
    const selectedOption = businessOperationalStatus.find((option) => option.value === e.target.value);
    dispatch(setFirstForm({ name: 'businessPlan', value: selectedOption.label }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(firstForm);
  };

  const businessOperationalStatus = [
    { value: "request_fund_investors", label: "To be used to request fund from investors" },
    { value: "request_fund_banks", label: "To be used to request fund from banks" },
    { value: "self_learning", label: "For self-learning" },
    { value: "school_project", label: "To be used as reference for school/university project" },
    { value: "workplace_project", label: "To be used as reference for workplace projects" },
    { value: "non_financial_approval", label: "To be used to submit to a non-financial institution for approval (e.g. getting VISA approval, franchise approval, tenant approval)" },
    { value: "other_reasons", label: "Other reasons" }
  ];

  const business = [
    { value: "Existing_business", label: "Existing business" },
    { value: "Upcoming_unlaunched_business", label: "Upcoming unlaunched business" },
  ];

  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                    <div>
                      <label className="font-bold text-lg text-white">Is this an existing or an upcoming business?</label>
                      <div className="mt-4 space-y-4">
                        {business.map((objective) => (
                          <label key={objective.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input type="radio" name="objective" value={objective.value} checked={firstForm.businessType.answer === objective.label} onChange={handleBusinessTypeChange} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{objective.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">What will you use this business plan for?</label>
                      <div className="mt-4 space-y-4">
                        {businessOperationalStatus.map((status) => (
                          <label key={status.value} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input type="radio" name="status" value={status.value} checked={firstForm.businessPlan.answer === status.label} onChange={handleBusinessPlanChange} className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded" />
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
