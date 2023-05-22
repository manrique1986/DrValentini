import React from "react";
import "../Footer/footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Consultorio</h4>
              <p className="text-gray-500">
                <FaLocationArrow /> Paraguay 1465 Buenos aires <br></br>
                <strong>Telefono:</strong> 0115-2520295 <br />
                <strong>Email:</strong> rr_valentini@yahoo.com <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4"> Coberturas</h4>
              <ul className="text-gray-500">
                <li className=" hover:text-yellow-500 pb-4"> Osde</li>
                <li className=" hover:text-yellow-500 pb-4">Medicus</li>
                <li className=" hover:text-yellow-500 pb-4">Particulares</li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4"> Sociedades</h4>
              <ul className="text-gray-500">
                <li className="pb-4">AAOT</li>
                <li className="pb-4">ACARO</li>
                <li className="pb-4">AAOS</li>
              </ul>
            </div>
            <div className=" text-xl text-white mb-2 text-center ">
              <li className=" cursor-pointer w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600  mx-1 inline-block pt-2 p-2 ">
                <FaFacebook />{" "}
              </li>
              <li className=" cursor-pointer w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                {" "}
                <FaInstagram />
              </li>
              <li className=" cursor-pointer w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                <FaTwitter />
              </li>
              <li className=" cursor-pointer w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                <FaYoutube />
              </li>
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500  ">
        <div className=" flex justify-center flex-col sm:flex-row py-4 mx-auto ">
          <div className="text-center">
            <div>
              copyright{" "}
              <strong>
                <span>company</span>
              </strong>
              . all rights reserved
            </div>
            <div>
              designed by <strong><span className="text-yellow-600 opacity-50">MartiniL</span></strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
