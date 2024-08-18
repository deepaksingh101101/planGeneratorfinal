import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSixthForm, setSuggestions } from '../../features/formSlice';
import { BiRevision } from 'react-icons/bi';
import { getSuggestionsFromOpenAI } from '../../api/openai';

export default function SixthForm() {
  const dispatch = useDispatch();
  const { sixthForm, firstForm, secondForm, thirdForm, fourthForm, fifthForm, suggestions } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);
  const [fetchedFields, setFetchedFields] = useState({});

  // Define the available currencies
  const currencies = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    { value: 'INR', label: 'INR - Indian Rupee' },
    // Add more currencies as needed
  ];

  // Calculate total investment
  const totalInvestment = sixthForm.investmentItems.reduce((total, item) => total + parseFloat(item.amount.answer || 0), 0);

  const handleChange = (e, index, type) => {
    const { value } = e.target;
    const updatedItems = [...sixthForm.investmentItems];
    updatedItems[index] = { ...updatedItems[index], [type]: { ...updatedItems[index][type], answer: value } };
    dispatch(setSixthForm({ name: 'investmentItems', value: updatedItems }));
  };

  const handleSuggestionClick = (value, index, type) => {
    const updatedItems = [...sixthForm.investmentItems];
    updatedItems[index] = { ...updatedItems[index], [type]: { ...updatedItems[index][type], answer: value } };
    dispatch(setSixthForm({ name: 'investmentItems', value: updatedItems }));
  };

  const fetchSuggestions = async (field, forceFetch = false) => {
    if (!forceFetch && fetchedFields[field]) return;

    try {
      const formData = {
        firstForm: Object.values(firstForm),
        secondForm: Object.values(secondForm),
        thirdForm: Object.values(thirdForm),
        fourthForm: Object.values(fourthForm),
        fifthForm: Object.values(fifthForm),
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

  const renderSuggestions = (field, index, type) => {
    return (
      <div className="mt-2 flex flex-col space-y-2">
        {suggestions[field]?.map((suggestion, idx) => (
          <div
            key={idx}
            className="py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700 w-full text-center"
            onClick={() => handleSuggestionClick(suggestion, index, type)}
          >
            <span className='text-[15px]'>{suggestion}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedCurrency: sixthForm.selectedCurrency.answer,
      investmentItems: sixthForm.investmentItems,
      totalInvestment,
    });
  };

  // Function to add a new investment item
  const addInvestmentItem = () => {
    dispatch(setSixthForm({ name: 'investmentItems', value: [...sixthForm.investmentItems, { item: { question: '', answer: '' }, amount: { question: '', answer: '' } }] }));
  };

  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 w-full">
        <div className="md:flex md:items-center md:justify-left w-full sm:p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-2 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                    <h2 className="ms-16 mt-10 text-3xl">
                      Enter Currency and Initial Investment Details
                      <span className="text-sm text-gray-400 mb-4">
                        (for businesses investing in something)
                      </span>
                    </h2>

                    {/* Select Currency */}
                    <div>
                      <label className="font-bold text-lg">
                        Select plan currency <span className="text-[#c2410c] text-xs">(required)</span>
                      </label>
                      <select
                        value={sixthForm.selectedCurrency.answer}
                        onChange={(e) => handleChange(e, null, 'selectedCurrency')}
                        className="mt-2 block w-full p-3 border border-indigo-600 rounded-md"
                        required
                      >
                        <option value="" disabled>
                          Currency
                        </option>
                        {currencies.map((currency) => (
                          <option key={currency.value} value={currency.value}>
                            {currency.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">
                      Note: If your business sells a physical product, don't include the cost of making or buying the first batch of product in your initial investment. You should list this expense under "Cost of Goods Sold (COGS)" on the next page.
                    </p>

                    {/* Investment Items */}
                    <div>
                      <label className="font-bold text-lg">
                        What will you spend your initial investment on?
                      </label>
                      <div className="mt-4">
                        {sixthForm.investmentItems.map((investment, index) => (
                          <div key={index} className="mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-1">
                                <input
                                  type="text"
                                  placeholder={`Investment Item ${index + 1}`}
                                  value={investment.item.answer}
                                  onChange={(e) => handleChange(e, index, 'item')}
                                  onClick={() => handleClickField(`investmentItem${index + 1}`)}
                                  className="block w-full p-3 border border-indigo-600 rounded-md"
                                />
                              </div>
                              <div className="flex-1">
                                <input
                                  type="number"
                                  placeholder="Amount"
                                  value={investment.amount.answer}
                                  onChange={(e) => handleChange(e, index, 'amount')}
                                  className="block w-full p-3 border border-indigo-600 rounded-md"
                                />
                              </div>
                            </div>
                            {activeField === `investmentItem${index + 1}` && (
                              <div>
                                {renderSuggestions(`investmentItem${index + 1}`, index, 'item')}
                                <div className="flex justify-center my-3">
                                  <button
                                    type="button"
                                    className="mt-4 flex items-center justify-between px-3 border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold hover:bg-indigo-800 transform transition duration-500 hover:scale-105 shadow-lg"
                                    onClick={() => regenerateSuggestions(`investmentItem${index + 1}`)}
                                  >
                                    <BiRevision className='mx-2' />
                                    <span> Regenerate Suggestions</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Add New Investment Item Button */}
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={addInvestmentItem}
                        className="login rounded-md font-bold px-2 py-4 btn-hover-effect hover:scale-105 transitionC"
                        style={{ border: '2px solid rgb(194, 65, 12)' }}
                      >
                        Add new investment item
                      </button>
                    </div>

                    {/* Total Initial Investment */}
                    <div className="text-lg font-bold text-center mt-4">
                      Total Initial Investment: {totalInvestment.toFixed(2)}
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
