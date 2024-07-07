import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const rules = [
  {
    id: 1,
    question: "What are the form fees for collecting a loan?",
    answer: "Borrower must pay form fees before collecting loan; I.E. N30,000 to N60,000 is (N4,000) for form fees, N70,000 to N100,000 is (N6,000) for form fees."
  },
  {
    id: 2,
    question: "How many guarantors are required before collecting a loan?",
    answer: "Borrower must have one or two guarantors before collecting Loan."
  },
  {
    id: 3,
    question: "When must the borrower pay interest?",
    answer: "Borrower must pay interest according to Loan date of repayment."
  },
  {
    id: 4,
    question: "Who can the group contact to remind about payment?",
    answer: "The group have all access to call either the borrower or guarantor to remind them of their payment."
  },
  {
    id: 5,
    question: "When must loan and interest be paid?",
    answer: "Loan and interest must be paid before 2:00 clock at noon, failure will pay a fine of N500 on the payment day."
  },
  {
    id: 6,
    question: "What happens if the borrower does not pay interest on time?",
    answer: "Failure of not paying interest fine amount is 3% on fail interest on the payment day."
  },
  {
    id: 7,
    question: "What is the penalty for failing to repay all loan and interest?",
    answer: "Failure to repay all Loan and interest back fully will attract 10% fine on borrower fail amount."
  },
  {
    id: 8,
    question: "What happens if the borrower fails the first agreement?",
    answer: "A.A.J will give Extra (3) month to borrower if he/she fail the first agreement and borrower will pay Extended fine for new date of repayment."
  }
];

const RulesAndRegulations = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleRule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-4">
        <h1 className="text-2xl font-bold mb-4 font-nunito text-center" >RULES AND REGULATIONS</h1>
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={rule.id} className="border-b pb-2 bg-sky-100 p-4 rounded-lg">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold py-2 focus:outline-none text-black"
                onClick={() => toggleRule(index)}
              >
                <span className="text-lg font-medium font-montserrat">{rule.question}</span>
                <span>
                  {openIndex === index ? (
                    <FaMinus className="text-[15px]" />
                  ) : (
                    <FaPlus className="text-[15px]" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-500 p-2 text-base font-montserrat">
                  <p>{rule.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesAndRegulations;
