import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Style from "../styles/header.module.css";
import Footer from "@/Component/super-admin/footer";
import Navbar from "@/Component/super-admin/navbar/navbar";
import Login from "@/Component/super-admin/login-form/login";
import localDetails from "../../utils/localstoragefile";

export default function App({ Component, pageProps }) {

  const LocalSData = localDetails();

  console.log("====first",LocalSData );



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

      {/* <Login /> */}
      {/* <Navbar />
          <Component className={Style.content} {...pageProps} />
          <Footer /> */}
    </>
  );
}
