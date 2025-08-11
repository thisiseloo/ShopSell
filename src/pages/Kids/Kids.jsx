// import React, { useState, useEffect } from "react";
// import Filter from "../../components/Filter/Filter";
// import kidsShoes from "../../data/kidsShoes";
// import kidsBags from "../../data/kidsBags";
// import ProductCard from "../../components/ProductCard/ProductCard";

// const allProducts = [
//   ...kidsShoes.map((item) => ({
//     ...item,
//     type: "shoe",
//     id: `shoe-${item.id}`,
//   })),
//   ...kidsBags.map((item) => ({
//     ...item,
//     type: "bag",
//     id: `bag-${item.id}`,
//   })),
// ];

// const brandsList = [
//   "Adidas",
//   "Guess",
//   "U.S Polo Assn",
//   "Puma",
//   "Prada",
//   "Balenciaga",
//   "Hermes",
//   "Gucci",
//   "Christion Louboutin",
//   "Chanel",
//   "Dior",
//   "Fendi",
//   "Lacoste",
//   "Nike",
//   "Tommy Hilfiger",
//   "Kinetix",
//   "Calvin Klein",
//   "Skechers",
//   "Aldo",
//   "Greyder",
//   "Penti",
// ];
// const sizes = [36, 37, 38, 39, 40, 41, 42];
// const colorsList = [
//   "mavi",
//   "qırmızı",
//   "yaşıl",
//   "sarı",
//   "narıncı",
//   "bənövşəyi",
//   "çəhrayı",
//   "ağ",
//   "qara",
//   "boz",
//   "qəhvəyi",
// ];
// const materialsShoe = [
//   "dəri",
//   "nubuk",
//   "zamşa",
//   "kətan",
//   "rezin",
//   "eva",
//   "mesh",
//   "pvc",
//   "pu dəri",
// ];
// const materialsBag = [
//   "Pambıq",
//   "Dəri",
//   "Süni dəri",
//   "Tekstil",
//   "Hörmə",
//   "Kətan",
//   "Polyester",
// ];
// const heelList = ["Topuqsuz", "Qısa topuqlu(1-4sm)"];
// const categoryShoe = [
//   "İdman ayaqqabıları",
//   "Gündəlik ayaqqabılar",
//   "Klassik ayaqqabılar",
//   "Çəkmələr",
// ];
// const categoryBag = ["Çiyin çantası", "Əl çantası", "Bel çantası"];
// const contextList = ["İdman", "Gündəlik", "Ziyafət"];

// const Kids = () => {
//   const itemsPerPage = 12;

//   const [selectedType, setSelectedType] = useState("all");
//   const [filters, setFilters] = useState({
//     brand: [],
//     size: [],
//     color: [],
//     material: [],
//     heel: [],
//     category: [],
//     context: [],
//     price: [0, 1000],
//   });
//   const [currentPage, setCurrentPage] = useState(1);

//   const applyFilters = (appliedFilters) => {
//     setFilters(appliedFilters);
//     setCurrentPage(1);
//   };

//   const clearFilters = () => {
//     setFilters({
//       brand: [],
//       size: [],
//       color: [],
//       material: [],
//       heel: [],
//       category: [],
//       context: [],
//       price: [0, 1000],
//     });
//     setCurrentPage(1);
//   };

