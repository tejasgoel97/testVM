import React from "react";

function Advantage({ content, heading, subHeading }) {
  console.log("ADV", content);
  return (
    <div>
      <div className="bg-success py-4">
        <div className="container text-white text-center py-4">
          <h2>{heading}</h2>
          <span className="w-70">{subHeading}</span>
          <div className="row text-lg-left">
            {content.map((item) => {
              return (
                <div className="col-lg-6 pt-4">
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        src={item.icon}
                        srcset="
                    https://www.swyftfilings.com/assets2/images/ico07.png 2x
                  "
                        alt=""
                        width="55"
                        height="60"
                      />
                    </div>
                    <div className="col-lg-10">
                      <h5 className="text-lg-start">{item.heading}</h5>
                      <p className="text-lg-start">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
