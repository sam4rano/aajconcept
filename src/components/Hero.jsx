// src/components/HeroSection.js
import React from 'react';
import money_bg from "../assets/moneyy_bg.png";

const Hero = () => {
  const style = {
    backgroundImage: `url(${money_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };
  return (
    <section className="bg-pink-100 py-10 md:py-20 relative" style={style} >
      <div>
        
      </div>

    </section>
  );
};

export default Hero;



{/* <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Chase Your Dream with Us</h1>
          <p className="mt-4 text-gray-600">The harder you work for something, the greater you’ll feel when you achieve it.</p>
          <div className="mt-8 space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center lg:justify-start">
            <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">Apply Online</button>
            <button className="bg-white text-pink-600 border border-pink-600 py-2 px-4 rounded hover:bg-pink-100">Loan Calculator</button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src="path_to_image/family.png" alt="Family" className="w-2/3 lg:w-full" />
        </div> */}