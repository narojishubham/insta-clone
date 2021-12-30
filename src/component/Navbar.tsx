import React from "react";
import { FaSistrix } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_first">
        <div className="navbar_insta_logo">
          <img src="/images/instagram.png" alt="" />
          <FaSistrix />
        </div>
      </div>
      <div className="navbar_middle">
        <div className="navbar_middle_search">
          <input type="text" className="navbar_search" placeholder="search" />
        </div>
      </div>
      <div className="navbar_last"></div>
    </div>
  );
}

export default Navbar;
