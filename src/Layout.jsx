import Home from "./pages/Home";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Rules from "./components/Rules";
import Testimonials from "./components/Testimonials";

const Layout = () => {
  return (
    <div>
      <Home />

      <Benefits />
      <Rules />

      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
