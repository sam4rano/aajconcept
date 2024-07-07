import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";

const Home = () => {
  return (
    <div className="bg-blue-500 ">
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="relative z-40">
        <Herosection />
      </div>
    </div>
  );
};

export default Home;
