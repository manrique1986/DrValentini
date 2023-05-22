import React from "react";


const home = () => {
  return (

 

    <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-1 lg:grid-cols-2 bg-[#ebe6ea] ">
      <div className="">
        <p className=" pt-44 p-20 text-3xl italic ">Traumatologo especialista en cadera</p>
      </div>

      <div className="">
        <img className=" rounded-full w-96 h-96  "
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1680568914/roberto-valentini_ldp5bs.jpg"
          alt="texto"
        />
      </div>
    </div>
  );
};

export default home;
