import React from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';

const Categories = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (category === "Qadınlar") {
      navigate("/women");
    } else if (category === "Kişilər") {
      navigate("/men");
    } else if (category === "Uşaqlar") {
      navigate("/kids");
    }
  };

  return (
    <div ref={ref} className="category-container">
      {/* Qadınlar */}
      <div className="category-item">
        <img src="/images/women_category.jpg" alt="Qadın Ayaqqabısı" className="category-image" />
        <div className="category-text">
          <span className="category-title" onClick={() => handleClick("Qadınlar")}>Qadınlar</span>
          <span className="category-subtitle">üçün</span>
        </div>
      </div>

      {/* Kişilər */}
      <div className="category-item">
        <img src="/images/men_category.jpg" alt="Kişi Ayaqqabısı" className="category-image" />
        <div className="category-text">
          <span className="category-title" onClick={() => handleClick("Kişilər")}>Kişilər</span>
          <span className="category-subtitle">üçün</span>
        </div>
      </div>

      {/* Uşaqlar */}
      <div className="category-item">
        <img src="/images/kids_category.jpg" alt="Uşaq Ayaqqabısı" className="category-image" />
        <div className="category-text">
          <span className="category-title" onClick={() => handleClick("Uşaqlar")}>Uşaqlar</span>
          <span className="category-subtitle">üçün</span>
        </div>
      </div>
    </div>
  );
});

export default Categories;