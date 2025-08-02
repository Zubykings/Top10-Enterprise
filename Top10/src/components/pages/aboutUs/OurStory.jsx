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

function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Story
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Founded in Liberia, Top10Enterprise emerged from a vision to address
            the critical need for reliable spare parts in the motorcycle and
            keke sector. Starting as a small operation, we’ve grown into an
            industry leader, known for quality and trust.
          </p>
          <p>
            Our journey is fueled by a commitment to excellence, building strong
            partnerships with suppliers and delivering exceptional value to our
            clients. Every part we supply is rigorously tested to meet the
            demands of Liberia’s vibrant transport industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default OurStory;
