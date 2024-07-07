import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Trader",
    feedback:
      "AAJ has provided excellent service and support. Their loan process is smooth and quick.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "Farmer",
    feedback:
      "Thanks to AAJ, I was able to expand my farming business. Their interest rates are very reasonable.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Robert Brown",
    occupation: "Construction Worker",
    feedback:
      "The support from AAJ has been a game-changer for my construction projects.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 4,
    name: "Emily Johnson",
    occupation: "Shop Owner",
    feedback:
      "AAJ's financial assistance helped me restock my shop and improve my business.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="py-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Testimonials</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="flex flex-row justify-center items-center align-middle gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold mb-1">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {testimonial.occupation}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4 text-center">
                  <FaQuoteLeft className="inline-block mr-2" />
                  {testimonial.feedback}
                  <FaQuoteRight className="inline-block ml-2" />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
