import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fullLogo } from "../../../assets";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Team({
  teamMembers = [
    {
      name: "David O. Nwali",
      role: "Founder & CEO",
      description:
        "David drives our mission to revolutionize the spare parts industry with a focus on quality and innovation.",
      image: fullLogo,
    },
    {
      name: "Jane Smith",
      role: "Operations Manager",
      description:
        "Jane oversees seamless logistics, ensuring timely delivery of high-quality parts to our clients.",
      image: null,
    },
    {
      name: "Tony Brown",
      role: "Sales Director",
      description:
        "Tony builds lasting client relationships, delivering exceptional service to meet business needs.",
      image: null,
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
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                    {member.name[0]}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};

export default Team;
