import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Slider from "react-slick";

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function Testimonials({
  testimonials = [
    {
      quote:
        "Top10Enterprise delivers top-notch motorcycle parts that keep our fleet running smoothly!",
      author: "Michael K., Transport Business Owner",
    },
    {
      quote:
        "Their keke spare parts are reliable and affordable, boosting our business efficiency.",
      author: "Aisha T., Keke Operator",
    },
    {
      quote:
        "Exceptional service and quality parts. The WhatsApp group keeps us updated!",
      author: "Samuel J., Retail Manager",
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
          What Our Clients Say
        </motion.h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-4">
              <p className="text-xl italic text-gray-600 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-900 font-semibold">
                {testimonial.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};

export default Testimonials;
