import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Filter = ({
  filters,
  availableBrands,
  availableSizes,
  availableMaterials,
  availableHeels,
  availableCategories,
  availableContexts,
  onApply,
  onClear,
  selectedType,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => setLocalFilters(filters), [filters, selectedType]);

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSelect = (section, value) => {
    setLocalFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value);
    const newPrice = [...localFilters.price];
    newPrice[index] = value;
    setLocalFilters((prev) => ({ ...prev, price: newPrice }));
  };

  const renderSection = (title, sectionKey, options, isColor = false) => {
    if (!options || options.length === 0) return null;
    const isOpen = openSections[sectionKey];
    return (
      <div className="mb-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div
          className="flex justify-between items-center cursor-pointer px-3 py-2 font-semibold text-gray-800 bg-gray-100"
          onClick={() => toggleSection(sectionKey)}
        >
          {title}
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden px-3`}
        >
          <div className="mt-3 flex flex-wrap gap-2 pb-3">
            {options.map((option) => {
              const value = isColor ? option.name : option;
              const isActive = localFilters[sectionKey]?.includes(value);
              return isColor ? (
                <div
                  key={value}
                  onClick={() => handleSelect(sectionKey, value)}
                  style={{ backgroundColor: option.bg }}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    isActive ? "ring-2 ring-indigo-600" : "border-gray-300"
                  }`}
                ></div>
              ) : (
                <div
                  key={value}
                  onClick={() => handleSelect(sectionKey, value)}
                  className={`px-3 py-1 rounded-full cursor-pointer text-sm font-medium border transition ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const colorPalette = [
    { name: "Bordo", bg: "#7b0000" },
    { name: "Qırmızı", bg: "red" },
    { name: "Çəhrayı", bg: "#ff7f7f" },
    { name: "Bənövşəyi", bg: "purple" },
    { name: "Mavi", bg: "blue" },
    { name: "Açıq mavi", bg: "#add8e6" },
    { name: "Yaşıl", bg: "green" },
    { name: "Açıq yaşıl", bg: "#90ee90" },
    { name: "Narıncı", bg: "orange" },
    { name: "Sarı", bg: "yellow" },
    { name: "Qəhvəyi", bg: "#844521" },
    { name: "Bej", bg: "#ffeebf" },
    { name: "Ağ", bg: "white" },
    { name: "Boz", bg: "grey" },
    { name: "Qara", bg: "black" },
  ];

  return (
    <div className="bg-white p-5 shadow-md rounded-2xl sticky top-6 border border-gray-100">
      {renderSection("Brend", "brand", availableBrands)}
      {selectedType !== "bag" && renderSection("Ölçü", "size", availableSizes)}
      {selectedType !== "bag" &&
        renderSection("Rəng", "color", colorPalette, true)}
      {renderSection(
        "Material",
        "material",
        selectedType === "shoe"
          ? availableMaterials.shoe
          : availableMaterials.bag
      )}
      {selectedType === "shoe" &&
        renderSection("Topuq ölçüsü", "heel", availableHeels)}
      {renderSection(
        "Kateqoriya",
        "category",
        selectedType === "shoe"
          ? availableCategories.shoe
          : selectedType === "bag"
          ? availableCategories.bag
          : []
      )}
      {selectedType === "shoe" &&
        renderSection("Ortam", "context", availableContexts)}
      <div className="mb-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
        <div className="font-semibold text-gray-800 mb-2">Qiymət aralığı</div>
        <div className="flex gap-2">
          <input
            type="number"
            value={localFilters.price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="min"
          />
          <input
            type="number"
            value={localFilters.price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="max"
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 mt-5">
        <button
          onClick={onClear}
          className="flex-1 bg-white text-gray-700 border border-gray-400 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Təmizlə
        </button>
        <button
          onClick={() => onApply(localFilters)}
          className="flex-1 bg-[#290041] text-white py-2 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Tətbiq et
        </button>
      </div>
    </div>
  );
};

export default Filter;
