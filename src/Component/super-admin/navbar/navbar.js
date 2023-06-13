import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "./navbar.module.css";
import { Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
const Navbar = () => {
  const [LocalSData, setLocalSData] = useState({});

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const localStorageItem = localStorage.getItem("userToken");
    const newL = JSON.parse(localStorageItem);
    // setLocalSData(JSON.parse(localStorageItem.user.role));
    // console.log("vikas data is here ", newL);
    // console.log("third ", newL.user.role);

    if (localStorageItem == null) {
    } else {
      const nee = newL.user.role;

      console.log("myRole", nee);

      setLocalSData(nee);
    }
  }, []);

  console.log("second", LocalSData);
  // console.log("third",LocalSData.user.role);

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
                    <li className="nav-item">
                      <Link href="/" className={`nav-link ${Style.tagcolor}`}>
                        School-Contact
                      </Link>
                    </li>
                  </>
                </>
              ) : (
                <>
                  {/* This is navbar for Admin Panel */}
                  {LocalSData == "admin" && (
                    <>
                      {/* <li className="nav-item">
                        <Link
                          href="/admin/all-teacher"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          All-Teacher
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/admin/all-student"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          All-Student
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/admin/add-principal-form"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          Add-Principal
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/principal/add-teacher-form"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          Add-Teacher
                        </Link>
                      </li>*/}
                      <li className="nav-item">
                        <Link
                          href="/common-form/add-form"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          Add
                        </Link>
                      </li> 
                     
                      {/* <li className="nav-item">
                        <Link
                          href="/super-admin/all-user-list"
                          className={`nav-link active ${Style.tagcolor}`}
                        >
                          <Grid item xs={12}>
                            <FormControl
                              variant="standard"
                              
                              sx={{ m: 1, minWidth: "100%" }}
                            >
                              <InputLabel id="city" className={`nav-link active ${Style.tagcolor}`}>View</InputLabel>
                              <Select
                                labelId="View"
                                id="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label="View"
                              >
                               
                                <MenuItem value={"Principal"}>View-Principal</MenuItem>
                                <MenuItem value={"Teacher"}>View-Teacher</MenuItem>
                                <MenuItem value={"Student"}>View-Student</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Link>
                      </li> */}
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
