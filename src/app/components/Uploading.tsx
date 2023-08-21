import React from "react";
import { fonts } from "../fonts";

const Uploading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-evenly h-36 w-96 shadowcard rounded-xl px-8">
        <p className={fonts.poppins.className + " uploading-text"}>
          Uploading...
        </p>
        <div className="progress-bar">
          <div className="progress-bar-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Uploading;
