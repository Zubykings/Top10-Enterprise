import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Slider from "react-slick";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function Values({
  values = [
    {
      title: "Quality",
      description:
        "Sourcing only the best motorcycle and keke parts for unmatched durability and performance.",
    },
    {
      title: "Reliability",
      description:
        "Trusted by businesses for consistent supply and timely deliveries across Liberia.",
    },
    {
      title: "Customer Focus",
      description:
        "Tailored solutions and dedicated support to meet the needs of our clients.",
    },
  ],
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
          Our Core Values
        </motion.h2>
        <Slider {...settings}>
          {values.map((value, index) => (
            <div key={index} className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {value.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

Values.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Values;
