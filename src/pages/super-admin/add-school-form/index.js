import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

import Style from './addschool.module.css'
import { callApi } from "../../../../utils/apicall";

const index = () => {
  const [schoolData, setSchoolData] = useState({
    email: "",
    password: "",
    schoolname: "",
    name: "",
  });

  const router = useRouter();


  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      let data = await callApi("post", "/createschool", schoolData);
      console.log(data);
      alert("School Added successfully");
      router.push("/super-admin/all-user-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle} >
          <Grid align="center">
            <Avatar className={Style.avatarStyle}>
              <AddCircleOutlineIcon /> 
            </Avatar>
            <h2 className={Style.headerStyle}>Add School</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              {/* <div className="col-md-4 mx-auto"> */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    // className={style.labelcolor}
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="schoolname"
                    value={schoolData.schoolname}
                    onChange={handleChange}
                    label="School Name"
                    name="schoolname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="name"
                    label="Name"
                    value={schoolData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="email"
                    value={schoolData.email}
                    onChange={handleChange}
                    label="Email Address"
                    name="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    fullWidth
                    type="password"
                    id="password"
                    label="Password"
                    value={schoolData.password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                </Grid>
              </Grid>
              {/* </div> */}
            </form>
            <div className="text-center">
              <Button
                variant="contained"
                className="mb-5"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default index;
