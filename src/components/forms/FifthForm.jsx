// src/components/FifthForm.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFifthForm } from '../../features/formSlice';

export default function FifthForm() {
  const dispatch = useDispatch();
  const { fifthForm } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFifthForm({ name, value }));
  };

  const suggestions = {
    successDriver1: ["Success Driver 1 Example 1", "Success Driver 1 Example 2", "Success Driver 1 Example 3", "Success Driver 1 Example 4"],
    successDriver2: ["Success Driver 2 Example 1", "Success Driver 2 Example 2", "Success Driver 2 Example 3", "Success Driver 2 Example 4"],
    successDriver3: ["Success Driver 3 Example 1", "Success Driver 3 Example 2", "Success Driver 3 Example 3", "Success Driver 3 Example 4"],
    weakness1: ["Weakness 1 Example 1", "Weakness 1 Example 2", "Weakness 1 Example 3", "Weakness 1 Example 4"],
    weakness2: ["Weakness 2 Example 1", "Weakness 2 Example 2", "Weakness 2 Example 3", "Weakness 2 Example 4"],
    weakness3: ["Weakness 3 Example 1", "Weakness 3 Example 2", "Weakness 3 Example 3", "Weakness 3 Example 4"],
  };

  const renderSuggestions = (field) => {
    return (
      <div className="mt-2 flex flex-col space-y-2">
        {suggestions[field].map((suggestion, index) => (
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
        <div className="md:flex md:items-center md:justify-left w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
          <div className="w-full space-y-12">
            <div className="lg:text-left text-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-8 mt-10">
                    {/* Success Drivers */}
                    <div>
                      <h2 className="text-3xl mb-3">Success Driver</h2>
                      <label className="font-bold text-lg text-white">Success Driver 1 (required)</label>
                      <input
                        type="text"
                        name="successDriver1"
                        value={fifthForm.successDriver1.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('successDriver1')}
                        required
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver1' && renderSuggestions('successDriver1')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Success Driver 2 (optional)</label>
                      <input
                        type="text"
                        name="successDriver2"
                        value={fifthForm.successDriver2.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('successDriver2')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver2' && renderSuggestions('successDriver2')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Success Driver 3 (optional)</label>
                      <input
                        type="text"
                        name="successDriver3"
                        value={fifthForm.successDriver3.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('successDriver3')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'successDriver3' && renderSuggestions('successDriver3')}
                    </div>

                    {/* Weaknesses */}
                    <div>
                      <h2 className="text-3xl mb-3">Weakness</h2>
                      <label className="font-bold text-lg text-white">Weakness 1 (optional)</label>
                      <input
                        type="text"
                        name="weakness1"
                        value={fifthForm.weakness1.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('weakness1')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness1' && renderSuggestions('weakness1')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Weakness 2 (optional)</label>
                      <input
                        type="text"
                        name="weakness2"
                        value={fifthForm.weakness2.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('weakness2')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness2' && renderSuggestions('weakness2')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Weakness 3 (optional)</label>
                      <input
                        type="text"
                        name="weakness3"
                        value={fifthForm.weakness3.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('weakness3')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'weakness3' && renderSuggestions('weakness3')}
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