//   const filteredProducts = allProducts.filter((product) => {
//     if (selectedType !== "all" && product.type !== selectedType) return false;
//     if (filters.brand.length > 0 && !filters.brand.includes(product.brand))
//       return false;
//     if (
//       filters.size.length > 0 &&
//       product.size !== undefined &&
//       !filters.size.includes(product.size)
//     )
//       return false;
//     if (
//       filters.color.length > 0 &&
//       product.color !== undefined &&
//       !filters.color.includes(product.color.toLowerCase())
//     )
//       return false;
//     if (
//       filters.material.length > 0 &&
//       product.material !== undefined &&
//       !filters.material.includes(product.material.toLowerCase())
//     )
//       return false;
//     if (
//       selectedType === "shoe" &&
//       filters.heel.length > 0 &&
//       product.heel !== undefined &&
//       !filters.heel.includes(product.heel)
//     )
//       return false;
//     if (
//       filters.category.length > 0 &&
//       !filters.category.includes(product.category)
//     )
//       return false;
//     if (
//       selectedType === "bag" &&
//       filters.context.length > 0 &&
//       product.context !== undefined &&
//       !filters.context.includes(product.context)
//     )
//       return false;
//     if (product.price < filters.price[0] || product.price > filters.price[1])
//       return false;
//     return true;
//   });

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   useEffect(() => {
//     clearFilters();
//     setCurrentPage(1);
//   }, [selectedType]);

//   return (
//     <div className="min-h-screen pb-[70px]">
//       <div className="min-h-[150px] flex items-center justify-center gap-5">
//         {[
//           { label: "Ayaqqabılar", value: "shoe" },
//           { label: "Çantalar", value: "bag" },
//           { label: "Hamısı", value: "all" },
//         ].map((btn) => {
//           const isActive = selectedType === btn.value;
//           return (
//             <button
//               key={btn.value}
//               onClick={() => setSelectedType(btn.value)}
//               className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-sm transition-all duration-300 transform text-white
//                 ${
//                   isActive
//                     ? "bg-[#290041] opacity-100 scale-105 shadow-lg"
//                     : "bg-[#290041]/60 opacity-70 hover:opacity-100 hover:shadow-md"
//                 }
//               `}
//             >
//               {btn.label}
//             </button>
//           );
//         })}
//       </div>

//       <div className="max-w-7xl mx-auto flex gap-8 p-6">
//         <aside className="w-1/4">
//           <Filter
//             filters={filters}
//             availableBrands={brandsList}
//             availableSizes={selectedType === "bag" ? [] : sizes}
//             availableColors={colorsList}
//             availableMaterials={{ shoe: materialsShoe, bag: materialsBag }}
//             availableHeels={heelList}
//             availableCategories={{ shoe: categoryShoe, bag: categoryBag }}
//             availableContexts={contextList}
//             onApply={applyFilters}
//             onClear={clearFilters}
//           />
//         </aside>

//         <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {visibleProducts.length === 0 ? (
//             <p className="col-span-full text-center text-gray-500">
//               Heç bir məhsul tapılmadı.
//             </p>
//           ) : (
//             visibleProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           )}
//         </section>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center gap-2 mt-6 mb-10">
//           {[...Array(totalPages)].map((_, idx) => {
//             const pageNum = idx + 1;
//             const isActive = currentPage === pageNum;
//             return (
//               <button
//                 key={pageNum}
//                 onClick={() => setCurrentPage(pageNum)}
//                 className={`px-4 py-2 rounded ${
//                   isActive
//                     ? "bg-[#290041] text-white font-semibold shadow-lg"
//                     : "bg-gray-200 hover:bg-gray-300"
//                 }`}
//               >
//                 {pageNum}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Kids;






import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import kidsShoes from "../../data/kidsShoes";
import kidsBags from "../../data/kidsBags";
import ProductCard from "../../components/ProductCard/ProductCard";

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
      <div className="min-h-[150px] flex items-center justify-center gap-5">
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
              className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base shadow-sm transition-all duration-300 transform text-white
                ${
                  isActive
                    ? "bg-[#290041] opacity-100 scale-105 shadow-lg"
                    : "bg-[#290041]/60 opacity-70 hover:opacity-100 hover:shadow-md"
                }
              `}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 p-6">
        <aside className="w-1/4">
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

        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-6 mb-10 select-none">
          {/* Əvvəlki düyməsi */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full transition 
              ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
              }
            `}
            aria-label="Əvvəlki səhifə"
          >
            &#8592;
          </button>

          {/* Səhifə nömrələri */}
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`min-w-[38px] h-10 flex items-center justify-center rounded-full font-semibold text-sm transition-shadow
        ${
          isActive
            ? "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white shadow-2xl scale-125 text-lg"
            : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
        }
      `}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Səhifə ${pageNum}`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Növbəti düyməsi */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full transition
              ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
              }
            `}
            aria-label="Növbəti səhifə"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Kids;
