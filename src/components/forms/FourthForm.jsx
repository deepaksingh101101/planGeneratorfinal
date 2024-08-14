// src/components/FourthForm.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFourthForm } from '../../features/formSlice';

export default function FourthForm() {
  const dispatch = useDispatch();
  const { fourthForm } = useSelector((state) => state.form);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFourthForm({ name, value }));
  };

  const suggestions = {
    product1Name: ["Example 1", "Example 2", "Example 3", "Example 4"],
    product1Description: ["Description 1 Example 1", "Description 1 Example 2", "Description 1 Example 3", "Description 1 Example 4"],
    product2Name: ["Example 1", "Example 2", "Example 3", "Example 4"],
    product2Description: ["Description 2 Example 1", "Description 2 Example 2", "Description 2 Example 3", "Description 2 Example 4"],
    product3Name: ["Example 1", "Example 2", "Example 3", "Example 4"],
    product3Description: ["Description 3 Example 1", "Description 3 Example 2", "Description 3 Example 3", "Description 3 Example 4"],
    product4Name: ["Example 1", "Example 2", "Example 3", "Example 4"],
    product4Description: ["Description 4 Example 1", "Description 4 Example 2", "Description 4 Example 3", "Description 4 Example 4"],
    product5Name: ["Example 1", "Example 2", "Example 3", "Example 4"],
    product5Description: ["Description 5 Example 1", "Description 5 Example 2", "Description 5 Example 3", "Description 5 Example 4"],
  };

  const renderSuggestions = (field, isDescription) => {
    const itemClass = isDescription ? 'py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700 w-full text-center' : 'py-2 px-5 bg-indigo-800 rounded-lg cursor-pointer hover:bg-orange-700';
    const containerClass = isDescription ? 'mt-2 flex flex-col space-y-2' : 'mt-2 flex items-center justify-between px-20 space-y-2';

    return (
      <div className={containerClass}>
        {suggestions[field].map((suggestion, index) => (
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
                        value={fourthForm.product1Name.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product1Name')}
                        required
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product1Name' && renderSuggestions('product1Name')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 1 Description (optional)</label>
                      <textarea
                        name="product1Description"
                        value={fourthForm.product1Description.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product1Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product1Description' && renderSuggestions('product1Description', true)}
                    </div>

                    {/* Product 2 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 2 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 2 Name (optional)</label>
                      <input
                        type="text"
                        name="product2Name"
                        value={fourthForm.product2Name.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product2Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product2Name' && renderSuggestions('product2Name')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 2 Description (optional)</label>
                      <textarea
                        name="product2Description"
                        value={fourthForm.product2Description.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product2Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product2Description' && renderSuggestions('product2Description', true)}
                    </div>

                    {/* Product 3 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 3 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 3 Name (optional)</label>
                      <input
                        type="text"
                        name="product3Name"
                        value={fourthForm.product3Name.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product3Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product3Name' && renderSuggestions('product3Name')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 3 Description (optional)</label>
                      <textarea
                        name="product3Description"
                        value={fourthForm.product3Description.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product3Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product3Description' && renderSuggestions('product3Description', true)}
                    </div>

                    {/* Product 4 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 4 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 4 Name (optional)</label>
                      <input
                        type="text"
                        name="product4Name"
                        value={fourthForm.product4Name.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product4Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product4Name' && renderSuggestions('product4Name')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 4 Description (optional)</label>
                      <textarea
                        name="product4Description"
                        value={fourthForm.product4Description.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product4Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product4Description' && renderSuggestions('product4Description', true)}
                    </div>

                    {/* Product 5 */}
                    <div>
                      <h2 className="text-3xl mb-3">Product or Service 5 (optional)</h2>
                      <label className="font-bold text-lg text-white">Product or Service 5 Name (optional)</label>
                      <input
                        type="text"
                        name="product5Name"
                        value={fourthForm.product5Name.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product5Name')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      />
                      {activeField === 'product5Name' && renderSuggestions('product5Name')}
                    </div>
                    <div>
                      <label className="font-bold text-lg text-white">Product or Service 5 Description (optional)</label>
                      <textarea
                        name="product5Description"
                        value={fourthForm.product5Description.answer}
                        onChange={handleChange}
                        onClick={() => setActiveField('product5Description')}
                        className="mt-4 p-4 border border-gray-300 rounded-lg w-full"
                      ></textarea>
                      {activeField === 'product5Description' && renderSuggestions('product5Description', true)}
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
