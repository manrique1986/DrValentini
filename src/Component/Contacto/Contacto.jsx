
import "./Contacto.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {  useNavigate } from "react-router-dom";
import Layout from "../layaout";


const Contacto = () => {

  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3p0k7b",
        "template_0sikl6h",
        form.current,
        "qhEGotbMgonBcwPrk"
      )
      .then(
        (result) => {
          navigate("/home");
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (

    <Layout>
    <form ref={form} onSubmit={sendEmail}>
      <div className=" p-10 fondoContact w-screen h-screen flex justify-center items-center  text-center">
        <div className="w-5/6 h-5/6">
          <h1 className="text-3xl text-white text-center mt-4">Contacto</h1>
          <div className=" mt-8 m-auto w-full md:flex">
            <span className="flex w-full">
              <h2 className="ml-2 text-xl text-white ">Nombre: </h2>
              <input
                aria-label="name"
                className="shadow-xl ml-4 mr-2 bg-transparent border-2 rounded-2xl text-white text-2xl pl-2 w-full outline-none"
                type="text"
                name="user_name"
                id="nombre"
                required
              />
            </span>
            <span className="flex w-full mt-8 md:mt-auto">
              <h2 className="ml-2 text-xl text-white ">Email: </h2>
              <input
                aria-label="email"
                className="shadow-xl ml-4 mr-2 bg-transparent border-2 rounded-2xl text-white text-2xl pl-2 w-full outline-none"
                type="email"
                name="user_email"
                id="email"
                required
              />
            </span>
          </div>

          <div className="flex mt-8 m-auto w-full ">
            <span className="w-full">
              <h2 className="ml-2 text-2xl text-white w-full">Mensaje: </h2>
              <textarea
                aria-label="message"
                className="shadow-xl ml-4 mr-4 bg-transparent border-2 rounded-xl text-white text-2xl pl-2 mt-2  w-11/12 outline-none resize-none h-5/6"
                type=""
                name="message"
                id="mensaje"
              ></textarea>
            </span>
          </div>
          <button
            type="submit"
            value="Send"
            className=" boton text-white px-4 py-2 mt-12 rounded-3xl"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
    </Layout>
  );
};

export default Contacto;
