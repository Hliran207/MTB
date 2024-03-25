/* eslint-disable no-unused-vars */
import React from 'react';

const NavbarParent = () => {
  return (
    <header className="NavBarChildPage">
      <button className="NavBarChildPage-button" onClick={() => { window.location.href = '/'; }}>התנתקות</button>
      <div className="NavBarChildPage-title">MTB-הורה</div>
      <button
        className="NavBarChildPage-button home-button"
        onClick={() => {
          window.location.href = '/ParantPage';
        }}
      >
        דף בית
      </button>
    </header>
  );
};

export default NavbarParent;