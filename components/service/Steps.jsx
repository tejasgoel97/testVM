import React from "react";

function Steps({ content, heading }) {
  console.log(heading, content);
  return (
    <div className="">
      <div className="container">
        <h3 className="text-center pt-4">{heading}</h3>
        {content.map((item) => {
          if (item.type === "p") {
            return (
              <div key={item.content} className="text-center">
                {item.content}
              </div>
            );
          } else if (item.type === "points") {
            return (
              <div className="my-2">
                {item.content.map((point, index) => {
                  return (
                    <div key={point} className="m-2 p-2 row">
                      <button className="btn btn-secondary col-2">
                        Step {index}
                      </button>
                      <div className="col">
                        <p>{point}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Steps;
