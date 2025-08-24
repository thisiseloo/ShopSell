import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq1_question"),
      answer: t("faq1_answer"),
    },
    {
      question: t("faq2_question"),
      answer: t("faq2_answer"),
    },
    {
      question: t("faq3_question"),
      answer: t("faq3_answer"),
    },
    {
      question: t("faq4_question"),
      answer: t("faq4_answer"),
    },
    {
      question: t("faq5_question"),
      answer: t("faq5_answer"),
    },
    {
      question: t("faq6_question"),
      answer: t("faq6_answer"),
    },
  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  return (
    <div className="max-w-3xl mx-auto mb-[100px] py-8 px-4 sm:py-12 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-purple-900">
        {t("faq_main_title")}
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <FaRegCircleQuestion className="text-[#290041]/70 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-[#290041] font-semibold text-base sm:text-lg">
                  {faq.question}
                </span>
              </div>
              <span
                className={`text-[#290041]/60 text-xl sm:text-2xl font-bold transition-transform duration-300 ${
                  openStates[index] ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`px-4 sm:px-6 pb-4 text-[#290041]/60 transition-all duration-500 overflow-hidden ${
                openStates[index] ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm sm:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
