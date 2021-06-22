import React from "react";

export default function Documents(props) {
  console.log(props);
  return (
    <div className="w-100 py-4 container">
      <div className="py-4 ">
        <h3 className="text-center">{props.heading}</h3>
        <div className="row py-4">
          {props.content.map((card) => {
            return (
              <div className=" col-md-6 col-lg-4 p-2 ">
                <div className="p-2 card shadow-sm">
                  <h6>
                    <i className="fontawsome-icon fa-file far circle-no m-2"></i>
                    {card.heading}
                  </h6>
                  <p>{card.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
