import React from "react";
import { BuyPackage as packageBuy } from "./sampleData";

function BuyPackage() {
  console.log(packageBuy);
  return (
    <div className="bg-info py-4">
      <div className="container my-4 p-0">
        <div className="text-white text-center">
          <h1 className="pb-3 border-bottom">Simple Prices | No Surprises</h1>
          <h3 className="pt-1">Choose Your Package</h3>
        </div>
        <div className="row">
          {packageBuy.map((item) => {
            return (
              <div
                className="col-md-4 package pt-4 pt-md-2"
                key={item.packageName}
              >
                <div className="bg-primary p-4 text-white text-center">
                  <h3 className="border-bottom pb-2">{item.packageName}</h3>
                  <h1>₹{item.packagePrice}/-</h1>
                  <p className="mb-0">all inclusive fee</p>
                </div>
                <div>
                  <ul className="list-group list-group-flush">
                    {item.points.map((list) => {
                      return (
                        <>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action text-center"
                          >
                            {list}
                          </button>
                        </>
                      );
                    })}
                    <div className="p-4 text-center bg-light">
                      <button type="button" class="btn btn-primary w-100">
                        Buy Now
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BuyPackage;
