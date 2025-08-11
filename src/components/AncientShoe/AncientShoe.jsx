import React from "react";
import "./AncientShoe.css";

function AncientShoe() {
  return (
    <div className="ancient-shoe-container">
      <div className="image-side">
        <img
          src="https://www.oregonencyclopedia.org/media/uploads/Fort_Rock_sandals_1938_bb006673.jpg"
          alt="Fort Rock Sandals"
          className="sandalImage"
        />
      </div>
      <div className="text-side">
        <p>
          İlk ayaqqabılar dəridən və ya bitki liflərindən hazırlanmış sandallar
          idi. Dünyada tapılmış ən qədim ayaqqabı - ABŞ-da Oregon ştatında
          tapılan Fort Rock sandalları təxminən 10,000 yaşındadır.
        </p>
      </div>
    </div>
  );
}

export default AncientShoe;
