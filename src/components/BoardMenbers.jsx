import { motion } from "framer-motion";

const BoardMembers = () => {
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
      name: "Douglas Lyphe",
      role: "Headmaster",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 5,
      name: "Parsley Montana",
      role: "Special Education Teacher",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 6,
      name: "Douglas Daft",
      role: "Head of Hall Building Manager",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 6,
      name: "Sam Oye",
      role: "Head of Hall Building Manager",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 7,
      name: "Douglas Lyphe",
      role: "Headmaster",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 8,
      name: "Parsley Montana",
      role: "Special Education Teacher",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
    {
      id: 9,
      name: "Douglas Daft",
      role: "Head of Hall Building Manager",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/18/9f/olumo-rock.jpg?w=1100&h=-1&s=1", // Replace with actual image paths
    },
  ];
  return (
    <div className="bg-white mt-20">
      <div className="text-center pb-4">
        <h1 className="text-4xl sm:text-2xl font-bold text-orange-500">
          Meet the Board
        </h1>
      </div>
      <div className="mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {facultyMembers.map((member) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4  }}
              key={member.id}
              className="text-center transition duration-300 ease-in-out transform hover:bg-white hover:scale-105 shadow-lg"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
