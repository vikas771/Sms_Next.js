import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "./navbar.module.css";
import Router from "next/router";
const Navbar = () => {
  const [LocalSData, setLocalSData] = useState({});

  const [ShowRole, setShowRole] = useState("teacher");

  useEffect(() => {
    const localStorageItem = localStorage.getItem("userToken");
    const newL = JSON.parse(localStorageItem);

    if (localStorageItem == null) {
    } else {
      const newToken = newL.user.role;

      // console.log("myRole", newToken);

      setLocalSData(newToken);
    }
  }, []);

  const ClearLOcalData = () => {
    localStorage.clear();
    // Router.push({pathname:"/"});
    Router.push("/");
    Router.reload();
  };

  const ReDiUser = () => {
    // Router.push("/admin/view-all/role");
    // Router.reload();
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${Style.NavBarColor}`}>
        <div className={`container-fluid ${Style.logoHeader}`}>
          <a className={`navbar-brand ${Style.tagcolor}`} href="/">
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
              {LocalSData && LocalSData == "superadmin" ? (
                <>
                  {/* This is navbar for Super-Admin Panel */}
                  <>
                    {" "}
                    <li className="nav-item">
                      <Link
                        href="/super-admin/deshboard"
                        className={`nav-link active ${Style.tagcolor}`}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/super-admin/all-user-list"
                        className={`nav-link active ${Style.tagcolor}`}
                      >
                        All-User
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/super-admin/school-list"
                        className={`nav-link ${Style.tagcolor}`}
                      >
                        School-List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/super-admin/add-school-form"
                        className={`nav-link ${Style.tagcolor}`}
                      >
                        Add-School
                      </Link>
                    </li>
                  </>
                </>
              ) : LocalSData && LocalSData == "admin" ? (
                <>
                  {/* This is navbar for Admin Panel */}
                  {LocalSData == "admin" && (
                    <>
                      <li className="nav-item">
                        <Link
                          href="/admin/admin-deshboard"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          Home
                        </Link>
                      </li>

                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          View
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/all-teacher"
                            >
                              Teacher{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/all-student"
                            >
                              Student{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/view-fees"
                            >
                              Fees{" "}
                            </Link>
                            <a className="dropdown-item" href="#"></a>
                          </li>
                        </ul>
                      </div>

                      <div className="dropdown ms-2">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Add
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/common-form/add-form"
                            >
                              Add-Member
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/add-fee"
                            >
                              Add-Fee
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/add-exam"
                            >
                              Add-Exam
                            </Link>
                            <a className="dropdown-item" href="#"></a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </>
              ) : LocalSData && LocalSData == "teacher" ? (
                <>
                  <li className="nav-item">
                    <Link
                      href="/teacher/add-student-form"
                      className={`nav-link active ${Style.tagcolor}`}
                    >
                      Add-Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/teacher/all-studnet-list"
                      className={`nav-link active ${Style.tagcolor}`}
                    >
                      View-All-Student
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item">
                    <Link
                      href="student/student-profile"
                      className={`nav-link active ${Style.tagcolor}`}
                    >
                      Student-Profile
                    </Link>
                  </li> */}
                </>
              )}
              <li className="nav-item">
                <Link
                  href="/common-form/profile-page"
                  className={`nav-link active ${Style.tagcolor}`}
                >
                  View-Profile
                </Link>
              </li>

              <button
                className={`btn btn  ${Style.tagcolor}`}
                type="button"
                onClick={ClearLOcalData}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
