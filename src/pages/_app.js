import Footer from "@/Component/SuperAdmin/Footer";
import Navbar from "@/Component/SuperAdmin/Navbar/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </>
  );
}
