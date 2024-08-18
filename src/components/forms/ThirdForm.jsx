import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThirdForm, setSuggestions } from '../../features/formSlice';
import { BiRevision } from 'react-icons/bi';
import { getSuggestionsFromOpenAI } from '../../api/openai';

export default function ThirdForm() {
  const dispatch = useDispatch();
  const { thirdForm, firstForm, secondForm, suggestions } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);
  const [fetchedFields, setFetchedFields] = useState({});

  const handleCustomerGroupChange = (e) => {
    const { name, value } = e.target;
    dispatch(setThirdForm({ name, value }));
  };

  const fetchSuggestions = async (field, forceFetch = false) => {
    if (!forceFetch && fetchedFields[field]) return;

    try {
      const formData = {
        firstForm: Object.values(firstForm),
        secondForm: Object.values(secondForm),
      };

      const suggestionsFromAPI = await getSuggestionsFromOpenAI(formData, field);
      dispatch(setSuggestions({ ...suggestions, [field]: suggestionsFromAPI }));
      setFetchedFields({ ...fetchedFields, [field]: true });
    } catch (error) {
      console.error("Failed to fetch suggestions", error);
    }
  };

  const regenerateSuggestions = (field) => {
    setActiveField(field);
    fetchSuggestions(field, true);
  };

  const handleClickField = (field) => {
    if (!fetchedFields[field]) {
      setActiveField(field);
      fetchSuggestions(field);
    } else {
      setActiveField(field);
    }
  };

  const renderSuggestions = (field) => (
    <div className="mt-2 flex flex-col space-y-2">
      {suggestions[field]?.map((suggestion, index) => (
        <div
          key={index}
          className="py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700 w-full text-center"
          onClick={() => dispatch(setThirdForm({ name: field, value: suggestion }))}
        >
          <span className='text-[15px]'>{suggestion}</span>
        </div>
      ))}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(thirdForm);
  };

  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full sm:p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-2 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                    {/* Customer Group 1 */}
                    <div>
                      <h2 className="text-3xl mb-3">Customer Group 1 (required)</h2>
                      <label className="font-bold text-lg text-white">Customer Group 1 Description (required)</label>
                      <input
                        type="text"
                        name="customerGroup1Description"
                        value={thirdForm.customerGroup1Description?.answer || ''}
                        onChange={handleCustomerGroupChange}
                        onClick={() => handleClickField('customerGroup1Description')}
                        required
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'customerGroup1Description' && renderSuggestions('customerGroup1Description')}
                      {activeField === 'customerGroup1Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('customerGroup1Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Customer Group 1 Income Level (required)</label>
                      <div className="mt-4 space-y-4">
                        {['low-income', 'medium-income', 'high-income'].map((level, index) => (
                          <label key={index} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input
                              type="radio"
                              name="customerGroup1IncomeLevel"
                              value={level}
                              checked={thirdForm.customerGroup1IncomeLevel?.answer === level}
                              onChange={handleCustomerGroupChange}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                              required
                            />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.replace('-', ' ')}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Customer Group 2 */}
                    <div>
                      <h2 className="text-3xl my-5">Customer Group 2 (optional)</h2>
                      <label className="font-bold text-lg text-white">Customer Group 2 Description (optional)</label>
                      <input
                        type="text"
                        name="customerGroup2Description"
                        value={thirdForm.customerGroup2Description?.answer || ''}
                        onChange={handleCustomerGroupChange}
                        onClick={() => handleClickField('customerGroup2Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'customerGroup2Description' && renderSuggestions('customerGroup2Description')}
                      {activeField === 'customerGroup2Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('customerGroup2Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Customer Group 2 Income Level (optional)</label>
                      <div className="mt-4 space-y-4">
                        {['low-income', 'medium-income', 'high-income'].map((level, index) => (
                          <label key={index} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input
                              type="radio"
                              name="customerGroup2IncomeLevel"
                              value={level}
                              checked={thirdForm.customerGroup2IncomeLevel?.answer === level}
                              onChange={handleCustomerGroupChange}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.replace('-', ' ')}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Customer Group 3 */}
                    <div>
                      <h2 className="text-3xl my-5">Customer Group 3 (optional)</h2>
                      <label className="font-bold text-lg text-white">Customer Group 3 Description (optional)</label>
                      <input
                        type="text"
                        name="customerGroup3Description"
                        value={thirdForm.customerGroup3Description?.answer || ''}
                        onChange={handleCustomerGroupChange}
                        onClick={() => handleClickField('customerGroup3Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'customerGroup3Description' && renderSuggestions('customerGroup3Description')}
                      {activeField === 'customerGroup3Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('customerGroup3Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Customer Group 3 Income Level (optional)</label>
                      <div className="mt-4 space-y-4">
                        {['low-income', 'medium-income', 'high-income'].map((level, index) => (
                          <label key={index} className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg">
                            <input
                              type="radio"
                              name="customerGroup3IncomeLevel"
                              value={level}
                              checked={thirdForm.customerGroup3IncomeLevel?.answer === level}
                              onChange={handleCustomerGroupChange}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{level.replace('-', ' ')}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
                      Submit
                    </button>
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
