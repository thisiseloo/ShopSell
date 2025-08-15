import React from "react";
import "./ApproachDesigns.css";

const ImageRow = () => {
  const images = [
    "https://i.pinimg.com/736x/0b/14/05/0b1405b85ae2996c936a7428762fd2b7.jpg",
    "https://i.pinimg.com/1200x/f3/5b/d7/f35bd771be8a3545a379db62bd6fbe48.jpg",
    "https://i.pinimg.com/736x/95/e0/b0/95e0b0fe1d7b4ae5113a98c03f085e29.jpg",
    "https://i.pinimg.com/1200x/55/8a/89/558a893a3aea9eeefc16cf6998e635cd.jpg",
    "https://i.pinimg.com/1200x/7a/bf/47/7abf47e14c8b3513b9e1f87ba81fbde3.jpg",
    "https://i.pinimg.com/736x/d7/27/3c/d7273c8bcbe03f9e52475a12377dd54e.jpg",
  ];

  return (
    <div className="image-row">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`img-${index + 1}`} />
      ))}
    </div>
  );
};

function ApproachDesigns() {
  return (
    <div className="approach-container text-center">
      <div className="approachDesigns">MODA DİZAYNINA YANAŞMAMIZ</div>
      <div className="approachDesignsText">
        <span className="approachDesignsSpan">ShopSell</span> olaraq biz hər
        addımda sizə özünüzü xüsusi hiss etdirəcək dizaynlar yaradırıq.
        Yaradıcılığı dəqiqliklə, estetikani funksionallıqla birləşdirərək,
        trendlərə yox, zamansızlığa yönəlirik. Hər bir ayaqqabı və çantamız
        keyfiyyətli materiallardan hazırlanır, incə detallarla tamamlanaraq həm
        gündəlik, həm də xüsusi günlər üçün ideal seçimə çevrilir.
      </div>

      <ImageRow />
    </div>
  );
}

export default ApproachDesigns;
