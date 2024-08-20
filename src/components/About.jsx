import about_img from "../../src/assets/artboard.jpg";
import about from "../assets/logo.jpeg"
import mony from "../assets/moneyyy_bg.png";

const About = () => {
  const style = {
    backgroundImage: `url(${mony})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };
  return (
    <section className="bg-slate-100 py-20 sm:py-10 md:px-2 mt-4">
      {/* <div className="" style={style}></div> */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-36 sm:px-4">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ">
          <img
            src={about}
            alt="About Us"
            className="w-full h-[32rem] sm:h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 p-4" >
          <h2 className="text-4xl md:text-2xl font-bold text-gray-800 mb-6 sm:text-2xl sm:text-center">
            A.A.J Lag Multipurpose Nigeria Limited
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 sm:text-center">
            A.A.J Lag Multipurpose Nigeria Limited is a diverse and dynamic
            company dedicated to providing a wide range of services and products
            across various sectors. Our mission is to drive growth and
            innovation in estate management, real estate, general contracts, and
            merchandise trading, among other fields.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 sm:text-center">
            We are committed to delivering excellence and fostering growth
            across all our business ventures. As a private company limited by
            shares, we prioritize the satisfaction and success of our clients
            and stakeholders.
          </p>
          <p className="text-teal-500 sm:text-center font-bold font-nunito py-5 text-xl">
            FULLY REGISTERED UNDER CAC: 7146308
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
