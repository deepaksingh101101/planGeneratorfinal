import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Collaboration from "./components/Collaboration";

import Home from "./pages/home/Home";
import Form from "./pages/form/FormPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
