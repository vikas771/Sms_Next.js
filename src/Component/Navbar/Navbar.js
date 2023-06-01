import React from "react";
import Link from "next/link";
import style from '../../styles/school.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.NavBarColor}`} >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
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
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/schoollist" className="nav-link ">
                  School
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/addschool" className="nav-link ">
                  Add School
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className="nav-link ">
                  School Contect
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className="nav-link ">
                  Payment
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className="nav-link ">
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
