import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Style from "./login.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ApiRequestData, { postman } from "../../../../utils/apicall";

import axios from "axios";
import nextConfig from "../../../../next.config";
function Login() {
  const [userValues, setUserValues] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState();

  // const ApiResopnse = (error)=>{

  //   console.log("ldfjksdfkdkjk",error.response.request.status);

  //   (error.response.request.status == 400 ||
  //     error.response.request.status == 404) &&
  //     toast.warn(serverError, {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  // }

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = async (data) => {
    try {
      setFormErrors(validate(userValues));

      // let newDataUser = await ApiRequestData("post", "/login",userValues)

      const newData = await axios.post(`${nextConfig.ApiUrl}/login`, {
        email: userValues.userEmail,
        password: userValues.userPassword,
      });
      console.log("Hello dev======", newData.status);
      newData.status == 200 &&
        toast.success("🦄 Login Successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        if(newData.status == 200){
          localStorage.setItem("userToken", newData.data.token )
        }

      setUserValues({
        userEmail: "",
        userPassword: "",
      });
      console.log(newData);
      console.log("vikas data is here",newData.data.token);
    } catch (error) {
      setFormErrors(validate(userValues));
      // setServerError(error.response.data.message);
      // console.log("-=-=-=-=-=-=-=", error.response.data.message);
      // console.log("status code form backend", error.response.request.status);
      console.log("-=-=-=-=-=-=-=", error);

      // ApiResopnse(error)
    }
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
                        <Grid>
                          <Grid>
                            <TextField
                              label="Email"
                              variant="standard"
                              required
                              type="email"
                              name="userEmail"
                              autoComplete="off"
                              className="my-2"
                              value={userValues.userEmail}
                              onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>
                              {formErrors.userEmail}
                            </p>
                          </Grid>
                          <Grid>
                            <TextField
                              label="Password"
                              variant="standard"
                              type="Password"
                              required
                              name="userPassword"
                              autoComplete="off"
                              className="my-2"
                              value={userValues.userPassword}
                              onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>
                              {formErrors.userPassword}
                            </p>
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Login;
