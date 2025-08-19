// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const Filter = ({
//   filters,
//   availableBrands,
//   availableSizes,
//   availableMaterials,
//   availableHeels,
//   availableCategories,
//   availableContexts,
//   onApply,
//   onClear,
//   selectedType,
// }) => {
//   const [localFilters, setLocalFilters] = useState(filters);
//   const [openSections, setOpenSections] = useState({});

//   useEffect(() => setLocalFilters(filters), [filters, selectedType]);

//   const toggleSection = (key) =>
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

//   const handleSelect = (section, value) => {
//     setLocalFilters((prev) => {
//       const current = prev[section] || [];
//       const updated = current.includes(value)
//         ? current.filter((v) => v !== value)
//         : [...current, value];
//       return { ...prev, [section]: updated };
//     });
//   };

//   const handlePriceChange = (e, index) => {
//     const value = Number(e.target.value);
//     const newPrice = [...localFilters.price];
//     newPrice[index] = value;
//     setLocalFilters((prev) => ({ ...prev, price: newPrice }));
//   };

//   const renderSection = (title, sectionKey, options, isColor = false) => {
//     if (!options || options.length === 0) return null;
//     const isOpen = openSections[sectionKey];
//     return (
//       <div className="mb-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//         <div
//           className="flex justify-between items-center cursor-pointer px-3 py-2 font-semibold text-gray-800 bg-gray-100"
//           onClick={() => toggleSection(sectionKey)}
//         >
//           {title}
//           {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//         </div>
//         <div
//           className={`transition-all duration-300 ease-in-out ${
//             isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           } overflow-auto px-3`}
//         >
//           <div className="mt-3 flex flex-wrap gap-2 pb-3">
//             {options.map((option) => {
//               const value = isColor ? option.name : option;
//               const isActive = localFilters[sectionKey]?.includes(value);
//               return isColor ? (
//                 <div
//                   key={value}
//                   onClick={() => handleSelect(sectionKey, value)}
//                   style={{ backgroundColor: option.bg }}
//                   className={`w-8 h-8 rounded-full cursor-pointer border ${
//                     isActive ? "ring-2 ring-purple-800" : "border-gray-300"
//                   }`}
//                 ></div>
//               ) : (
//                 <div
//                   key={value}
//                   onClick={() => handleSelect(sectionKey, value)}
//                   className={`px-3 py-1 rounded-full cursor-pointer text-sm font-medium border transition ${
//                     isActive
//                       ? "bg-purple-800 text-white border-purple-800"
//                       : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {value}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const colorPalette = [
//     { name: "Bordo", bg: "#7b0000" },
//     { name: "Qırmızı", bg: "red" },
//     { name: "Çəhrayı", bg: "#ff7f7f" },
//     { name: "Bənövşəyi", bg: "purple" },
//     { name: "Mavi", bg: "blue" },
//     { name: "Açıq mavi", bg: "#add8e6" },
//     { name: "Yaşıl", bg: "green" },
//     { name: "Açıq yaşıl", bg: "#90ee90" },
//     { name: "Narıncı", bg: "orange" },
//     { name: "Sarı", bg: "yellow" },
//     { name: "Qəhvəyi", bg: "#844521" },
//     { name: "Bej", bg: "#ffeebf" },
//     { name: "Ağ", bg: "white" },
//     { name: "Boz", bg: "grey" },
//     { name: "Qara", bg: "black" },
//   ];

//   return (
//     <div className="bg-purple-50 p-4 shadow-md rounded-2xl border border-gray-100 w-full lg:w-[300px] lg:sticky lg:top-6">

