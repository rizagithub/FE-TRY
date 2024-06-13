import React from "react";
import { Container, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="t1 bi-envelope d-flex align-items-center">
                <a href="mailto:primeapps@example.com">primeapps@example.com</a>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <Image className="icon-flower mr-1" src="./public/images/dc.png" alt="login icon" />
              <h1 className="sitename">Primapps</h1>
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="#" className="text-white act">Home</a></li>
                <li><a href="#" className="text-white act">Product</a></li>
                <li><a href="#" className="text-white act">About</a></li>
                <li className="">
                  <Link to="/login">
                    <button
                      className="btn btn-danger ms-3"
                      type="submit"
                      style={{ backgroundColor: '#FF6969', border: 'none' }}
                    ><Image className="login_img" src="/login.svg" alt="login icon" /> Login
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHomepage;
