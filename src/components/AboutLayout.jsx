import { Outlet } from "react-router-dom"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Navbar from "./Navbar"


const AboutLayout = () => {
  return (
	<div>
		<Navbar />
		<Outlet />
		
		<ContactUs />
		<Footer />
	</div>
  )
}

export default AboutLayout