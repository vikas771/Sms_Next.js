import React from "react";
import Link from "next/link";
import Style from './navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Style.NavBarColor}`} >
        <div className="container-fluid" >
          <a   className={`navbar-brand ${Style.tagcolor}`} href="/">
            Aurasoft
          </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className={`nav-link active ${Style.tagcolor}`}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/schoollist" className={`nav-link ${Style.tagcolor}`}>
                  School
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/addschool" className={`nav-link ${Style.tagcolor}`}>
                  Add School
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={`nav-link ${Style.tagcolor}`}>
                  School Contect
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={`nav-link ${Style.tagcolor}`}>
                  Payment
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={`nav-link ${Style.tagcolor}`}>
                  Inquirys/Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
