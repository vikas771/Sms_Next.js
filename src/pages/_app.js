import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import Style from '../styles/header.module.css'
import Footer from "@/Component/super-admin/footer";
import Navbar from "@/Component/super-admin/navbar/navbar";
import Login from "@/Component/super-admin/login-form/login";

export default function App({ Component, pageProps }) {
  const [LocalSData, setLocalSData] = useState({});

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const localStorageItem = localStorage.getItem("userToken");
    setLocalSData(JSON.parse(localStorageItem));
    // console.log("localdata", LocalSData);  
  }, []);

  
  

  return (
    <>
    
    <div className={Style.MainSectionApp}>

      {LocalSData == null ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Component className={Style.content} {...pageProps} />
          <Footer />
        </>
      )}
      </div>
    </>
  );
}
