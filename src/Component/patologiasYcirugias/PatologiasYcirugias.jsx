import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Layout from "../layaout";
// ..
AOS.init();

const PatologiasYcirugias = () => {
  return (
    <Layout>
    <div className="grid grid-cols-1 p-4 sm:grid-cols-1 sm: md:grid-cols-2 lg:grid-cols-3 bg-[#ebe6ea]">
      <div
        className="max-w-sm rounded m-8  overflow-hidden shadow-2xl "
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          className="w-full rounded-lg"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1682964053/artrosis-cadera_zfi3wv.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 bg-[#c8ad8d]">
          <div className="font-bold text-xl mb-2">Artrosis de cadera</div>
          <p className="text-gray-700 text-base">
            La Artrosis de cadera es una enfermedad degenerativa del cartílago
            que recubre la unión de los huesos de la pelvis y el fémur.Cuando el
            cartílago disminuye su grosor o desaparece, se pierde el correcto
            engranaje entre el fémur y el acetábulo, lo que produce la artrosis
            de cadera. El principal indicador de esta patología es el dolor
          </p>
        </div>
      </div>
      <div
        className="max-w-sm rounded m-8 overflow-hidden shadow-2xl"
        data-aos="fade-left"
      >
        <img
          className="w-full rounded-lg"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1681675749/cadera_nsfdtk.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 bg-[#c8ad8d]">
          <div className="font-bold text-xl mb-2">Protesis de cadera</div>
          <p className="text-gray-700 text-base">
            La colocacion de prótesis de cadera es una técnica de cirugía mayor
            que consiste en la sustitución de la cadera desgastada, con artrosis
            o fracturada por una articulación artificial. Las características de
            los materiales empleados en este tipo de prótesis permiten una
            movilidad similar a la de la cadera humana.
          </p>
        </div>
      </div>
      <div
        className="max-w-sm rounded m-8 overflow-hidden shadow-2xl"
        data-aos="fade-left"
      >
        <img
          className="w-full rounded-lg"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1682964097/protesis_hzpq0u.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 bg-[#c8ad8d]">
          <div className="font-bold text-xl mb-2">
            Recambio protesicos de cadera
          </div>
          <p className="text-gray-700 text-base">
            Son Técnicas utilizadas por el traumatologo especialista en cadera
            donde se realiza la extracción de una prótesis de cadera y
            colocación de una nueva por diferentes motivos como la infección, el
            aflojamiento o el desgaste de la protesis.
          </p>
        </div>
      </div>
      <div
        className="max-w-sm rounded m-8 overflow-hidden shadow-2xl"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img
          className="w-full rounded-lg"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1682963983/fractura-cadera_empyzq.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 bg-[#c8ad8d]">
          <div className="font-bold text-xl mb-2">Fractura de cadera</div>
          <p className="text-gray-700 text-base">
            La fractura de cadera es la rotura del hueso del fémur. Los ancianos
            y las personas con osteoporosis tienen un riesgo elevado de fractura
            por la osteoporosis de sus huesos,por lo que una caída pueden ser
            suficiente para que se la provoque. En cambio, las fracturas de
            cadera en personas jóvenes con hueso normal son resultado impactos
            de alta energia como son accidentes de tránsito.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PatologiasYcirugias;
