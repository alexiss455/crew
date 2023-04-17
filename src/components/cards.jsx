import React from "react";
import p1 from "../images/photo1.png";
import p2 from "../images/photo2.png";
import p3 from "../images/photo3.png";
import p4 from "../images/photo4.png";
import p5 from "../images/photo5.png";
import p6 from "../images/photo6.png";

function cards() {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-14 mt-12">
      <div className="font-bold m-auto">
        <div className="flex flex-row gap-x-6 mb-4">
          <img src={p1} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>

        <div className="flex flex-row gap-x-6 mb-4 mt-[4rem]">
          <img src={p4} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>
      </div>

      <div className="font-bold m-auto md:pt-[6rem]">
        <div className="flex flex-row gap-x-6 mb-4 ">
          <img src={p2} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>

        <div className="flex flex-row gap-x-6 mb-4 mt-[4rem]">
          <img src={p5} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>
      </div>

      <div className="font-bold m-auto">
        <div className="flex flex-row gap-x-6 mb-4 ">
          <img src={p3} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>

        <div className="flex flex-row gap-x-6 mb-4 mt-[4rem]">
          <img src={p6} alt="gri_pohto" width={250} />
          <p style={{ writingMode: "vertical-lr" }}>Product Owner</p>
        </div>
        <p>Bill Mohoney</p>
      </div>
    </div>
  );
}

export default cards;
