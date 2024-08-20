import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaEnvelope,
  FaPhone,
  FaGlobeAfrica,
} from "react-icons/fa";

const quickLinks = [
   { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    
    { id: 3, title: "Team", link: "/team" },
];



const contacts = [
  {
    id: 1,
    icon: <FaGlobeAfrica size={20} />,
    text: "19, Showboy Express, Ore Ondo State",
    link: "geo:0,0?q=Showboy+Express+Ore+Ondo+State",
  },
  {
    id: 2,
    icon: <FaPhone size={20} />,
    text: "+234 9036250716",
    link: "tel:+2349036250716",
  },
  {
    id: 4,
    icon: <FaEnvelope size={20} />,
    text: "ademolajos1@gmail.com",
    link: "mailto:ademolajos1@gmail.com",
  },
];

const Footer = () => {
  return (
    <div  className="bg-gradient-to-r from-[#1b374b] to-slate-600 text-white py-12">
      <div className="px-8 mx-auto flex flex-wrap w-full flex-col">
        <div className="grid grid-cols-4 sm:flex sm:flex-col sm:gap-4 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl sm:text-lg font-bold mb-4 font-nunito">
            Adore Arcade Judicature Lag Multipurpose Investment Group

            </h2>
            <p className="mb-4 text-lg sm:text-sm text-gray-400 font-nunito">
            Friendly Loan Scheme
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FaFacebookF size={30} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn size={30} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter size={30} />
              </a>

              <a href="#" className="text-gray-400 hover:text-white" aria-label="Google Plus">
                <FaGooglePlusG size={30} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-lg font-bold mb-4 font-nunito">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white text-lg sm:text-sm font-montserrat"
                  >
                    - {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-lg font-bold mb-4 font-montserrat">Our Contacts</h3>
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className="flex items-center text-gray-400 text-lg sm:text-sm"
                >
                  <div className="mr-2 text-gray-300">{contact.icon}</div>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 sm:text-lg font-nunito">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-lg sm:text-sm font-montserrat">
            Stay updated with our latest news and service updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="placeholder:text-xl sm:placeholder:text-lg w-full px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300 text-xl sm:text-lg font-montserrat"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between text-base sm:text-sm text-gray-400 font-nunito">
          <p>
            &copy; {new Date().getFullYear()}  A.A.J Lag Multipurpose Investment Group . All
            rights reserved.
          </p>
          <div className="flex space-x-4 text-base sm:text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
