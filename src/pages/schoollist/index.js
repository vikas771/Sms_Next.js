import React from "react";
import Link from "next/link";
import style from '../../styles/school.module.css'

const index = () => {
  return (
    <>
      <div className="container p-3 SchoollistPOsition">
        <div className="">
          {/* table Headinf=g */}
          <div className="text-center text-dark pb-2">
            <h1>Schoollist</h1>
          </div>
          {/* table Heading */}
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
              <tbody>
                <tr data-aos="zoom-out-down" data-aos-duration="700">
                  <th scope="row">1</th>
                  <td>
                    {" "}
                     {/* <Link to="/"> */}
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG8rFmjPHSsBdufMjiVpSWwEXo9LeW-WQnw&usqp=CAU"
                        alt="scl"
                        className={style.schoolImage}
                      />
                    {/* </Link>  */}
                  </td>
                  <td>Ankur Highrt Secodary</td>
                  <td>Narayenged</td>
                  <td>Main Road , Near Nus Station</td>
                  <td>2022</td>
                </tr>
                <tr data-aos="zoom-out-down" data-aos-duration="1000">
                  <th scope="row">2</th>
                  <td>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxsx7cYNa0lud4vERWo8HPYTDrhYrmXZXwQ&usqp=CAU"
                      alt="scl"
                      className={style.schoolImage}
                    />{" "}
                  </td>
                  <td>Dalauda Public School</td>
                  <td>Dalauda</td>
                  <td>Teacher Colony , Near Pragati Chorah</td>
                  <td>2022</td>
                </tr>
                <tr data-aos="zoom-out-down" data-aos-duration="1300">
                  <th scope="row">3</th>
                  <td>
                    <img
                      src="https://www.netexplanations.com/wp-content/uploads/2022/04/DPS-Bharuch.png"
                      alt="scl"
                      className={style.schoolImage}
                    />{" "}
                  </td>
                  <td>Shree Vinayak Convent </td>
                  <td>Ealchi</td>
                  <td>Ealchi Road , Near Madi Get </td>
                  <td>2000</td>
                </tr>{" "}
                <tr data-aos="zoom-out-down" data-aos-duration="1600">
                  <th scope="row">4</th>
                  <td>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hX8y4jsMDSaqYv-yxFuYp3Q51EGC91BS6Q&usqp=CAU"
                      alt="scl"
                      className={style.schoolImage}
                    />{" "}
                  </td>
                  <td>Suman Vidha Mandir</td>
                  <td>Narayenged</td>
                  <td>Main Road , Near Nus Station</td>
                  <td>2021</td>
                </tr>
                <tr data-aos="zoom-out-down" data-aos-duration="1900">
                  <th scope="row">5</th>
                  <td>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzz0IswoH41vqf20ATOOhFZWjhuv_IQi3Og&usqp=CAU"
                      alt="scl"
                      className={style.schoolImage}
                    />{" "}
                  </td>
                  <td>Gov School</td>
                  <td>Dalauda</td>
                  <td>Teacher Colony , Near Pragati Chorah</td>
                  <td>2022</td>
                </tr>
                <tr data-aos="zoom-out-down" data-aos-duration="2200">
                  <th scope="row">6</th>
                  <td>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaKDqccxNT-Zh06BhCxSoV-W94DcC3N5xBA&usqp=CAU"
                      alt="scl"
                      className={style.schoolImage}
                    />{" "}
                  </td>
                  <td>Shree Vinayak Convent </td>
                  <td>Ealchi</td>
                  <td>Ealchi Road , Near Madi Get </td>
                  <td>2023</td>
                </tr>
              </tbody>
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
