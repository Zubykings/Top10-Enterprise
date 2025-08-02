import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function Benefits({
  benefits = [
    {
      title: "Engineered for Durability",
      description:
        "Built to withstand tough conditions, ensuring long-lasting performance for motorcycles and kekes.",
    },
    {
      title: "Wide Compatibility",
      description:
        "Designed for popular models like Bajaj Boxer 100 and TVS King Deluxe.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Affordable wholesale rates for distributors across Liberia.",
    },
  ],
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Our Spare Parts
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md text-center"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

Benefits.propTypes = {
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Benefits;
