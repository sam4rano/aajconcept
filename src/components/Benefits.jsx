import { motion } from "framer-motion";
import {
  FaPiggyBank,
  FaChartLine,
  FaDollarSign,
  FaUserShield,
  FaUserTie, 
} from "react-icons/fa";

const benefits = [
  {
    id: 1,
    icon: <FaPiggyBank size={40} />,
    title: "Financial Support",
    description:
      "Loans provide essential financial support, helping you manage large expenses and achieve your financial goals.",
    bgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-200",
    iconColor: "text-blue-500",
    textColor: "text-blue-700",
    titleColor: "text-blue-800",
  },
  {
    id: 2,
    icon: <FaChartLine size={40} />,
    title: "Credit Score Improvement",
    description:
      "Taking out a loan and making timely payments can improve your credit score, enhancing your financial standing.",
    bgColor: "bg-pink-100",
    hoverColor: "hover:bg-pink-200",
    iconColor: "text-pink-500",
    textColor: "text-pink-700",
    titleColor: "text-pink-800",
  },
  {
    id: 3,
    icon: <FaDollarSign size={40} />,
    title: "Lower Interest Rates",
    description:
      "Loans often come with lower interest rates compared to credit cards, saving you money on interest payments.",
    bgColor: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-200",
    iconColor: "text-yellow-500",
    textColor: "text-yellow-700",
    titleColor: "text-yellow-800",
  },
  {
    id: 4,
    icon: <FaUserShield size={40} />,
    title: "Flexible Repayment Options",
    description:
      "Many loans offer flexible repayment plans, allowing you to choose an option that fits your financial situation.",
    bgColor: "bg-red-100",
    hoverColor: "hover:bg-red-200",
    iconColor: "text-red-500",
    textColor: "text-red-700",
    titleColor: "text-red-800",
  },
  {
    id: 5,
    icon: <FaUserTie size={40} />,
    title: "Multiple Purposes",
    description:
      "Loans can be used for various purposes such as home renovations, medical expenses, education, or business expansion.",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
    iconColor: "text-purple-500",
    textColor: "text-purple-700",
    titleColor: "text-purple-800",
  },
  {
    id: 6,
    icon: <FaUserShield size={40} />,
    title: "Quick Access to Funds",
    description:
      "Once approved, loan funds are typically disbursed quickly, allowing you to address your financial needs promptly.",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200",
    iconColor: "text-green-500",
    textColor: "text-green-700",
    titleColor: "text-green-800",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Benefits = () => {
  return (
    <div className="bg-gray-200 py-20">
      <h1 className="text-center text-3xl sm:text-2xl sm:px-4 pb-10 text-slate-600 font-bold font-nunito">
        BENEFITS OF APPLYING FOR A LOAN
      </h1>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className={`rounded-lg shadow-lg p-6 text-center ${benefit.bgColor} ${benefit.hoverColor} transition-colors duration-300`}
            >
              <div className="flex flex-row gap-4 justify-center items-center">
                <div
                  className={`mb-4 flex justify-center ${benefit.iconColor}`}
                >
                  <span>{benefit.icon}</span>
                </div>
                <h3
                  className={`text-2xl font-nunito sm:text-lg md:text-xl font-bold mb-2 ${benefit.titleColor}`}
                >
                  {benefit.title}
                </h3>
              </div>
              <p
                className={`text-gray-600 font-montserrat text-xl sm:text-sm ${benefit.textColor}`}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
