import React from "react";
import Image from "next/image";
import { fonts } from "../fonts";


const Uploader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center px-8 py-9 bg-white rounded-xl shadowcard w-96 h-card">
        <div
          className={
            fonts.poppins.className +
            " flex flex-col justify-between items-center min-h-full upload-image"
          }
        >
          <h1 className="title gray-2">Upload your image</h1>
          <h2 className="subtitle gray-3">File should be Jpeg, Png,...</h2>
          <div className="bg-image-picker rounded-xl border-1 flex flex-col items-center justify-evenly w-80 h-52">
            <Image
              src={"/image.svg"}
              alt="image"
              width={115}
              height={90}
              priority
            />
            <p className="gray-4">Drag and drop your image</p>
          </div>
          <p className="gray-4">Or</p>
          <label
            htmlFor="upload-btn"
          >
            <div className="blue-1 rounded-lg px-4 py-2 hover:cursor-pointer">
              <p className={fonts.noto_sans.className + " btn-text"}>Choose file</p>
            </div>
          </label>
          <input
            type="file"
            id="upload-btn"
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Uploader;
