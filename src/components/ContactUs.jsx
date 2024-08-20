import {
  REACT_APP_TEMPLATE_ID,
  REACT_APP_SERVICE_ID,
  REACT_APP_PUBLIC_KEY,
} from "../key";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error(error.text, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row justify-between items-start bg-white py-8 px-36 sm:px-4">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl sm:text-2xl font-bold mb-4 sm:text-center font-nunito">
          Keep In Touch With Us
        </h2>
        <form className="space-y-4" onSubmit={sendEmail}>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Your Name"
              id="user_name"
              name="user_name"
              className="w-1/2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-white dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              id="user_email"
              name="user_email"
              className="w-1/2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-white dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Your Age"
              id="age"
              name="age"
              className="w-1/2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-white dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            />
            <input
              type="text"
              placeholder="Your Number"
              id="phone_number"
              name="phone_number"
              className="w-1/2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-white dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-white dark:text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500 h-32"
          />
          <button
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2 rounded-md hover:bg-orange-500 cursor-pointer text-lg sm:text-sm font-nunito"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
      <div className="w-full lg:w-1/2">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.302156853019!2d4.858072515206828!3d6.747959817350325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047a3b305021e6d7%3A0x9dfcdeddf2f19e13!2s19%20Showboy%20Express%2C%20Ore%2C%20Ondo%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1629228122161!5m2!1sen!2sng"
          width="100%"
          height="450"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
