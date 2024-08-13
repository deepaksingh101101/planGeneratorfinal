import ButtonGradient from "../../assets/svg/ButtonGradient";
import Benefits from "../../components/Benefits";
import Companies from "../../components/Companies";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import LanguageSupport from "../../components/LanguageSupport";
import Services from "../../components/Services";
import { Testimonies } from "../../components/Testimonies";
import WorkFlow from "../../components/WorkFlow";



export default function Home() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] z-[99] ">
      {/* <Header /> */}
      
      <Hero />
      <Benefits />
      <Testimonies/>
      <div className="companies_mentioned my-20">
        <Companies />
      </div>
  <LanguageSupport/>
      
      <WorkFlow/>
      {/* <Collaboration /> */}
      <Services />
      {/* <Pricing /> */}
      {/* <Roadmap /> */}
    </div>

    <ButtonGradient />
  </>
  )
}


