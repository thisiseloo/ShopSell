// src/pages/FashionHistory.jsx
import React from "react";
import AncientShoe from "../../components/AncientShoe/AncientShoe";
import CrocadileBag from "../../components/CrocadileBag/CrocadileBag";
import HistoricalShoe from "../../components/HistoricalShoe/HistoricalShoe";

function FashionHistory() {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Moda Tarixinə Səyahət</h2>
      <AncientShoe />
      <HistoricalShoe />
      <CrocadileBag />
    </div>
  );
}

export default FashionHistory;