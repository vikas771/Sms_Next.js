import React, { useEffect, useState } from "react";
// import Authchheck from "../midelewear/auth";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Loader from "../comman/Loader";

const Test = () => {

  // const history = useNavigate();
  const [Admins, SetAdmins] = useState([]);
  const [Role, UserRole] = useState("");
  const [Search, SetSeatch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ALLAdmins = async () => {
    try {
      setIsLoading(true);

      if (Role && Search) {
        var { data } = await axios(
          `/alladmin?role=${Role}&name=${Search}`
        );
      } else if (Role) {
        var { data } = await axios(`/alladmin?role=${Role}`);
      } else if (Search) {
        var { data } = await axios(`/alladmin?name=${Search}`);
      } else {
        var { data } = await axios(`/alladmin`);
      }

      SetAdmins(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // const handleClick = (id) => {
  //   history(`/singleadmin/${id}`);
  // };

  useEffect(() => {
    ALLAdmins();
  }, [Role, Search]);

  return (
    <>
    <main id="main" className="main">
      <div className="pagetitle">
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">
              <select
                name="role"
                className="dropdown"
                value={Role}
                onChange={(e) => {
                  UserRole(e.target.value);
                }}
                id="role"
              >
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
                <option value="">All Role</option>
              </select>
            </li>
            <li className="breadcrumb-item active">
              <input
                type="text"
                placeholder="Search here"
                className="Searchbox"
                value={Search}
                onChange={(e) => SetSeatch(e.target.value)}
              />
            </li>
          </ol>
        </div>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                {isLoading ? (
                  {/* <Loader /> */}
                ) : (
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Admins &&
                        Admins.map((output, i) => (
                          <tr key={i} onClick={() => handleClick(output._id)}>
                            <th scope="col">{output._id}</th>
                            <th scope="col">{output.name}</th>
                            <th scope="col">{output.email}</th>
                            <th scope="col">{output.role}</th>
                            <th scope="col">Start Date</th>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  )
}

export default Test
