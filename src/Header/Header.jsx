import React from "react";
import Logo from "../assets/investment-calculator-logo.png";
function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="Logo" />
      <h1>Investment calculator</h1>
    </div>
  );
}

export default Header;
