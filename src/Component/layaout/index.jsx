import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import NavBar from "../Dashboard";
import Navbar from "../NavBar";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
        case "a":
            setTitle()
       
        break;
      case "/home":
        setTitle("Dr Valentini");
        break;
      case "/SobreMi":
        setTitle("Sobre mi");
        break;
      case "/PatologiasYcirugias":
        setTitle("Patologias y cirugias");
        break;
      case "/contacto":
        setTitle("Contacto");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full z-10">
      {" "}
      {/**  h-screen*/}
      <NavBar open={open} setOpen={setOpen} />
      <Navbar menu={() => setOpen(!open)} dato={title} />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
