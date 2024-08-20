import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import ContactUs from "./ContactUs"
import Footer from "./Footer"


const ServicePage = () => {
  return (
	<div>
		<Navbar />
		<Outlet />
		
		<ContactUs />
		<Footer />
	</div>
  )
}

export default ServicePage