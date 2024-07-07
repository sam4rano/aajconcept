
import { FaAward, FaHandshake, FaUsers, FaLaptopCode, FaBuilding, FaCogs, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ValuesSection = () => {
  const valuesData = [
    { id: 1, title: "Integrity", description: "Displaying the highest level of integrity in the way we conduct our business", icon: <FaAward className="text-pink-600 text-3xl" /> },
    { id: 2, title: "Demonstrate", description: "Demonstrating a strong Will to Win in the market place", icon: <FaHandshake className="text-pink-600 text-3xl" /> },
    { id: 3, title: "Diversity", description: "Promoting Diversity in the workplace and community", icon: <FaUsers className="text-pink-600 text-3xl" /> },
    { id: 4, title: "Technology", description: "Harnessing the power of Technology to deliver better customer experience", icon: <FaLaptopCode className="text-pink-600 text-3xl" /> },
    { id: 5, title: "Corporate", description: "Setting the standard for the best Corporate Citizenship in the communities we work", icon: <FaBuilding className="text-pink-600 text-3xl" /> },
    { id: 6, title: "Digital", description: "Setting the standard for the best Corporate Citizenship in the communities we work", icon: <FaCogs className="text-pink-600 text-3xl" /> },
  ];

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-white rounded-full shadow-md p-2 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        onClick={onClick}
      >
        <FaArrowRight size={20} className='text-black'/>
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="bg-white rounded-full shadow-md p-2 cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        onClick={onClick}
      >
        <FaArrowLeft size={20} className='text-black' />
      </div>
    );
  };

 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <section className="bg-gradient-to-r from-[#1b374b] to-[#898b95] py-10 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 sm:text-2xl sm:text-center font-nunito">Creating Extraordinary Customer Experience</h2>
        <Slider {...settings}>
          {valuesData.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-80 flex flex-col justify-between">
                <div className="flex justify-center mb-4 text-4xl ">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 sm:text-xl sm:font-bold font-montserrat">{service.title}</h3>
                <p className="text-gray-600 font-montserrat font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default ValuesSection;
