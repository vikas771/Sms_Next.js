import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Style from "./login.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import  { callApi } from "../../../../utils/apicall";
import { useRouter } from "next/router";
import { SuccessToster } from "../../../../utils/toster";

function Login() {
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState();

  const router = useRouter();

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

  const handleSubmit = async (e) => {
    try {
      setFormErrors(validate(userValues));
      let Details = await callApi("post", "/login", userValues);
      alert("user login successfully");

      if (Details.status == 200) {
        let UserToken = localStorage.setItem("userToken",JSON.stringify(Details.data)
        );
        let UserDetails = localStorage.setItem("Token",Details.data.token);
        // let UserRole = localStorage.setItem("userRole", JSON.stringify(Details.data.user.role));
        router.push("/");
        router.reload();
      }

      console.log("user login details are here ", Details);

      console.log("first ", Details.Data);
    } catch (error) {
      console.log("please check your details");
    }

    // our Previous code without using common function

    // try {
    //   setFormErrors(validate(userValues));

    //   const newData = await axios.post(`${nextConfig.ApiUrl}/login`, {
    //     email: userValues.email,
    //     password: userValues.password,
    //   });
    //   console.log("Hello dev======", newData.status);
    //   newData.status == 200 &&
    //     toast.success("🦄 Login Successfully!", {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //     });

    //   if (newData.status == 200) {
    //     console.log("first",newData.status);
    //       //     let newv = localStorage.setItem("userToken", JSON.stringify(newData.data));
    //         router.push("/");
    //     router.reload();
    //     console.log("vikas localstorage", newv);
    //   }

    //   setUserValues({
    //     email: "",
    //     password: "",
    //   });
    //   console.log(newData);
    //   console.log("vikas data is here", newData.data.token);
    // } catch (error) {
    //   setFormErrors(validate(userValues));
    //   // setServerError(error.response.data.message);
    //   // console.log("-=-=-=-=-=-=-=", error.response.data.message);
    //   // console.log("status code form backend", error.response.request.status);
    //   console.log("-=-=-=-=-=-=-=", error);

    //   // ApiResopnse(error)
    // }
  };

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (value.email == "0") {
      errors.email = "email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email!";
    }

    if (!value.password) {
      errors.password = "password is required";
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
                              type="email"
                              name="email"
                              autoComplete="off"
                              className="my-2"
                              value={userValues.email}
                              onChange={handleChange}
                              required
                            />
                            <p style={{ color: "red" }}>{formErrors.email}</p>
                          </Grid>
                          <Grid>
                            <TextField
                              label="Password"
                              variant="standard"
                              type="Password"
                              required
                              name="password"
                              autoComplete="off"
                              className="my-2"
                              value={userValues.password}
                              onChange={handleChange}
                            />
                            <p style={{ color: "red" }}>
                              {formErrors.password}
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
