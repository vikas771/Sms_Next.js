import { Button, Grid, TextField } from "@mui/material";
import { callApi } from "../../../../utils/apicall";
import { useForm } from "react-hook-form";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import router from "next/router";

function Login() {
 
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("log data is here ", data);
    try {
      let Details = await callApi("post", "/login", data);
      alert("user login successfully");
     
     
      if (Details.status == 200) {
        let UserToken = localStorage.setItem(
          "userToken",
          JSON.stringify(Details.data)
          );
        let UserDetails = localStorage.setItem("Token", Details.data.token);
        router.push('/')
        router.reload();
        toast.success("login successfully")  


      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>It's testing page</h2>

      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 position-relative text-center">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid>
                      <Grid>
                        <TextField
                          label="Email"
                          variant="standard"
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="my-2"
                          {...register("email", { required: true })}
                          required
                        />
                        {errors.exampleRequired && <div>email is required</div>}
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
                          {...register("password", { required: true })}
                        />
                        {errors.exampleRequired && (
                          <div>password is required</div>
                        )}
                      </Grid>
                    </Grid>
                    {/* <input type="submit" /> */}
                    <div className="text-center my-2 mt-4">
                      <Button variant="contained" color="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Login;
