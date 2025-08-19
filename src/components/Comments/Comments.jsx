import React, { useState, useEffect } from "react";
import commentsData from "../../data/comments";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Star = ({ filled, onClick }) => (
  <span
    className={`cursor-pointer text-2xl sm:text-3xl transition-colors ${
      filled ? "text-yellow-400" : " text-[#1a0029]/20"
    }`}
    onClick={onClick}
  >
    ★
  </span>
);

const Comments = () => {
  const { t } = useTranslation();

  const [userComments, setUserComments] = useState(() => {
    const savedComments = localStorage.getItem("userComments");
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const step = 2;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem("userComments", JSON.stringify(userComments));
  }, [userComments]);

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(commentsData.length + userComments.length - visibleCount, 0)
        : prevIndex - step
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + step >= commentsData.length + userComments.length
        ? 0
        : prevIndex + step
    );
  };

  const allComments = [...commentsData, ...userComments];
  const visibleComments = allComments
    .concat(allComments)
    .slice(startIndex, startIndex + visibleCount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert(t("star_alert"));
    const newComment = {
      id: commentsData.length + userComments.length + 1,
      name: name + " " + surname,
      rating,
      comment: commentText,
    };
    setUserComments([...userComments, newComment]);
    setName("");
    setSurname("");
    setCommentText("");
    setRating(0);
  };

  return (
    <div className="max-w-7xl mx-auto mt-[70px] py-8 px-4 sm:py-10 sm:px-6 lg:py-12 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-[28px] sm:text-[35px] font-bold text-[#1a0029] text-center sm:text-left mb-3 sm:mb-0">
          {t("comments_title")}
        </h2>
        <div className="flex gap-[10px] space-x-3 mt-2 sm:mt-0">
          <FaArrowLeftLong
            onClick={prev}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-[#1a0029]/80 hover:text-[#1a0029] transition-colors"
          />
          <FaArrowRightLong
            onClick={next}
            className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-[#1a0029]/80 hover:text-[#1a0029] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12">
        {visibleComments.map((t) => (
          <div
            key={t.id}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col transform transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 w-full sm:flex-1 sm:min-w-[300px]"
          >
            <div className="flex mb-2 sm:mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xl sm:text-2xl ${
                    i < t.rating ? "text-yellow-400" : " text-[#1a0029]/20"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <h3 className="font-semibold mb-1 sm:mb-2 text-md sm:text-lg text-[#1a0029]/90">
              {t.name}
            </h3>
            <p className=" text-[#1a0029]/80 italic text-sm sm:text-base">
              {t.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-3/5">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left text-[#1a0029]">
            {t("comment_form_title")}
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("first_name_placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mb-4 sm:mb-5 p-2 sm:p-3 border border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#290041] transition"
            />
            <input
              type="text"
              placeholder={t("last_name_placeholder")}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              className="w-full mb-4 sm:mb-5 p-2 sm:p-3 border border-gray-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-[#290041] transition"
            />
            <textarea
              placeholder={t("comment_placeholder")}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
              className="w-full mb-4 sm:mb-6 p-3 sm:p-4 border border-gray-300 rounded-[50px] resize-none focus:outline-none focus:ring-2 focus:ring-[#290041] transition text-sm sm:text-base"
            />
            <div className="mb-4 sm:mb-5 flex items-center justify-center space-x-1 sm:space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  filled={i < rating}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#290041] text-white px-4 sm:px-6 py-2 sm:py-3 text-[18px] sm:text-[20px] rounded-[50px] hover:!bg-gray-200 hover:!text-[#1a0029] border-1 hover:!border-[#290041] 
             transition w-full"
            >
              {t("submit_button")}
            </button>
          </form>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-center overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://i.pinimg.com/736x/f4/05/36/f40536f5c9b8305d82d166b41d3fcefd.jpg"
            alt="Müştəri rəyi"
            className="rounded-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[545px] transform scale-110 sm:scale-125 transition-transform duration-300 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
