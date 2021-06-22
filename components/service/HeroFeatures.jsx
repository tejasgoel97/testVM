import React from "react";

export default function HeroFeatures() {
  return (
    <div>
      <div className="row d-flex justify-content-around">
        <div className="col-sm-4 mb-3 text-center">
          <i>
            <img
              src="https://www.swyftfilings.com/assets2/images/lulu-building.png"
              height="100px"
              width="100px"
            ></img>
          </i>
          <h5 className="text-white">Provide business details</h5>
          <p className="d-block d-sm-none">
            Forming your C Corporation doesn’t need to be complex or
            time-consuming. With our easy online form, you can be done in as few
            as 10 minutes.
          </p>
        </div>
        <div className="col-sm-4 mb-5 text-center">
          <i>
            <img
              src="https://www.swyftfilings.com/assets2/images/lulu-pencil.png"
              height="100px"
              width="100px"
            ></img>
          </i>
          <h5 className="text-white">We file the paperwork</h5>
          <p className="d-block d-sm-none">
            Forming your C Corporation doesn’t need to be complex or
            time-consuming. With our easy online form, you can be done in as few
            as 10 minutes.
          </p>
        </div>
        <div className="col-sm-4 mb-5 text-center">
          <i>
            <img
              src="https://www.swyftfilings.com/assets2/images/lulu-documents.png"
              height="100px"
              width="100px"
            ></img>
          </i>
          <h5 className="text-white">Receive your documents</h5>
          <p className="d-block d-sm-none">
            Forming your C Corporation doesn’t need to be complex or
            time-consuming. With our easy online form, you can be done in as few
            as 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
