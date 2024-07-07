import React from "react";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    category: "DESIGN",
    title: "Learn with these award-winning best blog collage courses",
    description:
      "Are you passionate about design? Explore the world of design with our award-winning collage...",
    image: "path-to-image1.jpg", // Update with actual image paths
    link: "#",
  },
  {
    id: 2,
    category: "FOOD",
    title: "The Art of Baking: Mastering Delicious Pastries",
    description:
      "If you have a sweet tooth and a passion for baking, this blog is for you. Learn the art of baking and...",
    image: "path-to-image2.jpg", // Update with actual image paths
    link: "#",
  },
  {
    id: 3,
    category: "SCIENCE",
    title: "The Wonders of Space: Exploring the Cosmos",
    description:
      "Space has always fascinated humanity, and in this blog, we embark on a cosmic journey. Explore the...",
    image: "path-to-image3.jpg", // Update with actual image paths
    link: "#",
  },
];

const Features = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Latest Blog And News.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden sm:w-full"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm font-semibold text-purple-600 uppercase mb-2">
                  {blog.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-purple-600 font-semibold flex items-center"
                >
                  Read More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
