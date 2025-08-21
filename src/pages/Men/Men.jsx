// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Filter from "../../components/Filter/Filter";
// import menShoes from "../../data/menShoes";
// import menBags from "../../data/menBags";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import Pagination from "../../components/Pagination/Pagination";

// const allProducts = [
//   ...menShoes.map((item) => ({ ...item, type: "shoe", id: `shoe-${item.id}` })),
//   ...menBags.map((item) => ({ ...item, type: "bag", id: `bag-${item.id}` })),
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
//   "New Balance",
// ];
// const sizes = [36, 37, 38, 39, 40, 41, 42];
// const colorsList = [
//   "Tünd mavi",
//   "Açıq mavi",
//   "Qırmızı",
//   "Tünd yaşıl",
//   "Açıq yaşıl",
//   "Sarı",
//   "Narıncı",
//   "Bənövşəyi",
//   "Çəhrayı",
//   "Bəyaz",
//   "Qara",
//   "Boz",
//   "Qəhvəyi",
//   "Bej",
// ];
// const materialsShoe = ["Dəri", "Nabuk", "Kətan", "Rezin", "Polyester"];
// const materialsBag = ["Dəri", "Nabuk", "Polyester"];
// const heelList = ["Topuqsuz", "Qısa topuqlu(1-4sm)"];
// const categoryShoe = [
//   "İdman ayaqqabıları",
//   "Gündəlik ayaqqabılar",
//   "Klassik ayaqqabılar",
//   "Çəkmələr",
// ];
// const categoryBag = ["Çiyin çantası", "Əl çantası", "Bel çantası"];
// const contextList = ["İdman", "Gündəlik", "Ziyafət"];

// const normalize = (value) => value?.toString().toLowerCase();

// const Men = ({ searchQuery }) => {
//   const { t } = useTranslation();

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
//     if (
//       filters.brand.length &&
//       !filters.brand.map(normalize).includes(normalize(product.brand))
//     )
//       return false;
//     if (
//       filters.size.length &&
//       product.size !== undefined &&
//       !filters.size.includes(product.size)
//     )
//       return false;
//     if (
//       filters.color.length &&
//       product.color &&
//       !filters.color.map(normalize).includes(normalize(product.color))
//     )
//       return false;
//     if (
//       filters.material.length &&
//       product.material &&
//       !filters.material.map(normalize).includes(normalize(product.material))
//     )
//       return false;
//     if (
//       selectedType === "shoe" &&
//       filters.heel.length &&
//       product.heel &&
//       !filters.heel.map(normalize).includes(normalize(product.heel))
//     )
//       return false;
//     if (
//       filters.category.length &&
//       product.category &&
//       !filters.category.map(normalize).includes(normalize(product.category))
//     )
//       return false;
//     if (
//       selectedType === "bag" &&
//       filters.context.length &&
//       product.context &&
//       !filters.context.map(normalize).includes(normalize(product.context))
//     )
//       return false;
//     if (product.price < filters.price[0] || product.price > filters.price[1])
//       return false;
//     if (
//       searchQuery &&
//       !normalize(product.name).includes(normalize(searchQuery))
//     )
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
//       <div className="flex justify-center items-center flex-wrap gap-4 min-h-[150px]">
//         {[
//           { label: t("shoes"), value: "shoe" },
//           { label: t("bags"), value: "bag" },
//           { label: t("all"), value: "all" },
//         ].map((btn) => {
//           const isActive = selectedType === btn.value;
//           return (
//             <button
//               key={btn.value}
//               onClick={() => setSelectedType(btn.value)}
//               className={`rounded-lg font-medium transition-all duration-200 text-sm sm:text-base px-5 py-2 border-2 ${
//                 isActive
//                   ? "bg-white text-purple-700 border-purple-700 shadow-sm"
//                   : "bg-purple-50 text-purple-500 border-purple-200 hover:bg-purple-100 hover:text-purple-700"
//               }`}
//             >
//               {btn.label}
//             </button>
//           );
//         })}
//       </div>

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-6">
//         {/* Mobil + Tablet */}
//         <div className="block lg:hidden w-full mb-4">
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
//             selectedType={selectedType}
//           />
//         </div>

//         {/* Desktop */}
//         <aside className="hidden lg:block lg:w-1/4">
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
//             selectedType={selectedType}
//           />
//         </aside>

//         <section className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
//           {visibleProducts.length === 0 ? (
//             <p className="col-span-full text-center text-[#1a0029]/80">
//               {t("noProductsFound")}
//             </p>
//           ) : (
//             visibleProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           )}
//         </section>
//       </div>

//       {totalPages > 1 && (
//         <Pagination
//           totalPages={totalPages}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       )}
//     </div>
//   );
// };

// export default Men;
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Filter from "../../components/Filter/Filter";
import menShoes from "../../data/menShoes";
import menBags from "../../data/menBags";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";

