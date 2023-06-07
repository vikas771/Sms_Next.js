import axios from "axios";
import nextConfig from "../next.config";

const ApiRequestData = async (method, url, body) => {
  console.log("method =", method);
  console.log("url =", url);
  console.log("body =", body);

  //   return new Promise(async (resolve, reject) => {
  //     let headers = {};
  //     let config = {
  //       method: method,
  //       url: `${nextConfig.ApiUrl}` + url,
  //       data: body,
  //     };

  //     // axios(config).then((response)=>{
  //     //     resolve(response)
  //     //     console.log("response response",response);
  //     // }).catch((error)=>{
  //     //     reject(error)
  //     //     console.log("error error = ", error);
  //     // })
  // });
  
  if (method == "post") {
    const newData = await axios.post(url, body);
    console.log("=======changes====", newData);
  }
};

export default ApiRequestData;
