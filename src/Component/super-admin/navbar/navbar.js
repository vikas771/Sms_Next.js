import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "./navbar.module.css";
import Router  from "next/router";
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

  // const router = useRouter();

  const ClearLOcalData = () => {
    localStorage.clear();
    // Router.push({pathname:"/"});
    Router.push("/"); 
    Router.reload();
  };

  const ReDiUser = () => {
    Router.push("/admin/view-all/role");
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
              <li className="nav-item">
                <Link href="/" className={`nav-link active ${Style.tagcolor}`}>
                  Home
                </Link>
              </li>

              {LocalSData && LocalSData == "superadmin" ? (
                <>
                  {/* This is navbar for Super-Admin Panel */}
                  <>
                    {" "}
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
                          href="/admin/all-teacher"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          View-Teacher
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/admin/all-student"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          View-Student
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/common-form/add-form"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          Add-Member
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/super-admin/all-user-list"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          <select
                            name="role"
                            value={ShowRole}
                            onChange={(e) => {
                              setShowRole(e.target.value);
                            }}
                            id="role"
                            onClick={ReDiUser}
                          >
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                          </select>

                          {/* <div className="dropdown">
                            <button
                              className={`btn btn-primarys dropdown-toggle ${Style.tagcolor}`}
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Dropdown button
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <Link href="/" className="dropdown-item">
                                <option value="admin">Admin</option>
                                </Link>
                              </li>
                              <li>
                                <Link href="/" className="dropdown-item">
                                <option value="student">Student</option>
                                </Link>
                              </li>
                              <li>
                                <Link href="/" className="dropdown-item">
                                <option value="admin">Admin</option>
                                </Link>
                              </li>
                            </ul>
                          </div> */}

                          {/* <Grid item xs={12}>
                            <FormControl
                              variant="standard"
                              sx={{ m: 1, minWidth: "100%" }}
                            >
                              <InputLabel
                                id="city"
                                className={`nav-link active ${Style.tagcolor}`}
                              >
                                View
                              </InputLabel>
                              <Select
                                labelId="View"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="View"
                              >
                                <MenuItem value={"Principal"}>
                                  View-Principal
                                </MenuItem>
                                <MenuItem value={"Teacher"}>
                                  View-Teacher
                                </MenuItem>
                                <MenuItem value={"Student"}>
                                  View-Student
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid> */}
                        </Link>
                      </li>
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
