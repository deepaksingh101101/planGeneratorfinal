import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LanguageSupport from "./components/LanguageSupport";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Testimonies } from "./components/Testimonies";
import WorkFlow from "./components/WorkFlow";
import FormPage from "./pages/form/FormPage";

const HomePage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] z-[99] ">
        <Header />
        <Hero />
        <Benefits />
        <Testimonies />
        <div className="companies_mentioned my-20">
          <Companies />
        </div>
        <LanguageSupport />
        <WorkFlow />
        <Services />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
