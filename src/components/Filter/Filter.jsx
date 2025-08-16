import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Filter = ({
  filters,
  availableBrands,
  availableSizes,
  availableColors,
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

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
    return (
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer px-2 py-1 font-semibold text-[#290041]"
          onClick={() => toggleSection(sectionKey)}
        >
          {title}
          {openSections[sectionKey] ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>
        {openSections[sectionKey] && (
          <div className="mt-2 flex flex-wrap gap-2 px-2">
            {options.map((option) => {
              const value = isColor ? option.name : option;
              const isActive = localFilters[sectionKey]?.includes(value);
              return isColor ? (
                <div
                  key={value}
                  onClick={() => handleSelect(sectionKey, value)}
                  style={{ backgroundColor: option.bg }}
                  className={`w-8 h-8 rounded-full cursor-pointer border transition-all ${
                    isActive
                      ? "border-3 border-black"
                      : "border border-gray-700"
                  }`}
                ></div>
              ) : (
                <div
                  key={value}
                  onClick={() => handleSelect(sectionKey, value)}
                  className={`px-3 py-1 rounded-md cursor-pointer text-sm font-medium border transition ${
                    isActive
                      ? "bg-[#290041] text-white border-[#290041]"
                      : "bg-white text-[#290041] border-[#ccc] hover:bg-[#f0e6ff]"
                  }`}
                >
                  {value}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // Rəng palitrası: qırmızı, açıq qırmızı, göy, yaşıl, açıq yaşıl, sarı, çəhrayı, narıncı, bənövşəyi, açıq mavi, bej, ağ, qara, tünd boz, qeyveyi
  const colorPalette = [
    { name: "qirmizi", bg: "red" },
    { name: "aciq-qirmizi", bg: "#ff7f7f" },
    { name: "goy", bg: "blue" },
    { name: "yasil", bg: "green" },
    { name: "aciq-yasil", bg: "#90ee90" },
    { name: "sari", bg: "yellow" },
    { name: "cehrayi", bg: "pink" },
    { name: "narinci", bg: "orange" },
    { name: "benovseyi", bg: "purple" },
    { name: "aciq-mavi", bg: "#add8e6" },
    { name: "bej", bg: "#f5f5dc" },
    { name: "ag", bg: "white" },
    { name: "qara", bg: "black" },
    { name: "tund-boz", bg: "#555555" },
    { name: "qeyveyi", bg: "#d2b48c" },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md sticky top-6">
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
      {selectedType !== "all" &&
      selectedType !== "shoe" &&
      selectedType !== "bag"
        ? null
        : selectedType === "shoe"
        ? renderSection("Ortam", "context", availableContexts)
        : null}
      <div className="mb-4 px-2">
        <div className="font-semibold text-[#290041] mb-2">Qiymət aralığı</div>
        <div className="flex gap-2">
          <input
            type="number"
            value={localFilters.price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-1/2 p-1 border rounded-md"
          />
          <input
            type="number"
            value={localFilters.price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-1/2 p-1 border rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-4">
        <button
          onClick={() => onClear()}
          className="flex-1 bg-white text-[#290041] border border-[#290041] py-2 rounded-md font-semibold hover:bg-[#f0e6ff]"
        >
          Təmizlə
        </button>
        <button
          onClick={() => onApply(localFilters)}
          className="flex-1 bg-[#290041] text-white py-2 rounded-md font-semibold hover:opacity-90"
        >
          Tətbiq et
        </button>
      </div>
    </div>
  );
};

export default Filter;
