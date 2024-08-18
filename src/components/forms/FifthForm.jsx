import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFifthForm, setSuggestions } from '../../features/formSlice';
import { BiRevision } from 'react-icons/bi';
import { getSuggestionsFromOpenAI } from '../../api/openai';

export default function FifthForm() {
  const dispatch = useDispatch();
  const { fifthForm, firstForm, secondForm, thirdForm, fourthForm, suggestions } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);
  const [fetchedFields, setFetchedFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFifthForm({ name, value }));
  };

  const fetchSuggestions = async (field, forceFetch = false) => {
    if (!forceFetch && fetchedFields[field]) return;

    try {
      const formData = {
        firstForm: Object.values(firstForm),
        secondForm: Object.values(secondForm),
        thirdForm: Object.values(thirdForm),
        fourthForm: Object.values(fourthForm),
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

  const renderSuggestions = (field) => {
    return (
      <div className="mt-2 flex flex-col space-y-2">
        {suggestions[field]?.map((suggestion, index) => (
          <div
            key={index}
            className="py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700 w-full text-center"
            onClick={() => dispatch(setFifthForm({ name: field, value: suggestion }))}
          >
            <span className='text-[15px]'>{suggestion}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(fifthForm);
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
                    {/* Success Drivers */}
                    <div>
                      <h2 className="text-3xl mb-3">Success Driver</h2>
                      <label className="font-bold text-lg text-white">Success Driver 1 (required)</label>
                      <input
                        type="text"
                        name="successDriver1"
                        value={fifthForm.successDriver1?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('successDriver1')}
                        required
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver1' && renderSuggestions('successDriver1')}
                      {activeField === 'successDriver1' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('successDriver1')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Success Driver 2 (optional)</label>
                      <input
                        type="text"
                        name="successDriver2"
                        value={fifthForm.successDriver2?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('successDriver2')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver2' && renderSuggestions('successDriver2')}
                      {activeField === 'successDriver2' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('successDriver2')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Success Driver 3 (optional)</label>
                      <input
                        type="text"
                        name="successDriver3"
                        value={fifthForm.successDriver3?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('successDriver3')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver3' && renderSuggestions('successDriver3')}
                      {activeField === 'successDriver3' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('successDriver3')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Weaknesses */}
                    <div>
                      <h2 className="text-3xl mb-3">Weakness</h2>
                      <label className="font-bold text-lg text-white">Weakness 1 (optional)</label>
                      <input
                        type="text"
                        name="weakness1"
                        value={fifthForm.weakness1?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('weakness1')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness1' && renderSuggestions('weakness1')}
                      {activeField === 'weakness1' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('weakness1')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Weakness 2 (optional)</label>
                      <input
                        type="text"
                        name="weakness2"
                        value={fifthForm.weakness2?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('weakness2')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness2' && renderSuggestions('weakness2')}
                      {activeField === 'weakness2' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('weakness2')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Weakness 3 (optional)</label>
                      <input
                        type="text"
                        name="weakness3"
                        value={fifthForm.weakness3?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('weakness3')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness3' && renderSuggestions('weakness3')}
                      {activeField === 'weakness3' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('weakness3')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
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
