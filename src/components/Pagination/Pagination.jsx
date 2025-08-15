import React, { useState, useEffect } from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isMobile) {
    // Mobil və planşet görünüşü
    return (
      <div className="flex justify-center items-center gap-3 mt-6 mb-10 pb-[80px] select-none">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full transition ${
            currentPage === 1
              ? "bg-gray-300 text-[#1a0029]/80 cursor-not-allowed"
              : "bg-[#1a0029] text-white hover:bg-[#290041b5]"
          }`}
          aria-label="Əvvəlki səhifə"
        >
          ←
        </button>

        {/* Ortadakı rəqəmlər — fon yoxdur, yazı qara */}
        <span className=" text-[#1a0029] font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full transition ${
            currentPage === totalPages
              ? "bg-gray-300 text-[#1a0029]/80 cursor-not-allowed"
              : "bg-[#1a0029] text-white hover:bg-[#290041b5]"
          }`}
          aria-label="Növbəti səhifə"
        >
          →
        </button>
      </div>
    );
  }

  // Desktop görünüşü
  return (
    <div className="flex justify-center items-center gap-3 mt-6 mb-10 select-none">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full transition ${
          currentPage === 1
            ? "bg-gray-300 text-[#1a0029]/80 cursor-not-allowed"
            : "bg-[#1a0029] text-white hover:bg-[#290041b5]"
        }`}
        aria-label="Əvvəlki səhifə"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === page
                ? "bg-[#2900419d] text-white"
                : "bg-gray-200 text-text-[#1a0029] hover:bg-[#29004128]"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
            aria-label={`Səhifə ${page}`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full transition ${
          currentPage === totalPages
            ? "bg-gray-300 text-[#1a0029]/80 cursor-not-allowed"
            : "bg-[#1a0029] text-white hover:bg-[#290041b5]"
        }`}
        aria-label="Növbəti səhifə"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
