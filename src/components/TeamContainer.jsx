import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import BackToTopButton from "../utils/BackToTopButton";


const TeamContainer = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet className="" />
      <ContactUs />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default TeamContainer;
