import React from "react";
import Test from "./test";
import NewTest from "./newTest";
import Style from '../styles/school.module.css'
import Oldform from "./newTest";
import StepformTeacher from "@/Component/teacher/teacher-step-form";

const index = () => {
  return (
    <>
{/* <Test />/ */}

{/* <NewTest />/ */}

{/* <Oldform /> */}

{/* <UserProfile /> */}

{/* <Login /> */}

{/* <AllUser /> */}

{/* <UpdateFromStudent /> */}


<StepformTeacher />

<div className={Style.MainImg}>



{/* <img src="https://repository-images.githubusercontent.com/320789182/05666c80-6fbe-11eb-8159-9c143259a9aa" alt="" /> */}

</div>

    </>
  );
};

export default index;
