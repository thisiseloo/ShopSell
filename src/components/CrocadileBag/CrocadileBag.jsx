import React from "react";
import "./CrocadileBag.css";

function CrocadileBag() {
  return (
    <div className="CrocadileBagContainer">
      <div className="text-side">
        <p>
          1920–1930-cu illərdə timsah dərisindən hazırlanan çantalar lüks status
          simvoluna çevrildi. Bu dövrdə Afrikada və Amerikada minlərlə timsah
          yalnız çanta istehsalı üçün öldürülürdü. Bu da ilk dəfə heyvan
          hüquqları ilə bağlı moda dünyasında müzakirələrə səbəb oldu.
        </p>
      </div>
      <div className="image-side">
        <img
          src="https://i.pinimg.com/736x/e7/68/25/e7682555aad626af16ddc2279dd52752.jpg"
          alt="Fort Rock Sandals"
          className="CrocadileBagImage"
        />
      </div>
    </div>
  );
}

export default CrocadileBag;
