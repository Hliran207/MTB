/* eslint-disable no-unused-vars */
import React from "react";

const NavbarAdmin = () => {
  return (
    <header className="NavBarAdminPage">
      <button className="NavBarAdminPage-button">התנתקות</button>
      <div className="NavBarAdminPage-title">MTB-אדמין</div>
      <button
        className="NavBarAdminPage-button home-button"
        onClick={() => {
          window.location.href = "/AdminPage";
        }}
      >
        דף בית
      </button>
    </header>
  );
};

export default NavbarAdmin;
