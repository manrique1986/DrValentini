import React from "react";
import Layout from "../layaout";


const home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-1 lg:grid-cols-2 bg-[#ebe6ea] ">
        <div className="">
          <img src="https://res.cloudinary.com/dytpump6i/image/upload/v1686783111/Dr._Roberto_Valentini_5_mwukkk.png" alt="drValentini" />
        </div>

        <div className="">
          <img
            className=" rounded-3xl p-4 w-96 h-96  "
            src="https://res.cloudinary.com/dytpump6i/image/upload/v1680568914/roberto-valentini_ldp5bs.jpg"
            alt="texto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default home;
