import React from "react";
import "./HistoricalShoe.css";

function HistoricalShoe() {
  return (
    <div className="HistoricalShoeContainer">
      <div className="image-side">
        <img
          src="https://i.pinimg.com/1200x/39/7a/df/397adf2c4b6611de3d6bd9ee202e3f93.jpg"
          alt="Fort Rock Sandals"
          className="HistoricalShoeImage"
        />
      </div>
      <div className="text-side">
        <p>
          18-ci əsrə qədər ayaqqabılar “sol” və “sağ” olaraq ayrılmırdı. Hər iki
          ayaqqabı eyni formalı olurdu. Sol-sağ fərqi 19-cu əsrdə ABŞ-da ortaya
          çıxdı və daha sonra dünyaya yayıldı.
        </p>
      </div>
    </div>
  );
}

export default HistoricalShoe;
