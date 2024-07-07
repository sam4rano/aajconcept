import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is the minimum amount I can borrow?",
    answer: "The minimum loan amount you can borrow is $500.",
  },
  {
    id: 2,
    question: "What is the maximum loan amount available?",
    answer: "The maximum loan amount available is $50,000, depending on your eligibility.",
  },
  {
    id: 3,
    question: "What documents are required to apply for a loan?",
    answer: "You will need a valid ID, proof of income, and bank statements for the last 3 months.",
  },
  {
    id: 4,
    question: "How long does it take to process the loan application?",
    answer: "The loan application process typically takes 3-5 business days.",
  },
  {
    id: 5,
    question: "What are the interest rates on the loans?",
    answer: "Interest rates vary based on the loan amount and your creditworthiness. Rates typically range from 5% to 15%.",
  },
  {
    id: 6,
    question: "Can I repay my loan early?",
    answer: "Yes, you can repay your loan early without any prepayment penalties.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full p-4 bg-white">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center text-black p-4 font-nunito">
        FAQ
      </h1>
      <div className="mx-auto w-full max-w-[60rem] sm:w-[21.5rem] md:w-[40rem]">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border-b pb-2 bg-sky-100 p-4">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-semibold py-2 focus:outline-none text-black"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium font-montserrat">{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <FaMinus className="text-[15px]" />
                ) : (
                  <FaPlus className="text-[15px]" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 font-montserrat text-gray-500 p-2 text-base">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
