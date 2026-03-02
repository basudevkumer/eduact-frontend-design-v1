import { Outlet } from "react-router-dom";
import Navbar from "../component/common/Navbar"
import Footer from "../component/common/Footer"

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
