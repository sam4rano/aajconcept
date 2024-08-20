import { motion } from "framer-motion";

const TeamMembers = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "ADEMUNREWA ADEMOLA DAVID",
      role: "DIRECTOR",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1",
    },
    {
      id: 2,
      name: "OLURIMISI DAMILARE",
      role: "DIRECTOR ADMIN",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1",
    },
    {
      id: 3,
      name: " SUNDAY AKPEVWE TAIWO",
      role: "EXECUTIVE OFFICER",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1",
    },
    {
      id: 4,
      name: "JOHN DOE",
      role: "COO",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1",
    },
  ];
  return (
    <div className="bg-slate-200 py-20">
      <div className="text-center pb-4 ">
        <h1 className="text-4xl sm:text-2xl py-5 font-bold text-orange-400">
          Meet the Team
        </h1>
      </div>
      <div className="mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {facultyMembers.map((member) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              key={member.id}
              className="text-center transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 flex flex-col justify-center items-center p-4"
            >
              <div className="w-80 h-80 bg-orange-400  rounded-full shadow-md" />
              <div className="bg-[#333D51] py-2 px-4 rounded-bl-2xl rounded-tr-2xl">
                <h1 className="mt-4 text-xl sm:text-lg font-bold text-white">
                  {member.name}
                </h1>
                <p className=" text-lg sm:text-sm text-[#CBD0D8]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
