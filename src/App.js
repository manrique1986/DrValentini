import "./App.css";
import Home from "./Component/Home/home.jsx";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMi from "./Component/SobreMi/SobreMi";
import PatologiasYcirugias from "./Component/patologiasYcirugias/PatologiasYcirugias";
import Contacto from "./Component/Contacto/Contacto";
import Email from "./Component/Email/Email";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/email" element={<Email/>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/PatologiasYcirugias" element={<PatologiasYcirugias />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
