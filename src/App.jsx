import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LanguageSupport from "./components/LanguageSupport";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Testimonies } from "./components/Testimonies";
import WorkFlow from "./components/WorkFlow";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] z-[99] ">
        {/* <Header /> */}
        
        <Hero />
        <Benefits />
        <Testimonies/>
        <div className="companies_mentioned my-16">
          <Companies />
        </div>
    <LanguageSupport/>
        
        <WorkFlow/>
        {/* <Collaboration /> */}
        <Services />
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
