import "./Herosection.css";
import { motion } from "framer-motion";

import moneyy from "../assets/money_bg.png"

const Herosection = () => {
  const text = " Seamless Loan !!";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  const style = {
    backgroundImage: `url(${moneyy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

  return (
    <div
      className="relative flex flex-row w-full justify-between sm:flex-col sm:justify-center sm:align-middle sm:items-center sm:w-full"
      style={style}
    >
      <div className="h-[31rem] w-1/2 flex flex-col px-4 justify-center align-middle items-center relative sm:w-full gap-4">

        <div className="text-5xl sm:text-4xl font-bold z-30 sm:text-center text-black pb-4 font-nunito">
          Get a quick loan 
          <span className=" font-bold px-4  rounded-bl-xl rounded-tr-xl border-2 border-orange-400 ">
            with us
          </span>
        </div>
        <p className="text-3xl sm:text-2xl z-30 font-nunito text-white sm:text-center font-bold">
         We offer the best loan with the <span className="text-green-500">best rate.</span>
        </p>
        <div className="flex flex-row justify-center gap-4 z-40">
          <button className="flex flex-row justify-center align-middle items-center bg-orange-500 text-white text-xl sm:text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-400 hover:scale-105 font-nunito">
            Apply Now
          </button>
          <button className="flex flex-row justify-center align-middle items-center border-orange-500 border-2 text-xl sm:text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-white font-nunito">
            Learn more
          </button>
        </div>
      </div>
     
      <p className=" sm:hidden absolute z-50 left-[60%] top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 bg-green-600 text-white rounded-[20px] font-nunito">
        <motion.div
          className="text-xl sm:text-base font-bold text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={child}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </p>
    </div>
  );
};

export default Herosection;
