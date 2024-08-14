// src/components/SecondForm.js
import { useDispatch, useSelector } from 'react-redux';
import { setSecondForm } from '../../features/formSlice';

export default function SecondForm() {
  const dispatch = useDispatch();
  const { secondForm } = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSecondForm({ name, value }));
  };

  const handleProductServiceChange = (e) => {
    const selectedOption = productServiceOptions.find((option) => option.value === e.target.value);
    dispatch(setSecondForm({ name: 'productService', value: selectedOption.label }));
  };

  const handleSalesChannelChange = (e) => {
    const selectedOption = salesChannelOptions.find((option) => option.value === e.target.value);
    dispatch(setSecondForm({ name: 'salesChannel', value: selectedOption.label }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(secondForm);
  };

  const productServiceOptions = [
    { value: 'product', label: 'Product' },
    { value: 'service', label: 'Service (retail businesses are considered service)' },
  ];

  const salesChannelOptions = [
    { value: 'online', label: 'Online' },
    { value: 'physical', label: 'Physical Location' },
    { value: 'both', label: 'Both online and physical location' },
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
                    {/* Business Name */}
                    <div>
                      <label className="font-bold text-lg text-white">Your business name (required)</label>
                      <input
                        type="text"
                        name="businessName"
                        value={secondForm.businessName.answer}
                        onChange={handleChange}
                        required
                        className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
                      />
                    </div>

                    {/* Business Description */}
                    <div>
                      <label className="font-bold text-lg text-white">Your business description (required)</label>
                      <textarea
                        name="businessDescription"
                        value={secondForm.businessDescription.answer}
                        onChange={handleChange}
                        required
                        className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
                      ></textarea>
                    </div>

                    {/* Number of Employees */}
                    <div>
                      <label className="font-bold text-lg text-white">Number of employees (required)</label>
                      <input
                        type="number"
                        name="numberOfEmployees"
                        value={secondForm.numberOfEmployees.answer}
                        onChange={handleChange}
                        required
                        className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
                      />
                    </div>

                    {/* Product or Service */}
                    <div>
                      <label className="font-bold text-lg text-white">Do you offer a product or service? (required)</label>
                      <div className="mt-4 space-y-4">
                        {productServiceOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg"
                          >
                            <input
                              type="radio"
                              name="productService"
                              value={option.value}
                              checked={secondForm.productService.answer === option.label}
                              onChange={handleProductServiceChange}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                              required
                            />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Sales Channel */}
                    <div>
                      <label className="font-bold text-lg text-white">How can customer get your product or service? (required)</label>
                      <div className="mt-4 space-y-4">
                        {salesChannelOptions.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center text-white border border-indigo-600 rounded-lg p-4 hover:bg-indigo-800 cursor-pointer transform transition duration-500 hover:scale-105 shadow-lg"
                          >
                            <input
                              type="radio"
                              name="salesChannel"
                              value={option.value}
                              checked={secondForm.salesChannel.answer === option.label}
                              onChange={handleSalesChannelChange}
                              className="form-radio h-5 w-5 text-indigo-600 border-gray-300 rounded"
                              required
                            />
                            <span className="ml-2 text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Customer Location */}
                    <div>
                      <label className="font-bold text-lg text-white">Where do you serve your customers? (required)</label>
                      <input
                        type="text"
                        name="customerLocation"
                        value={secondForm.customerLocation.answer}
                        onChange={handleChange}
                        required
                        className="mt-4 p-4 border border-indigo-600 rounded-lg w-full"
                      />
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
