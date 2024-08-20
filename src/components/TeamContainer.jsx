import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";


const TeamContainer = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet className="" />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default TeamContainer;
