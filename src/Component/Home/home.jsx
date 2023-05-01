import React from "react";

const home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1   md:grid-cols-1 lg:grid-cols-2 ">
      <div className="">
        <p className="text-center pt-44 p-20 text-3xl italic hyphens-manual">Traumatologo especialista en cadera</p>
      </div>

      <div className="">
        <img className=" p-4 w-8/12 rounded-full  "
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1680568914/roberto-valentini_ldp5bs.jpg"
          alt="texto"
        />
      </div>
    </div>
  );
};

export default home;
