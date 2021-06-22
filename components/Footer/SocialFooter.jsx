import React from "react";

function SocialFooter() {
  return (
    <div style={{ backgroundColor: "#0D0D0D" }}>
      <div className="container p-4">
        <div className="row text-white">
          <div className="col-md-6">
            <p>
              <strong>CALL US</strong>
            </p>
            <p>
              <span style={{ color: "grey" }}>Phone:</span> +91-8448804428
              <br />
              <span style={{ color: "grey" }}>Email:</span> tejas.goel@gmail.com
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <strong>CONTACT US WITH</strong>
            </p>
            <div>
              <i className="fab fa-facebook-square fa-3x mx-3"></i>
              <i className="fab fa-twitter-square fa-3x mx-3"></i>
              <i className="fab fa-linkedin fa-3x mx-3"></i>
              <i className="fab fa-youtube-square fa-3x mx-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialFooter;
