import React from "react";

const home = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <p className="text-center pt-44 p-56 text-3xl italic hyphens-manual">Traumatologo especialista en cadera</p>
      </div>

      <div className=" basis-3/5">
        <img className="float-right pt-14 p-8 w-8/12 rounded-full"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1680568914/roberto-valentini_ldp5bs.jpg"
          alt="texto"
        />
      </div>
    </div>
  );
};

export default home;
