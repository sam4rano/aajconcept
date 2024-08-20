import Home from "./pages/Home";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Rules from "./components/Rules";
import Testimonials from "./components/Testimonials";
import Service from "./components/Service";
import BackToTopButton from "./utils/BackToTopButton";

const Layout = () => {
  return (
    <div>
      <Home />

      <Benefits />
      <Rules />
      <Service />
      <Testimonials />
      <ContactUs />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
