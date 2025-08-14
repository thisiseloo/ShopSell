import React, { useState } from "react";
import commentsData from "../../data/comments";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Star = ({ filled, onClick }) => (
  <span
    className={`cursor-pointer text-2xl sm:text-3xl transition-colors ${
      filled ? "text-yellow-400" : "text-gray-300"
    }`}
    onClick={onClick}
  >
    ★
  </span>
);

const Comments = () => {
  const [comments, setComments] = useState(commentsData);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const step = 2;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(comments.length - visibleCount, 0)
        : prevIndex - step
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + step >= comments.length ? 0 : prevIndex + step
    );
  };

  const visibleComments = comments
    .concat(comments)
    .slice(startIndex, startIndex + visibleCount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Zəhmət olmasa ulduz seçin!");
    const newComment = {
      id: comments.length + 1,
      name: name + " " + surname,
      rating,
      comment: commentText,
    };
    setComments([...comments, newComment]);
    setName("");
    setSurname("");
    setCommentText("");
    setRating(0);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:py-12 lg:px-8 mb-[100px]">
      {/* Başlıq və oxlar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-[28px] sm:text-[35px] font-bold text-gray-900 text-center sm:text-left mb-3 sm:mb-0">
          XOŞBƏXT MÜŞTƏRİLƏRİMİZ
        </h2>
        <div className="flex space-x-3 mt-2 sm:mt-0">
          <ChevronLeft
            onClick={prev}
            className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          />
          <ChevronRight
            onClick={next}
            className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          />
        </div>
      </div>

      {/* Şərhlər slider */}
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
                    i < t.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <h3 className="font-semibold mb-1 sm:mb-2 text-md sm:text-lg text-gray-800">
              {t.name}
            </h3>
            <p className="text-gray-600 italic text-sm sm:text-base">
              {t.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Form + Şəkil + Button */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-3/5">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left text-gray-900">
            Sən də öz rəyini bizimlə paylaş
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mb-4 sm:mb-5 p-2 sm:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#290041] transition"
            />
            <input
              type="text"
              placeholder="Soyadınız"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              className="w-full mb-4 sm:mb-5 p-2 sm:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#290041] transition"
            />
            <textarea
              placeholder="Rəyiniz"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
              className="w-full mb-4 sm:mb-6 p-3 sm:p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#290041] transition text-sm sm:text-base"
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
              className="bg-[#290041] text-white px-4 sm:px-6 py-2 sm:py-3 text-[18px] sm:text-[20px] rounded-xl hover:bg-[#3c005d] transition w-full"
            >
              Əlavə et
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
