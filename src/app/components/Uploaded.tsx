import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { fonts } from "../fonts"; 
const Uploaded = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center px-8 py-9 bg-white rounded-xl shadowcard w-96 h-card">
        <div className={fonts.poppins.className + " flex flex-col justify-between items-center min-h-full"}>
          <BsFillCheckCircleFill color={"green"} size={"42px"}/>
          <h1 className="title gray-2">Uploaded Successfully</h1>
          <Image
            src={"/image.svg"}
            alt="image"
            width={338}
            height={224}
          />
          <div className="flex flex-row items-center rounded-lg border w-80 h-8 gray-5 px-0.5 py-0.5">
            <p className="truncate justify-self-start ms-1 me-1 btn-text-1 gray-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aperiam debitis, perferendis accusamus ipsum tempora, blanditiis veritatis consequatur temporibus omnis, corporis pariatur ullam expedita quas fuga repellat quidem? Eos, cupiditate.</p>
            <button className="h-full rounded-lg blue-1 w-full flex justify-center items-center border-0.5 border-r-0.5 border-gray-5 hover:border-gray-4 focus:outline-none focus:border-gray-4 focus:bg-gray-4 focus:text-gray-1 transition-all duration-200 ease-in-out cursor-pointer">
              <p className={fonts.poppins.className + " btn-text-1"}>Copy link</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
