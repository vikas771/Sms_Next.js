import React from 'react'
import {
    Container,
    Grid,
    TextField,
  } from "@mui/material";
  import Select from '@mui/material/Select';
  import Chip from '@mui/material/Chip';
  


const index = () => {
  return (
    <>






      {/* <Container component="main" maxWidth="xs" className="mt-3"> */}
      <div className="container">
              <form className="row mb-3">
        <div className='col-6'>
          <Grid container spacing={2}>
             {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid> 
             <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />

            </Grid>  */}
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="schoolname"
                label="School Name"
                name="schoolname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="address"
                label="Address"
                name="address"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="city"
                label="City"
                name="city"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='number'
                id="pincode"
                label="Pin Code"
                name="pincode"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="state"
                label="State"
                name="state"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="country"
                label="Country"
                name="country"
              />
            </Grid>

       
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                type='text'
                id="ownername"
                label="Owner Name"
                name="ownername"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="owneremail"
                label="Owner Number "
                name="owneremail"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="owneremail"
                label="Owner Email Address"
                name="owneremail"
              />
            </Grid>

           

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="principalname"
                label="Principal Name"
                name="principalname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="principalnumber"
                label="Principal Phone Number"
                name="principalnumber"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="principalemail"
                label="Principal Email"
                name="principalemail"
              />
            </Grid>

          

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantname"
                label="Accountant Name"
                name="accountantname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantemail"
                label="Accountant Email"
                name="accountantemail"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantnumber"
                label="Accountant Number"
                name="accountantnumber"
              />
            </Grid>

            

          
          </Grid>
          </div>
          <div className='col-6'>
          <Grid container spacing={2}>
           
            
          <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="schoolid"
                label="School Id"
                name="schoolid"
              />
            </Grid>

           
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="establishedyear"
                label="Established Year"
                name="establishedyear"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="enrollmentyear"
                label="Enrollment Year"
                name="enrollmentyear"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="totalstudent"
                label="Total Student"
                name="totalstudent"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="totalteacher"
                label="Total Teacher"
                name="totalteacher"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="website"
                label="School Website"
                name="website"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="socialmedia"
                label="Social Media Link"
                name="socialmedia"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="SocialMedia"
                label="upload file"
                name="text"
                type='file'
              />
            </Grid>
            
          </Grid>
          </div>
        </form>
        </div>

    {/* </Container> */}
    </>
  )
}

export default index
