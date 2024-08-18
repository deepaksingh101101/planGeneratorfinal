
const Footer = () => {
  return (
<div className="flex justify-center ">
    <div className="max-w-4xl flex flex-col justify-center text-white py-10">
        <div className="text-center">
            <h3 className="lg:text-[3.75rem] lg:leading-[4.75rem] mb-3"> Our AI-generated business plan won't disappoint</h3>
            <p> create a business plan in just 15 minutes with our AI business plan generator </p>
            <div className="flex  mt-3 lg:mt-10 justify-center my-10">
            <div className="flex flex-wrap gap-6 justify-center ">
          <button href="/learn-more" className=" px-[70px] continueBtnShadow bg-orange-700 text-white  py-4 font-bold rounded-md transitionC hover:scale-105 ">
               Make Business Plan
            </button>
            <button  href="/pricing"  style={{border:"2px solid #C2410C"}} className="login rounded-md font-bold px-2 py-4 btn-hover-effect hover:scale-105 transitionC  ">
            Login if you've already made a plan
            </button>
           
          </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Tasweegv.ai, 2024. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">Privacy Policy</span>
                <span className="px-2 border-l">Refund Policy</span>
            </div>
        </div>
    </div>
</div>
  );
};

export default Footer;
