import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Collaboration from "./components/Collaboration";

import Home from "./pages/home/Home";
import Form from "./pages/form/FormPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneratePlan from "./pages/plan/GeneratePlan";
import Login from "./pages/login/Login";
import Sign from "./pages/sign/Sign";
import {IsLoggedIn} from "./middlewares/IsLoggedIn";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/generatePlan" element={<GeneratePlan />} />
        {/* <Route path="/register" element={<Login />} /> */}
        {/* <Route path="/sign" element={<Sign />} /> */}
        <Route path="/register" element={
          <IsLoggedIn>
          <Login/>
          </IsLoggedIn>
          }/>
        <Route path="/sign" element={
          <IsLoggedIn>
          <Sign/>
          </IsLoggedIn>
          }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
