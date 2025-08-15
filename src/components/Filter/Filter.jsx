import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Filter as FilterIcon, X } from "lucide-react";

const Filter = ({
  availableBrands = [],
  availableSizes = [],
  availableColors = [],
  availableMaterials = [],
  availableHeels = [],
  availableCategories = [],
  availableContexts = [],
  filters: propsFilters,
  onApply,
  onClear,
}) => {
  const materials = Array.isArray(availableMaterials)
    ? availableMaterials
    : availableMaterials?.shoe || [];

  const categories = Array.isArray(availableCategories)
    ? availableCategories
    : availableCategories?.shoe || [];

  const [filters, setFilters] = useState(propsFilters);
  const [openSections, setOpenSections] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFilters(propsFilters);
  }, [propsFilters]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const handlePriceChange = (index, e) => {
    let val = Number(e.target.value);
    if (val < 0) val = 0;
    if (val > 1000) val = 1000;

    setFilters((prev) => {
      const price = [...prev.price];
      if (index === 0) {
        price[0] = Math.min(val, price[1]);
      } else {
        price[1] = Math.max(val, price[0]);
      }
      return { ...prev, price };
    });
  };

  const OptionButton = ({ selected, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-md font-semibold select-none transition
        ${
          selected
            ? "bg-[#290041] text-[#1a0029]"
            : "bg-gray-100 text-[#1a0029] hover:bg-gray-300"
        }`}
    >
      {children}
    </button>
  );

  const Section = ({ title, isOpen, toggle, children }) => (
    <div className="border-b pb-2 mb-2 last:mb-0">
      <button
        className="flex justify-between w-full font-semibold py-2 hover:text-purple-700 transition"
        onClick={toggle}
        type="button"
      >
        {title} {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && <div className="mt-1 flex flex-wrap gap-2">{children}</div>}
    </div>
  );

  const FilterToggleButton = () => (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-20 right-5 z-50 bg-[#290041] text-white p-3 rounded-full shadow-lg md:hidden"
      aria-label="Filtrləri aç"
    >
      <FilterIcon size={24} />
    </button>
  );

  const CloseButton = () => (
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-3 right-3  text-[#1a0029]/80 hover: text-[#1a0029]"
      aria-label="Filtrləri bağla"
      type="button"
    >
      <X size={24} />
    </button>
  );

  return (
    <>
      {/* Mobil/Tablet açma düyməsi */}
      <FilterToggleButton />

      {/* Overlay (mobil/tablet) */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden
          transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Filter panel */}
      <div
        className={`
          bg-white rounded-xl shadow-md p-6 max-w-md flex flex-col
          md:relative
          ${
            isOpen
              ? "fixed inset-0 m-auto z-50 max-w-md max-h-[90vh] overflow-y-auto"
              : "hidden md:block"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobil/Tablet bağlama düyməsi */}
        {isOpen && <CloseButton />}

        <div className="text-2xl text-[#1a0029] font-bold mb-6 flex items-center gap-[10px]">
          <FilterIcon size={22} className="text-[#1a0029] font-bold" />
          Filtrlər
        </div>

        <Section
          title="Marka"
          isOpen={openSections["Marka"]}
          toggle={() => toggleSection("Marka")}
        >
          {availableBrands.map((brand) => (
            <OptionButton
              key={brand}
              selected={filters.brand.includes(brand)}
              onClick={() => toggleFilter("brand", brand)}
            >
              {brand}
            </OptionButton>
          ))}
        </Section>

        {/* Çanta üçün Ölçü filteri ləğv edildi */}
        {availableSizes.length > 0 && !filters.category.includes("Çanta") && (
          <Section
            title="Ölçü"
            isOpen={openSections["Ölçü"]}
            toggle={() => toggleSection("Ölçü")}
          >
            {availableSizes.map((size) => (
              <OptionButton
                key={size}
                selected={filters.size.includes(size)}
                onClick={() => toggleFilter("size", size)}
              >
                {size}
              </OptionButton>
            ))}
          </Section>
        )}

        <Section
          title="Rəng"
          isOpen={openSections["Rəng"]}
          toggle={() => toggleSection("Rəng")}
        >
          {availableColors.map((color) => (
            <OptionButton
              key={color}
              selected={filters.color.includes(color)}
              onClick={() => toggleFilter("color", color)}
            >
              {color}
            </OptionButton>
          ))}
        </Section>

        <Section
          title="Material"
          isOpen={openSections["Material"]}
          toggle={() => toggleSection("Material")}
        >
          {materials.map((mat) => (
            <OptionButton
              key={mat}
              selected={filters.material.includes(mat)}
              onClick={() => toggleFilter("material", mat)}
            >
              {mat}
            </OptionButton>
          ))}
        </Section>

        <Section
          title="Topuq ölçüsü"
          isOpen={openSections["Topuq ölçüsü"]}
          toggle={() => toggleSection("Topuq ölçüsü")}
        >
          {availableHeels.map((heel) => (
            <OptionButton
              key={heel}
              selected={filters.heel.includes(heel)}
              onClick={() => toggleFilter("heel", heel)}
            >
              {heel} sm
            </OptionButton>
          ))}
        </Section>

        <Section
          title="Kateqoriya"
          isOpen={openSections["Kateqoriya"]}
          toggle={() => toggleSection("Kateqoriya")}
        >
          {categories.map((cat) => (
            <OptionButton
              key={cat}
              selected={filters.category.includes(cat)}
              onClick={() => toggleFilter("category", cat)}
            >
              {cat}
            </OptionButton>
          ))}
        </Section>

        <Section
          title="Ortam"
          isOpen={openSections["Ortam"]}
          toggle={() => toggleSection("Ortam")}
        >
          {availableContexts.map((ctx) => (
            <OptionButton
              key={ctx}
              selected={filters.context.includes(ctx)}
              onClick={() => toggleFilter("context", ctx)}
            >
              {ctx}
            </OptionButton>
          ))}
        </Section>

        <Section
          title="Qiymət aralığı"
          isOpen={openSections["Qiymət aralığı"]}
          toggle={() => toggleSection("Qiymət aralığı")}
        >
          <div className="mt-2 px-2">
            <div className="flex justify-between mb-2 font-medium text-sm">
              <span>{filters.price[0]} ₼</span>
              <span>{filters.price[1]} ₼</span>
            </div>

            <div className="relative h-8">
              <div className="absolute w-full h-3 bg-gray-300 rounded-lg top-1/2 -translate-y-1/2 left-0"></div>

              <div
                className="absolute h-3 rounded-lg top-1/2 -translate-y-1/2 bg-pink-300"
                style={{
                  left: `${(filters.price[0] / 1000) * 100}%`,
                  right: `${100 - (filters.price[1] / 1000) * 100}%`,
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="1000"
                step="1"
                value={filters.price[0]}
                onChange={(e) => handlePriceChange(0, e)}
                className="absolute w-full h-8 appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 5 }}
              />

              <input
                type="range"
                min="0"
                max="1000"
                step="1"
                value={filters.price[1]}
                onChange={(e) => handlePriceChange(1, e)}
                className="absolute w-full h-8 appearance-none bg-transparent pointer-events-auto"
                style={{ zIndex: 4 }}
              />
            </div>
          </div>
        </Section>

        <div className="mt-5 flex flex-row gap-3 bg-white pt-3 border-t">
          <button
            onClick={() => {
              setFilters({
                brand: [],
                size: [],
                color: [],
                material: [],
                heel: [],
                category: [],
                context: [],
                price: [0, 1000],
              });
              if (onClear) onClear();
            }}
            className="flex-1 h-[30px] bg-purple-300 text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition !border !border-[#290041]"
          >
            Təmizlə
          </button>
          <button
            onClick={() => {
              onApply && onApply(filters);
              setIsOpen(false);
            }}
            className="flex-1 h-[30px] bg-pink-300 text-[14px] text-[#290041] rounded-lg font-semibold hover:bg-gray-200 transition !border !border-[#290041]"
          >
            Nəticə
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
