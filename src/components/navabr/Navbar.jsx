import React, { useEffect, useState } from "react";

import "./navbar.scss";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const btns = (
  <>
    <button type="button" className="signin-btn">
      sign in
    </button>
    <button type="button" className="signup-btn">
      sign up
    </button>
  </>
);
const navLogo = (
  <>
    <div className="nav-logo">
      <img src={logo} alt="" />
    </div>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggelMenu] = useState(false);
  useEffect(() => {
    toggleMenu &&
      window.addEventListener("click", handleClickOutsideNavbar, true);

    return () =>
      window.removeEventListener("click", handleClickOutsideNavbar, true);
  }, [toggleMenu]);
  const handleClickOutsideNavbar = (e) => {
    if (!e.target.closest(".nav")) {
      handleCloseMenu();
    }
  };
  const handleCloseMenu = () => {
    setToggelMenu(false);
  };
  return (
    <>
      <div className="nav-section">
        <nav className={`nav ${toggleMenu ? "active" : ""}`}>
          <div className="nav-container">
            {navLogo}
            <ul className="nav-menu">
              <li className="nav-list">
                <Link to="#home" className="nav-link" onClick={handleCloseMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" onClick={handleCloseMenu}>
                  What is GPT?
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" onClick={handleCloseMenu}>
                  Open Ai
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" onClick={handleCloseMenu}>
                  Case Studies
                </Link>
              </li>
              <li className="nav-list">
                <Link className="nav-link" onClick={handleCloseMenu}>
                  Library
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-btns">{btns}</div>
        </nav>
        <div className="toggle-btns">
          {navLogo}

          <div className="nav-btns">
            {btns}
            <div
              className="toggle-btn"
              onClick={() => setToggelMenu(!toggleMenu)}
            >
              {toggleMenu ? (
                <RiCloseLine size={30} />
              ) : (
                <RiMenu3Line size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
