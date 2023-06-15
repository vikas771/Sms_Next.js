import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import Style from './addschool.module.css'
import { Try } from "@mui/icons-material";
import nextConfig from "../../../next.config";
import { useForm } from "react-hook-form";
import localDetails from "../../../utils/localstoragefile";

const index = () => {
  const token = localDetails();
  console.log("token--->", token);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { name, email, password, role } = data;

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          isAuthenticateUser: `Bearer ${token.token}`,
        },
      };
      const addSchoolData = await axios.post(
        `${nextConfig.ApiUrl}/addteacher`,
        {
          name,
          email,
          password,
          role,
        },
        config
      );
      console.log("addSchoolData is here ", addSchoolData);
      alert("Teacher Addes Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // const [schoolData, setSchoolData] = useState({
  //   name:"",
  //   Email:"",
  //   Number:"",
  //   Password:"",
  //   role:""
  // });

  // const [LocalSData, setLocalSData] = useState({});

  // useEffect(() => {
  //   const localStorageItem = localStorage.getItem("userToken");
  //   const newL = JSON.parse(localStorageItem);
  //   // setLocalSData(JSON.parse(localStorageItem.user.role));
  //   // console.log("vikas data is here ", newL);
  //   // console.log("third ", newL.user.role);

  //   if (localStorageItem == null) {
  //   } else {
  //     const newToken = newL.token;

  //     console.log("myToken", newToken);

  //     setLocalSData(newToken);
  //   }
  // }, []);

  // console.log("second", LocalSData);
  // let name, value;

  // const handleChange = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   // console.log("name", name);
  //   // console.log("value", value);
  //   setSchoolData({ ...schoolData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   // e.prevent.default();
  //   console.log("schoolData", schoolData);
  //   alert("your data has been submitted");

  //   try {

  //     const addSchoolData = axios.post(`${nextConfig.ApiUrl}/addteacher`, {
  //       name: schoolData.name,
  //       email: schoolData.Email,
  //       role: schoolData.role,
  //       password: schoolData.Password,
  //     });
  //     console.log("addSchoolData is here ", addSchoolData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const paperStyle = { padding: "30px 20px", width: "400px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };

  return (
    // <>
    //   <Grid>
    //     <Paper elevation={20} style={paperStyle}>
    //       <Grid align="center">
    //         <Avatar style={avatarStyle}>
    //           <AddCircleOutlineIcon />
    //         </Avatar>
    //         <h2 style={headerStyle}>Add</h2>
    //       </Grid>

    //       <div className="container">
    //         <form className="row mb-3" onSubmit={handleSubmit}>
    //           {/* <div className="col-md-4 mx-auto"> */}
    //           <Grid container spacing={2}>
    //             <Grid item xs={12}>
    //               <TextField
    //                 // className={style.labelcolor}
    //                 variant="standard"
    //                 required
    //                 fullWidth
    //                 type="text"
    //                 id="name"
    //                 value={schoolData.name}
    //                 onChange={handleChange}
    //                 label="Name"
    //                 name="name"
    //               />
    //             </Grid>

    //             <Grid item xs={12}>
    //               <TextField
    //                 variant="standard"
    //                 required
    //                 fullWidth
    //                 type="email"
    //                 id="Email"
    //                 value={schoolData.Email}
    //                 onChange={handleChange}
    //                 label="Email"
    //                 name="Email"
    //               />
    //             </Grid>
    //             <Grid item xs={12}>
    //               <TextField
    //                 variant="standard"
    //                 required
    //                 fullWidth
    //                 type="text"
    //                 id="Password"
    //                 value={schoolData.Password}
    //                 onChange={handleChange}
    //                 label="Password"
    //                 name="Password"
    //               />
    //             </Grid>
    //             {/* <Grid item xs={12}>
    //               <TextField
    //                 variant="standard"
    //                 required
    //                 fullWidth
    //                 type="number"
    //                 id="Number"
    //                 value={schoolData.Number}
    //                 onChange={handleChange}
    //                 label="Number"
    //                 name="Number"
    //               />
    //             </Grid> */}
    //             <Grid item xs={12}>
    //               <TextField
    //                 variant="standard"
    //                 required
    //                 fullWidth
    //                 type="text"
    //                 id="role"
    //                 value={schoolData.role}
    //                 onChange={handleChange}
    //                 label="User Role"
    //                 name="role"
    //               />
    //             </Grid>

    //           </Grid>
    //           {/* </div> */}
    //         </form>
    //         <div className="text-center">
    //           <Button
    //             variant="contained"
    //             className="mb-5"
    //             type="submit"
    //             onClick={handleSubmit}
    //           >
    //             Submit
    //           </Button>
    //         </div>
    //       </div>
    //     </Paper>
    //   </Grid>
    // </>
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Add</h2>
          </Grid>
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    label="Name"
                    name="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="email"
                    id="Email"
                    {...register("email", { required: true })}
                    label="Email"
                    name="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="Password"
                    {...register("password", { required: true })}
                    label="Password"
                    name="password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                   <TextField
                     variant="standard"
                     required
                     fullWidth
                     type="number"
                     id="Number"
                     value={schoolData.Number}
                     onChange={handleChange}
                     label="Number"
                     name="Number"
                   />
                 </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="role"
                    {...register("role", { required: true })}
                    label="User Role"
                    name="role"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    className="mb-5"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default index;
