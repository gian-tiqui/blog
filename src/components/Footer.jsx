import React from "react";

function Footer() {
  const smallerText = {
    fontSize: "11px",
  };

  return (
    <div className="text-white">
      <div className="row">
        <div className="col" style={smallerText}>
          Terms of Service
        </div>
        <div className="col" style={smallerText}>
          Privacy Policy
        </div>
        <div className="col" style={smallerText}>
          Cookie Policy
        </div>
      </div>
      <div className="row">
        <div className="col" style={smallerText}>
          Accessibility
        </div>
        <div className="col" style={smallerText}>
          Ads
        </div>
        <div className="col" style={smallerText}>
          © Blog
        </div>
      </div>
    </div>
  );
}

export default Footer;
