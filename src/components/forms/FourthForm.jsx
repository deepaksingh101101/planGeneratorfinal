import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFourthForm, setSuggestions } from '../../features/formSlice';
import { BiRevision } from 'react-icons/bi';
import { getSuggestionsFromOpenAI } from '../../api/openai';

export default function FourthForm() {
  const dispatch = useDispatch();
  const { fourthForm, thirdForm, firstForm, secondForm, suggestions } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);
  const [fetchedFields, setFetchedFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFourthForm({ name, value }));
  };

  const fetchSuggestions = async (field, forceFetch = false) => {
    if (!forceFetch && fetchedFields[field]) return;

    try {
      const formData = {
        firstForm: Object.values(firstForm),
        secondForm: Object.values(secondForm),
        thirdForm: Object.values(thirdForm),
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
    const itemClass =  'py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700 w-full text-center' ;
    const containerClass =  'mt-2 flex flex-col space-y-2' ;

    return (
      <div className={containerClass}>
        {suggestions[field]?.map((suggestion, index) => (
          <div
            key={index}
            className={itemClass}
            onClick={() => dispatch(setFourthForm({ name: field, value: suggestion }))}
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
    console.log(fourthForm);
  };

  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                    {/* Product 1 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 1 (required)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 1 Name (required)</label>
                      <input
                        type="text"
                        name="product1Name"
                        value={fourthForm.product1Name?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product1Name')}
                        required
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product1Name' && renderSuggestions('product1Name')}
                      {activeField === 'product1Name' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product1Name')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 1 Description (optional)</label>
                      <textarea
                        name="product1Description"
                        value={fourthForm.product1Description?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product1Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product1Description' && renderSuggestions('product1Description', true)}
                      {activeField === 'product1Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product1Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Product 2 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 2 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 2 Name (optional)</label>
                      <input
                        type="text"
                        name="product2Name"
                        value={fourthForm.product2Name?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product2Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product2Name' && renderSuggestions('product2Name')}
                      {activeField === 'product2Name' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product2Name')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 2 Description (optional)</label>
                      <textarea
                        name="product2Description"
                        value={fourthForm.product2Description?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product2Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product2Description' && renderSuggestions('product2Description', true)}
                      {activeField === 'product2Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product2Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Product 3 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 3 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 3 Name (optional)</label>
                      <input
                        type="text"
                        name="product3Name"
                        value={fourthForm.product3Name?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product3Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product3Name' && renderSuggestions('product3Name')}
                      {activeField === 'product3Name' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product3Name')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 3 Description (optional)</label>
                      <textarea
                        name="product3Description"
                        value={fourthForm.product3Description?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product3Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product3Description' && renderSuggestions('product3Description', true)}
                      {activeField === 'product3Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product3Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Product 4 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 4 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 4 Name (optional)</label>
                      <input
                        type="text"
                        name="product4Name"
                        value={fourthForm.product4Name?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product4Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product4Name' && renderSuggestions('product4Name')}
                      {activeField === 'product4Name' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product4Name')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 4 Description (optional)</label>
                      <textarea
                        name="product4Description"
                        value={fourthForm.product4Description?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product4Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product4Description' && renderSuggestions('product4Description', true)}
                      {activeField === 'product4Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product4Description')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Product 5 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 5 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 5 Name (optional)</label>
                      <input
                        type="text"
                        name="product5Name"
                        value={fourthForm.product5Name?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product5Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product5Name' && renderSuggestions('product5Name')}
                      {activeField === 'product5Name' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product5Name')}
                          >
                            <BiRevision className='mx-2' />
                            <span> Regenerate Suggestions</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 5 Description (optional)</label>
                      <textarea
                        name="product5Description"
                        value={fourthForm.product5Description?.answer || ''}
                        onChange={handleChange}
                        onClick={() => handleClickField('product5Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product5Description' && renderSuggestions('product5Description', true)}
                      {activeField === 'product5Description' && (
                        <div className="flex justify-center my-3">
                          <button
                            type="button"
                            className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                            onClick={() => regenerateSuggestions('product5Description')}
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
