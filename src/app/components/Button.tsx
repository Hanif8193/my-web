import React from "react";
import Image from "next/image";
import p3 from "/public/poster3.png";
import r from "/public/round.png";

function Button() {
  return (
    <div style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="text-white  px-10 py-5 flex   gap-2 ">
        <button className="bg-yellow-500 flex justify-between items-center gap-2 px-3 rounded-3xl text-black">
          {" "}
          <Image src={p3} alt="img" width={20} height={20} />
          Resturant
        </button>
        <button className="text-white flex justify-between items-center gap-2 px-5  bg-gray-600 rounded-3xl ">
          {" "}
          <Image src={r} alt="round" width={20} height={20}/> Real Estate
        </button>
        <button className="text-white flex justify-between items-center gap-2 px-5  bg-gray-600 rounded-3xl">
          {" "}
          <Image src={r} alt="round" width={20} height={20}/>
           Fashion
        </button>
        <button className="text-white flex justify-between items-center gap-2 px-5  bg-gray-600 rounded-3xl">
          {" "}
          <Image src={r} alt="round" width={20} height={20}/>
          Education
        </button>
        <button className="text-white flex justify-between items-center gap-2 px-5  bg-gray-600 rounded-3xl">
          {" "}
          <Image src={r} alt="round" width={20} height={20}/>
          Banking
        </button>
      </div>
    </div>
  );
}

export default Button;

