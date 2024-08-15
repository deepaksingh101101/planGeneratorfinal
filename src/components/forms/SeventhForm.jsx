import { useDispatch, useSelector } from 'react-redux';
import { setSeventhForm } from '../../features/formSlice';
import { Link } from 'react-router-dom';

export default function SeventhForm() {
  const dispatch = useDispatch();
  const { seventhForm } = useSelector((state) => state.form);

  const calculateCostsAndProfit = (firstYearRevenue, revenueGrowth) => {
    const revenue = parseFloat(firstYearRevenue) || 0;
    const growth = parseFloat(revenueGrowth) || 0;
    
    let totalCost = 0;
    let netProfit = 0;
    let netProfitMargin = 0;

    const updatedCosts = Object.keys(seventhForm.operationsCost).reduce((acc, key) => {
      const percent = parseFloat(seventhForm.operationsCost[key].percent) || 0;
      const total = (percent / 100) * revenue;
      totalCost += total;
      acc[key] = {
        ...seventhForm.operationsCost[key],
        total: total.toFixed(2),
      };
      return acc;
    }, {});

    netProfit = revenue - totalCost;
    netProfitMargin = (netProfit / revenue) * 100;

    dispatch(setSeventhForm({ name: 'operationsCost', value: updatedCosts }));
    dispatch(setSeventhForm({ name: 'firstYearTotalCost', value: totalCost.toFixed(2) }));
    dispatch(setSeventhForm({ name: 'firstYearNetProfit', value: netProfit.toFixed(2) }));
    dispatch(setSeventhForm({ name: 'netProfitMargin', value: netProfitMargin.toFixed(2) }));
  };

  const handleChange = (e, name, subField = null) => {
    const { value } = e.target;
    dispatch(setSeventhForm({ name, value, subField }));

    if (name === 'firstYearRevenue' || name === 'revenueGrowth') {
      const firstYearRevenue = name === 'firstYearRevenue' ? value : seventhForm.firstYearRevenue.answer;
      const revenueGrowth = name === 'revenueGrowth' ? value : seventhForm.revenueGrowth.answer;
      calculateCostsAndProfit(firstYearRevenue, revenueGrowth);
    }
  };

  return (
    <div className="relative min-h-screen grid bg-transparent">
      <div className="flex flex-col items-center justify-center w-full p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
        <div className="w-full space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-full border border-gray-900 rounded-lg px-0 md:px-8 lg:px-8 py-10">
                <form className="flex flex-col space-y-8">
                  <h2 className="text-3xl">Financial Projections</h2>

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">Expected First Year Revenue (required)</label>
                    <input
                      type="number"
                      value={seventhForm.firstYearRevenue.answer}
                      onChange={(e) => handleChange(e, 'firstYearRevenue')}
                      required
                      className="mt-2 block w-full p-3 border border-indigo-600 rounded-md"
                      placeholder=" Enter Expected First Year Revenue ($)"
                    />
                  </div>

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">How much do you expect your revenue to grow each year? (required)</label>
                    <input
                      type="number"
                      value={seventhForm.revenueGrowth.answer}
                      onChange={(e) => handleChange(e, 'revenueGrowth')}
                      required
                      className="mt-2 block w-full p-3 border border-indigo-600 rounded-md"
                      placeholder="Expected growth each year(%)"
                    />
                  </div>

                  <h3 className="mt-10 text-2xl">Enter Yearly Business Operations Cost</h3>
                  {Object.keys(seventhForm.operationsCost).map((key, index) => (
                    <div key={index} className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <label className="text-start font-bold text-lg">{seventhForm.operationsCost[key].question}</label>
                        <div className="flex items-center space-x-4">
                          <div className="relative flex items-center w-full">
                            <span className="absolute left-2 text-gray-400">% </span>
                            <input
                              type="number"
                              value={seventhForm.operationsCost[key].percent}
                              onChange={(e) => handleChange(e, 'operationsCost', key)}
                              className="block w-full pl-8 p-3 border border-indigo-600 rounded-md"
                            />
                          </div>
                          <div className="relative flex items-center w-full">
                            <span className="absolute left-2 text-gray-400">$ </span>
                            <input
                              type="number"
                              value={seventhForm.operationsCost[key].total}
                              className="block w-full pl-8 p-3 border border-indigo-600 rounded-md"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                      {seventhForm.operationsCost[key].description && (
                        <p className="text-sm text-gray-400 mt-2">{seventhForm.operationsCost[key].description}</p>
                      )}
                    </div>
                  ))}

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">Your First Year Total Cost is:</label>
                    <div className="relative flex items-center w-full">
                      <span className="absolute left-2 text-gray-400">$ </span>
                      <input
                        type="number"
                        value={seventhForm.firstYearTotalCost.answer}
                        className="mt-2 block w-full pl-8 p-3 border border-indigo-600 rounded-md"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">Your First Year Net Profit is:</label>
                    <div className="relative flex items-center w-full">
                      <span className="absolute left-2 text-gray-400">$ </span>
                      <input
                        type="number"
                        value={seventhForm.firstYearNetProfit.answer}
                        className="mt-2 block w-full pl-8 p-3 border border-indigo-600 rounded-md"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">Your Net Profit Margin is:</label>
                    <div className="relative flex items-center w-full">
                      <span className="absolute left-2 text-gray-400">% </span>
                      <input
                        type="number"
                        value={seventhForm.netProfitMargin.answer}
                        className="mt-2 block w-full pl-8 p-3 border border-indigo-600 rounded-md"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className='flex justify-start flex-col'>
                    <label className="font-bold text-lg text-start">Select plan language (required)</label>
                    <select
                      value={seventhForm.planLanguage.answer}
                      onChange={(e) => handleChange(e, 'planLanguage')}
                      required
                      className="mt-2 block w-full p-3 border border-indigo-600 rounded-md  appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                      <option value="" disabled>Select Language</option>
                      <option  value="English">English</option>
                      <option  value="Arabic">Arabic</option>
                    </select>
                  </div>

                  <Link className='w-full flex justify-end' to="/generatePlan" > 
<button className="animated-button">
  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
                    <span className='text' >Generate Plan</span>
  <span className="circle"></span>
  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>


               
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
