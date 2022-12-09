import "../styles/global.css";
import "../styles/variables.css";
import "../styles/common.css";


import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: false,
      offset: 120,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