// 🔹 Məhsul datası
const allProducts = [
  ...menShoes.map((item) => ({ ...item, type: "shoe", id: `shoe-${item.id}` })),
  ...menBags.map((item) => ({ ...item, type: "bag", id: `bag-${item.id}` })),
];

// 🔹 Filter üçün datalar
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
  "New Balance",
];
const sizes = [36, 37, 38, 39, 40, 41, 42];
const colorsList = [
  "Tünd mavi",
  "Açıq mavi",
  "Qırmızı",
  "Tünd yaşıl",
  "Açıq yaşıl",
  "Sarı",
  "Narıncı",
  "Bənövşəyi",
  "Çəhrayı",
  "Bəyaz",
  "Qara",
  "Boz",
  "Qəhvəyi",
  "Bej",
];
const materialsShoe = ["Dəri", "Nabuk", "Kətan", "Rezin", "Polyester"];
const materialsBag = ["Dəri", "Nabuk", "Polyester"];
const heelList = ["Topuqsuz", "Qısa topuqlu(1-4sm)"];
const categoryShoe = [
  "İdman ayaqqabıları",
  "Gündəlik ayaqqabılar",
  "Klassik ayaqqabılar",
  "Çəkmələr",
];
const categoryBag = ["Çiyin çantası", "Əl çantası", "Bel çantası"];
const contextList = ["İdman", "Gündəlik", "Ziyafət"];

const normalize = (value) => value?.toString().toLowerCase();

const Men = ({ searchQuery }) => {
  const { t } = useTranslation();

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

  // 🔹 Filter tətbiqi
  const applyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setCurrentPage(1); // filter dəyişəndə səhifəni sıfırla
  };

  // 🔹 Filter təmizləmə
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
    setCurrentPage(1); // təmizləyəndə səhifəni sıfırla
  };

  // 🔹 Məhsulları filterlə
  const filteredProducts = allProducts.filter((product) => {
    if (selectedType !== "all" && product.type !== selectedType) return false;
    if (
      filters.brand.length &&
      !filters.brand.map(normalize).includes(normalize(product.brand))
    )
      return false;
    if (
      filters.size.length &&
      product.size !== undefined &&
      !filters.size.includes(product.size)
    )
      return false;
    if (
      filters.color.length &&
      product.color &&
      !filters.color.map(normalize).includes(normalize(product.color))
    )
      return false;
    if (
      filters.material.length &&
      product.material &&
      !filters.material.map(normalize).includes(normalize(product.material))
    )
      return false;
    if (
      selectedType === "shoe" &&
      filters.heel.length &&
      product.heel &&
      !filters.heel.map(normalize).includes(normalize(product.heel))
    )
      return false;
    if (
      filters.category.length &&
      product.category &&
      !filters.category.map(normalize).includes(normalize(product.category))
    )
      return false;
    if (
      selectedType === "bag" &&
      filters.context.length &&
      product.context &&
      !filters.context.map(normalize).includes(normalize(product.context))
    )
      return false;
    if (product.price < filters.price[0] || product.price > filters.price[1])
      return false;
    if (
      searchQuery &&
      !normalize(product.name).includes(normalize(searchQuery))
    )
      return false;
    return true;
  });

  // 🔹 Pagination hesablaması
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // 🔹 Type dəyişəndə filterləri sıfırla
  useEffect(() => {
    clearFilters();
    setCurrentPage(1);
  }, [selectedType]);

  return (
    <div className="min-h-screen pb-[70px]">
      {/* Shoes | Bags | All seçim düymələri */}
      <div className="flex justify-center items-center flex-wrap gap-4 min-h-[150px]">
        {[
          { label: t("shoes"), value: "shoe" },
          { label: t("bags"), value: "bag" },
          { label: t("all"), value: "all" },
        ].map((btn) => {
          const isActive = selectedType === btn.value;
          return (
            <button
              key={btn.value}
              onClick={() => setSelectedType(btn.value)}
              className={`rounded-lg font-medium transition-all duration-200 text-sm sm:text-base px-5 py-2 border-2 ${
                isActive
                  ? "bg-white text-purple-700 border-purple-700 shadow-sm"
                  : "bg-purple-50 text-purple-500 border-purple-200 hover:bg-purple-100 hover:text-purple-700"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Filter + Məhsul siyahısı */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-6">
        {/* Mobil + Tablet */}
        <div className="block lg:hidden w-full mb-4">
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
            selectedType={selectedType}
          />
        </div>

        {/* Desktop */}
        <aside className="hidden lg:block lg:w-1/4">
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
            selectedType={selectedType}
          />
        </aside>

        {/* Məhsullar */}
        <section className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProducts.length === 0 ? (
            <p className="col-span-full text-center text-[#1a0029]/80">
              {t("noProductsFound")}
            </p>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </section>
      </div>

      {/* Pagination yalnız totalPages > 1 olduqda göstərilir */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Men;
