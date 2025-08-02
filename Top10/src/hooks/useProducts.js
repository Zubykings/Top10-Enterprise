import { useState } from "react";
import productData from "../assets/index";

// Custom hook to manage product filtering and modal state
export function useProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Motorcycle", "Keke", "Powersaw"];

  // Filter products by category
  const filteredProducts = productData.filter((product) => {
    if (category === "All") return true;
    return product.name.toLowerCase().includes(category.toLowerCase());
  });

  return {
    selectedProduct,
    setSelectedProduct,
    category,
    setCategory,
    categories,
    filteredProducts,
  };
}
