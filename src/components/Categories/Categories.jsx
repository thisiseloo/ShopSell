import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category === "Qadınlar") navigate("/women");
    else if (category === "Kişilər") navigate("/men");
    else if (category === "Uşaqlar") navigate("/kids");
  };

  const categories = [
    { title: "Qadınlar", subtitle: "üçün", img: "/images/women_category.jpg" },
    { title: "Kişilər", subtitle: "üçün", img: "/images/men_category.jpg" },
    { title: "Uşaqlar", subtitle: "üçün", img: "/images/kids_category.jpg" },
  ];

  return (
    <div ref={ref}>
      <h2 className="category-heading text-[#1a0029]">KATEQORİYALAR</h2>
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
