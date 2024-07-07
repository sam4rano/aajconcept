import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const facultyMembers = [
  {
    id: 1,
    name: "Douglas Lyphe",
    role: "Headmaster",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Parsley Montana",
    role: "Special Education Teacher",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
  },
  {
    id: 3,
    name: "Douglas Daft",
    role: "Head of Hall Building Manager",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
  },
  {
    id: 4,
    name: "Sam Oye",
    role: "Head of Hall Building Manager",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
  },
];

const Alumni = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-12 pt-8">
        <h2 className="text-lg sm:text-sm font-semibold text-gray-500 uppercase">
          Board
        </h2>
        <h1 className="text-4xl sm:text-2xl font-bold text-orange-500">
          Meet the <span className="text-orange-500">Board</span>
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {facultyMembers.map((member) => (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:0.3 }}
              key={member.id}
              className="text-center"
            >
              <img
                className="w-full h-[12rem] rounded-lg shadow-md"
                src={member.imageUrl}
                alt={member.name}
              />
              <h1 className="mt-4 text-2xl sm:text-lg font-bold">
                {member.name}
              </h1>
              <p className="text-gray-500 text-xl sm:text-sm">{member.role}</p>
            </motion.section>
          ))}
        </div>
        <Link to="/board" className="flex justify-end items-end py-4 sm:py-2">
          <button className="flex flex-row justify-center align-middle items-center bg-[#D61A46] text-white text-xl sm:text-lg font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105">
            See more
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Alumni;
