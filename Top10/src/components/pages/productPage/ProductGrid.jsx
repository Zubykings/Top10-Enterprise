import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useProducts } from "../../../hooks/useProducts";
import ProductModal from "./ProductModal";
import Button from "../../common/Button";

// Animation variants for staggered load-in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function ProductGrid() {
  const {
    selectedProduct,
    setSelectedProduct,
    category,
    setCategory,
    categories,
    filteredProducts,
  } = useProducts();

  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Spare Parts
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl font-semibold transition ${
                  category === cat
                    ? "bg-red-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {product.description}
                </p>
                <div className="mt-2 text-sm font-medium text-green-700">
                  ${product.priceUSD} USD / ${product.priceLRD} LRD
                </div>
                <Button
                  className="mt-4 w-full"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}

ProductGrid.propTypes = {
  // No props needed currently, but added for future extensibility
};

export default ProductGrid;
