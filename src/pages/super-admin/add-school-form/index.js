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

// import Style from './addschool.module.css'
import { Try } from "@mui/icons-material";

const index = () => {
    // const getToken = () =>{
    //   const newToken = localStorage.getItem('userToken')
    //   const newt = JSON.parse(newToken)
    //   console.log("local storage token is ",newt );
    //   console.log("local storage token is ",newt.user.role );
    // }

    // getToken()

  const [schoolData, setSchoolData] = useState({
    schoolname: "",
    address: "",
    ownername: "",
    ownernumber: "",
    owneremail: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log("name", name);
    // console.log("value", value);
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = () => {
    // e.prevent.default();
    console.log("schoolData", schoolData);
    alert("your data has been submitted");

    try {
      const addSchoolData = axios.post(`${nextConfig.ApiUrl}/createschool`, {
        schoolname: schoolData.schoolname,
        address: schoolData.address,
      });
      console.log("addSchoolData is here ", addSchoolData);
    } catch (error) {
      console.log(error);
    }
  };

  const paperStyle = { padding: "30px 20px", width: "400px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Add School</h2>
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
                    id="address"
                    value={schoolData.address}
                    onChange={handleChange}
                    label="School Address"
                    name="address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="ownername"
                    label="Owner Name"
                    value={schoolData.ownername}
                    onChange={handleChange}
                    name="ownername"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="ownernumber"
                    label="Owner Number"
                    value={schoolData.ownernumber}
                    onChange={handleChange}
                    name="ownernumber"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="owneremail"
                    value={schoolData.owneremail}
                    onChange={handleChange}
                    label="Owner Email Address"
                    name="owneremail"
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
