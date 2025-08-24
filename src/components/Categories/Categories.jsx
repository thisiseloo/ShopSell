import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Categories = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (categoryTitle) => {
    if (categoryTitle === t("women")) navigate("/women");
    else if (categoryTitle === t("men")) navigate("/men");
    else if (categoryTitle === t("kids")) navigate("/kids");
  };

  const categories = [
    {
      title: t("women"),
      subtitle: t("for"),
      img: "/images/women_category.jpg",
    },
    {
      title: t("men"),
      subtitle: t("for"),
      img: "/images/men_category.jpg",
    },
    {
      title: t("kids"),
      subtitle: t("for"),
      img: "/images/kids_category.jpg",
    },
  ];

  return (
    <div ref={ref}>
      <h2
        style={{ fontFamily: "'Noto Serif', serif", fontWeight: 800 }}
        className="category-heading text-[#1a0029] text-[30px] sm:text-[45px]"
      >
        {t("categories_title")}
      </h2>

      <div className="category-container">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
            onClick={() => handleClick(category.title)}
          >
            <img
              src={category.img}
              alt={category.title}
              className="category-image"
            />
            <div className="category-text">
              <span className="category-title">{category.title}</span>
              <span className="category-subtitle">{category.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Categories;
