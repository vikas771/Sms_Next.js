import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from "../sup-comm.module.css";
import { callApi } from "../../../../utils/apicall";
import Router from 'next/router'

const index = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data is here ", data);
    try {
      let details = await callApi("post", "/createschool", data);
      toast.success("School added successfully");
      Router.push("/super-admin/school-list");
    } catch (error) {
      console.log(error);
      alert("some thing went wrong");
    }
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle}>
          <Grid align="center">
            <Avatar className={Style.avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={Style.headerStyle}>Add School</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Grid>
                  <TextField
                    label="School Name"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("schoolname", { 
                      required: { value: true, message: "Enter Password" },
                    minLength: { value: 3, message: "Enter minimum 3 Character" },
                    maxLength: { value: 8, message: "Enter maximum 8 Character" },
                    })}
                    required
                  />
                  {errors.schoolname && (
                  <small style={{ color: "red" }}>
                    {" "}
                    {errors.schoolname.message}{" "}
                  </small>
                )}
                  {/* {errors.schoolname && <div>school name is required</div>} */}
                </Grid>

                <Grid>
                  <TextField
                    label="Owner Name"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="my-2"
                    {...register("name", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>owner name is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Address"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="address"
                    autoComplete="off"
                    className="my-2"
                    {...register("address", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>address is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="City"
                    fullWidth
                    variant="standard"
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="my-2"
                    {...register("city", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>city is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Email"
                    fullWidth
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
                    fullWidth
                    variant="standard"
                    type="Password"
                    required
                    name="password"
                    autoComplete="off"
                    className="my-2"
                    {...register("password", { required: true })}
                  />
                  {errors.exampleRequired && <div>password is required</div>}
                </Grid>
              </Grid>
              <div className="text-center my-2 mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default index;
