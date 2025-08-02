import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function ContactInfo({
  contactMethods = [
    {
      icon: <FaEnvelope className="text-4xl text-red-900" />,
      title: "Email Us",
      description: "Reach out for inquiries or support.",
      detail: "info@top10enterprise.com",
      link: "mailto:info@top10enterprise.com",
    },
    {
      icon: <FaPhone className="text-4xl text-red-900" />,
      title: "Call Us",
      description: "Speak with our team directly.",
      detail: "+231 881-700-559",
      link: "tel:+231881700559",
    },
    {
      icon: <FaWhatsapp className="text-4xl text-green-500" />,
      title: "WhatsApp",
      description: "Join our community for instant updates.",
      detail: "Join WhatsApp Community",
      link: "https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c",
    },
  ],
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Connect With Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.includes("http") ? "_blank" : "_self"}
              rel={
                method.link.includes("http") ? "noopener noreferrer" : undefined
              }
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
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
              <div className="mb-4 flex justify-center">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <p className="text-red-900 font-medium">{method.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

ContactInfo.propTypes = {
  contactMethods: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default ContactInfo;
