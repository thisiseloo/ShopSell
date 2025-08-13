import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import kidsShoes from "../../data/kidsShoes";
import kidsBags from "../../data/kidsBags";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";

const allProducts = [
  ...kidsShoes.map((item) => ({
    ...item,
    type: "shoe",
    id: `shoe-${item.id}`,
  })),
  ...kidsBags.map((item) => ({
    ...item,
    type: "bag",
    id: `bag-${item.id}`,
  })),
];

const brandsList = [
  "Adidas",
  "Guess",
  "U.S Polo Assn",
  "Puma",
  "Prada",
  "Balenciaga",
  "Hermes",
  "Gucci",
  "Christion Louboutin",
  "Chanel",
  "Dior",
  "Fendi",
  "Lacoste",
  "Nike",
  "Tommy Hilfiger",
  "Kinetix",
  "Calvin Klein",
  "Skechers",
  "Aldo",
  "Greyder",
  "Penti",
];

const sizes = [36, 37, 38, 39, 40, 41, 42];
const colorsList = [
  "mavi",
  "qırmızı",
  "yaşıl",
  "sarı",
  "narıncı",
  "bənövşəyi",
  "çəhrayı",
  "ağ",
  "qara",
  "boz",
  "qəhvəyi",
];
const materialsShoe = [
  "dəri",
  "nubuk",
  "zamşa",
  "kətan",
  "rezin",
  "eva",
  "mesh",
  "pvc",
  "pu dəri",
];
const materialsBag = [
  "Pambıq",
  "Dəri",
  "Süni dəri",
  "Tekstil",
  "Hörmə",
  "Kətan",
  "Polyester",
];
const heelList = ["Topuqsuz", "Qısa topuqlu(1-4sm)"];
const categoryShoe = [
  "İdman ayaqqabıları",
  "Gündəlik ayaqqabılar",
  "Klassik ayaqqabılar",
  "Çəkmələr",
];
const categoryBag = ["Çiyin çantası", "Əl çantası", "Bel çantası"];
const contextList = ["İdman", "Gündəlik", "Ziyafət"];

const Kids = () => {
  const itemsPerPage = 12;

  const [selectedType, setSelectedType] = useState("all");
  const [filters, setFilters] = useState({
    brand: [],
    size: [],
    color: [],
    material: [],
    heel: [],
    category: [],
    context: [],
    price: [0, 1000],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const applyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setCurrentPage(1);
  };

  const clearFilters = () => {
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
    setCurrentPage(1);
  };

  const filteredProducts = allProducts.filter((product) => {
    if (selectedType !== "all" && product.type !== selectedType) return false;
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand))
      return false;
    if (
      filters.size.length > 0 &&
      product.size !== undefined &&
      !filters.size.includes(product.size)
    )
      return false;
    if (
      filters.color.length > 0 &&
      product.color !== undefined &&
      !filters.color.includes(product.color.toLowerCase())
    )
      return false;
    if (
      filters.material.length > 0 &&
      product.material !== undefined &&
      !filters.material.includes(product.material.toLowerCase())
    )
      return false;
    if (
      selectedType === "shoe" &&
      filters.heel.length > 0 &&
      product.heel !== undefined &&
      !filters.heel.includes(product.heel)
    )
      return false;
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    )
      return false;
    if (
      selectedType === "bag" &&
      filters.context.length > 0 &&
      product.context !== undefined &&
      !filters.context.includes(product.context)
    )
      return false;
    if (product.price < filters.price[0] || product.price > filters.price[1])
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    clearFilters();
    setCurrentPage(1);
  }, [selectedType]);

  return (
    <div className="min-h-screen pb-[70px]">
      <div className="flex justify-center items-center flex-wrap gap-4 min-h-[150px]">
        {[
          { label: "Ayaqqabılar", value: "shoe" },
          { label: "Çantalar", value: "bag" },
          { label: "Hamısı", value: "all" },
        ].map((btn) => {
          const isActive = selectedType === btn.value;
          return (
            <button
              key={btn.value}
              onClick={() => setSelectedType(btn.value)}
              className={`rounded-full font-semibold shadow-sm transition-all duration-300 transform text-white
          ${
            isActive
              ? "bg-[#290041] opacity-100 scale-105 shadow-lg"
              : "bg-[#290041]/60 opacity-70 hover:opacity-100 hover:shadow-md"
          }
          text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5
        `}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 p-6">
        <aside className="hidden md:block md:w-1/4 lg:w-1/4">
          <Filter
            filters={filters}
            availableBrands={brandsList}
            availableSizes={selectedType === "bag" ? [] : sizes}
            availableColors={colorsList}
            availableMaterials={{ shoe: materialsShoe, bag: materialsBag }}
            availableHeels={heelList}
            availableCategories={{ shoe: categoryShoe, bag: categoryBag }}
            availableContexts={contextList}
            onApply={applyFilters}
            onClear={clearFilters}
          />
        </aside>

        <section className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              Heç bir məhsul tapılmadı.
            </p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Kids;
