import React from "react";
import Data from "./sampleData";
import Documents from "./Documents";
import Advantage from "./Advantage";
import Steps from "./Steps";

function MainContent() {
  return (
    <div className="py-4 bg-light border-top border-bottom border-primary">
      <div className="py-4 ">
        {Data.map((section) => {
          if (section.type === "Main Heading") {
            return (
              <div className="container">
                {section.content.map((subSection) => {
                  if (subSection.type === "h1") {
                    return <h1>{subSection.content}</h1>;
                  } else if (subSection.type === "p") {
                    return <p>{subSection.content}</p>;
                  }
                })}
              </div>
            );
          } else if (section.type === "Documents") {
            return (
              <Documents content={section.content} heading={section.heading} />
            );
          } else if (section.type === "advantages") {
            return (
              <Advantage
                content={section.content}
                subHeading={section.subHeading}
                heading={section.heading}
              />
            );
          } else if (section.type === "steps") {
            console.log(section);
            return (
              <Steps content={section.content} heading={section.heading} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default MainContent;
