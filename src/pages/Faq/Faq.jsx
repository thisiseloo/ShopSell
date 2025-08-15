import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const faqs = [
  {
    question: "Çatdırılma nə qədər sürür?",
    answer:
      "Bakı və ətraf bölgələrdə 1-3 iş günü, digər bölgələrdə 3-7 iş günü.",
  },
  {
    question: "Ödənişi necə edə bilərəm?",
    answer: "Kartla, bank köçürməsi və ya nağd ödəniş mümkündür.",
  },
  {
    question: "Məhsulu qaytara bilərəm?",
    answer:
      "Bəli, 14 gün ərzində qaytarma mümkündür, məhsul istifadə edilməmiş olmalıdır.",
  },
  {
    question: "Endirimlərdən necə yararlanmaq olar?",
    answer:
      "E-poçtla qeydiyyatdan keçməklə əlavə 25% endirim əldə edə bilərsiniz.",
  },
  {
    question: "Çatdırılma ödənişi varmı?",
    answer: "300azn-dan yuxarı sifarişlər üçün pulsuz çatdırılma mövcuddur.",
  },
  {
    question: "Məhsul keyfiyyəti necədir?",
    answer:
      "Bütün məhsullarımız keyfiyyət standartlarına uyğun və orijinaldır.",
  },
];

const FAQ = () => {
  // Hər sual üçün açıq/bağlı state
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index]; // sadəcə həmin sualın state-i dəyişir
    setOpenStates(newStates);
  };

  return (
    <div className="max-w-3xl mx-auto mb-[100px] py-12 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center text-[#290041]">
        Tez-tez verilən suallar
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <FaRegCircleQuestion className="text-[#290041]/70 w-6 h-6" />
                <span className="text-[#290041] font-semibold text-lg">
                  {faq.question}
                </span>
              </div>
              <span
                className={`text-[#290041]/60 text-2xl font-bold transition-transform duration-300 ${
                  openStates[index] ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`px-6 text-[#290041]/60 transition-all duration-500 overflow-hidden ${
                openStates[index] ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
