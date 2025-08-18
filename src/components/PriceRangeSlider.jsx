import React from "react";

const PriceRangeSlider = ({ min, max, values, onChange }) => {
  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), values[1]);
    onChange([val, values[1]]);
  };

  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), values[0]);
    onChange([values[0], val]);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="number"
          min={min}
          max={values[1]}
          value={values[0]}
          onChange={handleMinChange}
          className="w-1/2 p-1 border rounded"
        />
        <input
          type="number"
          min={values[0]}
          max={max}
          value={values[1]}
          onChange={handleMaxChange}
          className="w-1/2 p-1 border rounded"
        />
      </div>

      <div className="relative h-6">
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={handleMinChange}
          className="absolute top-0 left-0 w-full pointer-events-none appearance-none"
          style={{ pointerEvents: "auto" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={handleMaxChange}
          className="absolute top-0 left-0 w-full pointer-events-none appearance-none"
          style={{ pointerEvents: "auto" }}
        />

        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded"></div>

        <div
          className="absolute top-1/2 h-1 bg-pink-600 rounded"
          style={{
            left: `${((values[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((values[1] - min) / (max - min)) * 100}%`,
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
