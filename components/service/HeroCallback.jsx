import React from "react";

export default function HeroCallback() {
  return (
    <div>
      <h5 className="text-white text-center my-4">Receive a Callback</h5>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="Email"
            className="form-control"
            placeholder="Enter Email Address"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            +91
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button type="submit" className="btn btn-primary bg-warning w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
