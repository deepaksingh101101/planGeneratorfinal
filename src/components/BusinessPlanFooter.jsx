
import image1 from '../assets/services/service-3.png'
export default function BusinessPlanFooter() {
  return (
    <div className=" flex justify-between items-center mx-20  mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg">
      <div className="max-w-4xl mx-5">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Business Plan Generator?</h2>
        <p className="mb-4">
          There are many business plan software out there, including popular ones like LivePlan, PlanBuildr, IdeaBuddy, and Enloop. They all require you to manually write the business plan yourself (LivePlan, IdeaBuddy) or provide you with a very generic template (PlanBuildr, Enloop). Additionally, manual business plan services could easily cost you more than 700 USD for a single plan. Many manual business plan services actually use our product and sell our plans for a large profit. Last we checked on 08/13/2024, 15minuteplan.ai is the only AI Business Plan Generator that can generate up to 10 business plans specifically for you at a fraction of the cost of professional services.
        </p>
        <p className="mb-4">
          We encourage you to try out the other products and see for yourself. If you find a product that makes a business plan that matches our quality and value-for-money, send us a link and you can use our product for free. We've made our product with love and we 100% stand behind it, so we'd be thrilled if you give our product a try.
        </p>
        <p className="font-semibold text-lg">
          Give our AI Business Plan Generator a try and experience the difference!
        </p>
      </div>
      <img src={image1}  style={{maxHeight:"400px"}} alt="" />
    </div>
  );
}
