import React, { useEffect, useState } from "react";
import Style from "./school-list.module.css";
import axios from "axios";
import nextConfig from "../../../../next.config";

const index = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    axios
      .get(`${nextConfig.ApiUrl}/allschool`)
      .then((response) => {
        setSchoolData(response.data.SchoolList);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("schoolData", schoolData);

  return (
    <>
      <div className="container p-3 SchoollistPOsition">
        <div className="">
          <div className="text-center text-dark pb-2">
            <h1>Schoollist</h1>
          </div>
          <div className="">
            <table class="table table-striped">
              <thead data-aos="zoom-in" data-aos-duration="100">
                <tr className="SchoolListTalble">
                  <th scope="col">NO</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Address</th>
                  <th scope="col">Join Year</th>
                </tr>
              </thead>

              {schoolData &&
                schoolData.map((item, id) => {
                  return (
                    <>
                      <tbody>
                        <tr data-aos="zoom-out-down" data-aos-duration="700">
                          <th scope="row">{id + 1}</th>
                          <td>
                            {" "}
                            <img
                              // src={item.}
                              alt="scl"
                              className={Style.schoolImage}
                            />
                          </td>
                          <td>{item.schoolname}</td>
                          <td>{item.city}</td>
                          <td>{item.address}</td>
                          <td>2022</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
            </table>
          </div>
        </div>
        {/* school profile */}
        {/* <SchoolProfile/> */}
      </div>
    </>
  );
};

export default index;
