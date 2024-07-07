import { Outlet } from "react-router-dom"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Service from "./Service"


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