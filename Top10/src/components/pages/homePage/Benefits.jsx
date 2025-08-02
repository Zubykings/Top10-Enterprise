import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Benefits({
  benefits = [
    {
      title: "Premium Quality",
      description:
        "Sourced from trusted manufacturers like BAJAJ and TVS for unmatched durability.",
      icon: "🏆",
    },
    {
      title: "Wide Variety",
      description:
        "Comprehensive range of parts for motorcycles and keke vehicles.",
      icon: "🛠️",
    },
    {
      title: "Competitive Pricing",
      description:
        "Affordable wholesale rates to support your business growth.",
      icon: "💰",
    },
  ],
}) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose Top10 Enterprise?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView={{
                ...cardVariants.visible,
                transition: {
                  ...cardVariants.visible.transition,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

Benefits.propTypes = {
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

export default Benefits;
