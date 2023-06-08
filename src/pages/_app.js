import Footer from "@/Component/SuperAdmin/Footer";
import Navbar from "@/Component/SuperAdmin/Navbar/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import Login from "@/Component/SuperAdmin/Login form/Login";
// import { useRouter } from "next/router";

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
      {LocalSData == null ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
