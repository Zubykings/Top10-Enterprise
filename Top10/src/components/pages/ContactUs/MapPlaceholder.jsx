import { motion } from "framer-motion";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const mapVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

function MapPlaceholder() {
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
          Visit Us
        </motion.h2>
        <motion.div
          className="bg-gray-300 h-64 rounded-lg flex items-center justify-center"
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.77061279897!2d-10.79168402688444!3d6.293848525793349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a0300146a5799%3A0xce5c4f378ae90251!2sPaynesville!5e0!3m2!1sen!2s!4v1753650739461!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        <p className="text-center text-gray-700 mt-4">
          Top 10 Enterprise, Payneville, Monrovia
        </p>
      </div>
    </section>
  );
}

export default MapPlaceholder;
