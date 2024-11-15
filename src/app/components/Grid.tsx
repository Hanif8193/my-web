import React from "react";
import Image from "next/image";
import p1 from "../../../public/1.png";
import p5 from "../../../public/5.png";
import p3 from "../../../public/3.png";
import f3 from "../../../public/Frame_3.png";
import f4 from "../../../public/Frame_4.png";
import f5 from "../../../public/Frame_5.png";


function Grid() {
  return (
    <div
      style={{ backgroundImage: "url('/Bg.png')" }}
      className="bg-cover bg-center"
    >
      <div className=" flex  items-center gap-2 mx-auto  text-white px-5 py-15 ">
        <div className=" text-center">
          {" "}
          <Image src={p1} alt="IMG" width={6000} height={6000} />{" "}
        </div>
        <div className="  text-center">
          {" "}
          <Image src={p5} alt="IMG" width={7000} height={7000} />
        </div>
        <div className="  text-center">
          {" "}
          <Image src={p3} alt="IMG" width={6000} height={6000} />
        </div>
      </div>
      <div>
        <div className="  text-center ">
          {" "}
          <Image src={f3} alt="IMG" width={3000} height={3000} />
        </div>
        <div className="  text-center">
          {" "}
          <Image src={f4} alt="IMG" width={3000} height={3000} />
        </div>
        <div className="  text-center">
          {" "}
          <Image src={f5} alt="IMG" width={3000} height={3000} />
        </div>
      </div>
    </div>
  );
}

export default Grid;

