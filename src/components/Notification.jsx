const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <p className="text-sm text-white">
          Our AI Business Plan Generator can create a comprehensive business plan for you in under 15 minutes. Fill out simple forms, select your preferred language, and get started on your path to success today!
        </p>
        <div className="flex items-center justify-between mt-2">
          <button
            className="py-1 px-3 bg-navy-500 text-white rounded-md hover:bg-navy-700 transition-all duration-200"
          >
            Try It Now
          </button>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
