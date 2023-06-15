import { useState } from "react";
import localDetails from "../../utils/localstoragefile";
// useForm
function PP() {

 

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handlerInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if(data.error){
      console.log("faild",data.error);
      window.alert(data.error);
    }else{
      window.alert("login success");
    }
  };
  return (
    <>
      <form onSubmit={PostData}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter email"
          //   value={email}
          name="email"
          onChange={handlerInput}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          //   value={password}
          name="password"
          onChange={handlerInput}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default PP;
