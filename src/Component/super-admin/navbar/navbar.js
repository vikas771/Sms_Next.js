import React from "react";
import Link from "next/link";
import Style from './navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Style.NavBarColor}`} >
        <div className={`container-fluid ${Style.logoHeader}`} >
          <a   className={`navbar-brand ${Style.tagcolor}`} href="/">
            <img src="https://aurasoftdigitech.com/img/logo-main.png" alt="" />
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
                <Link href="/super-admin/all-user-list" className={`nav-link active ${Style.tagcolor}`}>
                  All-User
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/super-admin/school-list" className={`nav-link ${Style.tagcolor}`}>
                  School-List
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/super-admin/add-school-form" className={`nav-link ${Style.tagcolor}`}>
                  Add-School
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/" className={`nav-link ${Style.tagcolor}`}>
                  School-Contact
                </Link>
              </li>

              

              <li className="nav-item">
                <Link href="/admin/add-principal-form" className={`nav-link ${Style.tagcolor}`}>
                  Add-Principal
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/principal/add-teacher-form" className={`nav-link ${Style.tagcolor}`}>
                  Add-Teacher
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
