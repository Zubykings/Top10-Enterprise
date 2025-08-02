import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "../../common/Button";

function ProductModal({ product, onClose }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = `https://wa.me/+231123456789?text=Hi, I'm interested in ${encodeURIComponent(
    product.name
  )} (ID: ${product.id}). Please provide a quote.`;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div
          className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
          >
            <X size={24} />
          </button>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-contain rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="space-y-1 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b py-1">
                    <span className="font-medium text-gray-600">{key}</span>
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 font-semibold text-green-700 text-lg">
                ${product.priceUSD} USD / ${product.priceLRD} LRD
              </div>
              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    priceUSD: PropTypes.number.isRequired,
    priceLRD: PropTypes.number.isRequired,
    specs: PropTypes.object.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
