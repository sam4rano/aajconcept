import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Service from "./Service"



const HistoryContainer = () => {
  return (
	<div>
		<Navbar />
		<Outlet />
		<Service />
		<ContactUs />
		<Footer />
	</div>
  )
}

export default HistoryContainer