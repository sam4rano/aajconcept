import { Outlet } from "react-router-dom"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Navbar from "./Navbar"
import BackToTopButton from "../utils/BackToTopButton"


const AboutLayout = () => {
  return (
	<div>
		<Navbar />
		<Outlet />
		
		<ContactUs />
		<Footer />
		<BackToTopButton />
	</div>
  )
}

export default AboutLayout