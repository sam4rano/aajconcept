
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const InfoPage = () => {
 
  return (
	<div className="bg-cover bg-center w-full">
    <Navbar />
	<Outlet />
    <Footer />
  </div>
  )
}

export default InfoPage