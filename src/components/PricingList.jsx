import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-4 py-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto"
        >
          <h4 className="h4 mb-3">{item.title}</h4>

          <p className="body-2 min-h-[3rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[4.5rem] mb-4">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[4rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-4"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img src={check} width={20} height={20} alt="Check" />
                <p className="body-2 ml-3">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
