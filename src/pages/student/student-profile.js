import React, { useEffect, useState } from 'react'
import { callApi } from '../../../utils/apicall';

const StudentPprofile = () => {


  const [userProfile, setUserProfile] = useState([]);

  const StudentDetails = async () => {
    try {
      let data = await callApi("get", "/me");
      setUserProfile(data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("studnet Profile",userProfile);

  useEffect(() => {
    StudentDetails();
  }, []);
  return (
    <>
     <h2>Welcome to your profile </h2> 
     <section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">{userProfile.name}</h5>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">
                Update-Photo
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Delete-Photo
              </button>
            </div>
          </div>
        </div>
       
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userProfile.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userProfile.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>

     
    </>
  )
}

export default StudentPprofile;
