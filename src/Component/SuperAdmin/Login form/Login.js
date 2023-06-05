import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Style from "./login.module.css";
function Login() {
  const [userValues, setUserValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(userValues));
  };

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (value.email == "0") {
      errors.userEmail = "email is required!";
    } else if (!regex.test(value.userEmail)) {
      errors.userEmail = "This is not a valid email!";
    }

    if (!value.userPassword) {
      errors.userPassword = "password is required";
    } else if (value.userPassword.length < 4) {
      errors.userPassword = "password must be more than 4 characters";
    } else if (value.userPassword.length > 10) {
      errors.userPassword = "password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <>
      <section className={`vh-100  ${Style.formbackgroundcolor}`}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div
                    className={`col-md-6  d-none d-md-block ${Style.loginformimage} `}
                  >
                    <img
                      src="https://img.freepik.com/free-v ector/student-studying-desk_1262-21427.jpg?w=2000"
                      alt="login form"
                    />
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="card-body  p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0 mx-auto">Login</span>
                      </div>

                      <h5
                        className={`fw-normal mb-3 pb-3 ${Style.spaceofsign}`}
                      >
                        Sign into your account
                      </h5>
                      <form onSubmit={handleSubmit}>
                        <Grid sx={12}>
                          <Grid>
                            <TextField
                              label="Email"
                              variant="standard"
                              required
                              type="email"
                              name="userEmail"
                              autoComplete="off"
                              classNameName="my-2"
                              value={userValues.userEmail}
                              onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>{formErrors.userEmail}</p>
                          </Grid>
                          <Grid>
                            <TextField
                              label="Password"
                              variant="standard"
                              type="Password"
                              required
                              name="userPassword"
                              autoComplete="off"
                              classNameName="my-2"
                              value={userValues.userPassword}
                              onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>{formErrors.userPassword}</p>
                          </Grid>
                        </Grid>
                      </form>
                      <div className="text-center my-2 mt-4">
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