//       {renderSection("Brend", "brand", availableBrands)}
//       {selectedType !== "bag" && renderSection("Ölçü", "size", availableSizes)}
//       {selectedType !== "bag" &&
//         renderSection("Rəng", "color", colorPalette, true)}
//       {renderSection(
//         "Material",
//         "material",
//         selectedType === "shoe"
//           ? availableMaterials.shoe
//           : availableMaterials.bag
//       )}
//       {selectedType === "shoe" &&
//         renderSection("Topuq ölçüsü", "heel", availableHeels)}
//       {renderSection(
//         "Kateqoriya",
//         "category",
//         selectedType === "shoe"
//           ? availableCategories.shoe
//           : selectedType === "bag"
//           ? availableCategories.bag
//           : []
//       )}
//       {selectedType === "shoe" &&
//         renderSection("Ortam", "context", availableContexts)}
//       <div className="mb-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
//         <div className="font-semibold text-gray-800 mb-2">Qiymət aralığı</div>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             value={localFilters.price[0]}
//             onChange={(e) => handlePriceChange(e, 0)}
//             className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             placeholder="min"
//           />
//           <input
//             type="number"
//             value={localFilters.price[1]}
//             onChange={(e) => handlePriceChange(e, 1)}
//             className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             placeholder="max"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col sm:flex-row justify-between gap-3 mt-5">
//         <button
//           onClick={onClear}
//           className="flex-1 bg-white text-gray-700 border border-gray-400 py-2 rounded-[50px] font-medium hover:bg-gray-100 transition"
//         >
//           Təmizlə
//         </button>
//         <button
//           onClick={() => onApply(localFilters)}
//           className="flex-1 bg-[#290041] border-[1px] border-[#290041] text-white py-2 rounded-[50px] font-medium shadow hover:bg-gray-300 hover:!text-[#1a0029] hover:!border-[1px] hover:!border-[#1a0029] transition"
//         >
//           Tətbiq et
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Filter;


import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-auto px-3`}
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
                    isActive ? "ring-2 ring-purple-800" : "border-gray-300"
                  }`}
                ></div>
              ) : (
                <div
                  key={value}
                  onClick={() => handleSelect(sectionKey, value)}
                  className={`px-3 py-1 rounded-full cursor-pointer text-sm font-medium border transition ${
                    isActive
                      ? "bg-purple-800 text-white border-purple-800"
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
    { name: t("Bordo"), bg: "#7b0000" },
    { name: t("Qırmızı"), bg: "red" },
    { name: t("Çəhrayı"), bg: "#ff7f7f" },
    { name: t("Bənövşəyi"), bg: "purple" },
    { name: t("Mavi"), bg: "blue" },
    { name: t("Açıq mavi"), bg: "#add8e6" },
    { name: t("Yaşıl"), bg: "green" },
    { name: t("Açıq yaşıl"), bg: "#90ee90" },
    { name: t("Narıncı"), bg: "orange" },
    { name: t("Sarı"), bg: "yellow" },
    { name: t("Qəhvəyi"), bg: "#844521" },
    { name: t("Bej"), bg: "#ffeebf" },
    { name: t("Ağ"), bg: "white" },
    { name: t("Boz"), bg: "grey" },
    { name: t("Qara"), bg: "black" },
  ];

  return (
    <div className="bg-purple-50 p-4 shadow-md rounded-2xl border border-gray-100 w-full lg:w-[300px] lg:sticky lg:top-6">
      {renderSection(t("brand"), "brand", availableBrands)}
      {selectedType !== "bag" && renderSection(t("size"), "size", availableSizes)}
      {selectedType !== "bag" &&
        renderSection(t("color"), "color", colorPalette, true)}
      {renderSection(
        t("material"),
        "material",
        selectedType === "shoe"
          ? availableMaterials.shoe
          : availableMaterials.bag
      )}
      {selectedType === "shoe" &&
        renderSection(t("heel"), "heel", availableHeels)}
      {renderSection(
        t("category"),
        "category",
        selectedType === "shoe"
          ? availableCategories.shoe
          : selectedType === "bag"
          ? availableCategories.bag
          : []
      )}
      {selectedType === "shoe" &&
        renderSection(t("context"), "context", availableContexts)}
      <div className="mb-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
        <div className="font-semibold text-gray-800 mb-2">{t("price")}</div>
        <div className="flex gap-2">
          <input
            type="number"
            value={localFilters.price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder={t("min")}
          />
          <input
            type="number"
            value={localFilters.price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder={t("max")}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-5">
        <button
          onClick={onClear}
          className="flex-1 bg-white text-gray-700 border border-gray-400 py-2 rounded-[50px] font-medium hover:bg-gray-100 transition"
        >
          {t("clearFilters")}
        </button>
        <button
          onClick={() => onApply(localFilters)}
          className="flex-1 bg-[#290041] border-[1px] border-[#290041] text-white py-2 rounded-[50px] font-medium shadow hover:bg-gray-300 hover:!text-[#1a0029] hover:!border-[1px] hover:!border-[#1a0029] transition"
        >
          {t("applyFilters")}
        </button>
      </div>
    </div>
  );
};

export default Filter;
