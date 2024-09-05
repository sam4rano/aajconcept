import about from "../assets/logo.jpeg";

const About = () => {
  return (
    <section className="bg-slate-100 py-20 md:px-2 mt-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-20 sm:px-4">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ">
          <img
            src={about}
            alt="About Us"
            className="w-full h-[32rem] sm:h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16 p-4">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6 sm:text-2xl sm:text-center">
            Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 sm:text-center">
            Adore Arcade Judicature Lag Multipurpose Nigeria Limited is a
            diverse and dynamic company dedicated to providing a wide range of
            services and products across various sectors. Our mission is to
            drive growth and innovation in estate management, real estate,
            general contracts, and merchandise trading, among other fields.
          </p>
          <div>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6 sm:text-2xl sm:text-center">
              Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 sm:text-center">
              We are committed to delivering excellence and fostering growth
              across all our business ventures. As a private company limited by
              shares, we prioritize the satisfaction and success of our clients
              and stakeholders.
            </p>
          </div>
          <p className="text-orange-500 sm:text-center font-bold font-nunito py-5 text-xl">
            FULLY REGISTERED UNDER CAC: 7146308
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 py-10">
        <a
          href="https://wa.me/2349036250716"
          className="flex flex-row justify-center align-middle items-center bg-orange-500 text-white text-xl sm:text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-400 hover:scale-105 font-nunito"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call Now
        </a>
        <a
          href="tel:+2349036250716"
          className="flex flex-row justify-center align-middle items-center border-orange-500 border-2 text-xl sm:text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-orange-400 font-nunito"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default About;
