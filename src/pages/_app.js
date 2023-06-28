import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Style from "../styles/header.module.css";
import Footer from "@/Component/super-admin/footer";
import Navbar from "@/Component/super-admin/navbar/navbar";
import Login from "@/Component/super-admin/login-form/login";
import localDetails from "../../utils/localstoragefile";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { Router } from "next/router";

export default function App({ Component, pageProps }) {
  const LocalSData = localDetails();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const [Loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      <div className={Style.MainSectionApp}>
        {LocalSData == null ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <div className={Style.BodyCen}>
              <Component className={Style.content} {...pageProps} />
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Footer />
          </>
        )}
      </div>

      {/* <Login /> */}
      {/* <Navbar />
          <Component className={Style.content} {...pageProps} />
          <Footer /> */}
    </>
  );
}
