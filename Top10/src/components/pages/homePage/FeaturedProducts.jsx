import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sleeve, tire, crankshaft } from "../../../assets";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function FeaturedProducts({
  products = [
    {
      title: "Premium Oil Filter",
      description: "Engineered for maximum filtration and engine longevity.",
      img: sleeve,
    },
    {
      title: "Heavy-Duty Keke Tires",
      description: "Built for durability and safety on tough terrains.",
      img: tire,
    },
    {
      title: "High-Performance Chain",
      description: "Reliable power transfer for motorcycles.",
      img: crankshaft,
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
          Featured Spare Parts
        </motion.h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="text-center px-4">
              <img
                src={product.img}
                alt={product.title}
                loading="lazy"
                className="w-full max-w-md mx-auto h-64 object-contain rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {product.description}
              </p>
              <a
                href="/products"
                className="inline-block mt-4 text-red-900 font-semibold hover:underline"
              >
                Explore More
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default FeaturedProducts;
