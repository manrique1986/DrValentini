import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home/home.jsx";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMi from "./Component/SobreMi/SobreMi";
import PatologiasYcirugias from "./Component/patologiasYcirugias/PatologiasYcirugias";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/PatologiasYcirugias" element={<PatologiasYcirugias />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
