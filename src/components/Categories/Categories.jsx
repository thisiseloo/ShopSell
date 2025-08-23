import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Categories = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category === t("women")) navigate("/women");
    else if (category === t("men")) navigate("/men");
    else if (category === t("kids")) navigate("/kids");
  };

  const categories = [
    {
      title: t("women"),
      subtitle: t("for"),
      img: "/images/women_category.jpg",
    },
    { title: t("men"), subtitle: t("for"), img: "/images/men_category.jpg" },
    { title: t("kids"), subtitle: t("for"), img: "/images/kids_category.jpg" },
  ];

  return (
    <div ref={ref}>
      <h2 className="category-heading text-[#1a0029]">
        {t("categories_title")}
      </h2>
      <div className="category-container">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="category-item"
            onClick={() => handleClick(cat.title)}
          >
            <img src={cat.img} alt={cat.title} className="category-image" />
            <div className="category-text">
              <span className="category-title">{cat.title}</span>
              <span className="category-subtitle">{cat.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Categories;
