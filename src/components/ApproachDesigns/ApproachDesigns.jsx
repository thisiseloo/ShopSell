import React from "react";
import "./ApproachDesigns.css";

const ImageRow = () => {
  const images = [
    "https://i.pinimg.com/1200x/88/65/69/886569933ade8edcf60060a7ea768ed1.jpg",
    "https://i.pinimg.com/1200x/f3/5b/d7/f35bd771be8a3545a379db62bd6fbe48.jpg",
    "https://i.pinimg.com/736x/95/e0/b0/95e0b0fe1d7b4ae5113a98c03f085e29.jpg",
    "https://i.pinimg.com/1200x/55/8a/89/558a893a3aea9eeefc16cf6998e635cd.jpg",
    "https://i.pinimg.com/1200x/7a/bf/47/7abf47e14c8b3513b9e1f87ba81fbde3.jpg",
    "https://i.pinimg.com/736x/d7/27/3c/d7273c8bcbe03f9e52475a12377dd54e.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "30px",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`img-${index + 1}`}
          style={{
            width: "188px",
            height: "250px",
            objectFit: "cover",
            marginTop: index === 1 || index === 3 || index === 5 ? "100px" : "40px",

          }}
        />
      ))}
    </div>
  );
};

function ApproachDesigns() {
  return (
    <div className="approach-container text-center">
      <div className="approachDesigns">MODA DIZAYNINA YANAŞMAMIZ</div>
      <div className="approachDesignsText">
        <span className="approachDesignsSpan">ShopSell</span> olaraq biz hər
        addımda sizə özünüzü xüsusi hiss etdirəcək dizaynlar yaradırıq. <br />
        Yaradıcılığı dəqiqliklə, estetikani funksionallıqla birləşdirərək,{" "}
        trendlərə yox, <br /> zamansızlığa yönəlirik. Hər bir ayaqqabı və çantamız
        keyfiyyətli materiallardan hazırlanır, <br /> incə detallarla
        tamamlanaraq həm gündəlik, həm də xüsusi günlər üçün ideal seçimə
        çevrilir.
      </div>

      <ImageRow />
    </div>
  );
}

export default ApproachDesigns;
