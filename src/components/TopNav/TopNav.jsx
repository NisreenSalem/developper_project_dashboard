import React from "react";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./top-nav.css";

const TopNav = () => {
  return (
    <>
      <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
        <span>
            <i class="ri-search-line"></i>
          </span>
          <div className="rectangle"></div>  
          <input type="text" placeholder="Search or type" />
         
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge"></span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TopNav;
