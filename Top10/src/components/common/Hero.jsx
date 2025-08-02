import PropTypes from "prop-types";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const formVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
};

function Hero({
  title = "Welcome",
  description = "",
  ctaText = "",
  ctaLink = "",
  backgroundImage,
  ctaIcon,
  textColor = "text-white",
  overlayOpacity = "bg-opacity-80",
  subscriptionForm,
  ctaStyle,
}) {
  return (
    <motion.section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className={`text-4xl md:text-5xl font-extrabold mb-6 ${textColor} min-h-[60px] md:min-h-[72px]`}
          variants={textVariants}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${textColor} min-h-[28px] md:min-h-[32px]`}
            variants={{
              ...textVariants,
              hidden: { y: 50, opacity: 0 },
              visible: {
                ...textVariants.visible,
                transition: { ...textVariants.visible.transition, delay: 0.4 },
              },
            }}
          >
            {description}
          </motion.p>
        )}
        {subscriptionForm && (
          <motion.div
            className=""
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {subscriptionForm}
          </motion.div>
        )}
        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            target={ctaLink.includes("http") ? "_blank" : "_self"}
            rel={ctaLink.includes("http") ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 text-lg ${ctaStyle}`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {ctaIcon && ctaIcon}
            {ctaText}
          </motion.a>
        )}
      </div>
    </motion.section>
  );
}

Hero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  ctaIcon: PropTypes.element,
  textColor: PropTypes.string,
  overlayOpacity: PropTypes.string,
  subscriptionForm: PropTypes.node,
};

export default Hero;
