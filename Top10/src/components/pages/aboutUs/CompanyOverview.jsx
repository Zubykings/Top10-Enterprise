import { motion } from "framer-motion";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

function CompanyOverview() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Top10Enterprise is Liberia’s premier importer and wholesaler of
            high-quality motorcycle and keke spare parts. We empower businesses
            by providing reliable, durable, and cost-effective parts, ensuring
            vehicles stay on the road with minimal downtime.
          </p>
          <p>
            Based in Liberia, we partner with globally trusted manufacturers to
            offer a comprehensive range of products, from oil filters and
            sprocket sets to brake pads and chains, tailored to the unique needs
            of the motorcycle and keke industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;
