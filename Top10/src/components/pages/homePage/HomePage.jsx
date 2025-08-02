import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../../common/Hero";
import SubscriptionForm from "./SubscriptionForm";
import FeaturedProducts from "./FeaturedProducts";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import { machines } from "../../../assets";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Homepage({ submitSubscription }) {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const benefitsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, {
    once: true,
    margin: "-100px",
  });
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <motion.div
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <Hero
          title={
            <>
              Power Your Ride with{" "}
              <span className="text-red-400">Top10 Enterprise</span>
            </>
          }
          description="Liberia’s leading wholesaler of high-quality motorcycle and keke spare parts, delivering durability and performance for your business."
          ctaText="Join Our WhatsApp Group"
          ctaLink="https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c"
          ctaIcon={<FaWhatsapp className="text-2xl" />}
          backgroundImage={machines}
          overlayOpacity="bg-opacity-50"
          subscriptionForm={
            <SubscriptionForm submitSubscription={submitSubscription} />
          }
        />
      </motion.div>
      <motion.div
        ref={productsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
      >
        <FeaturedProducts />
      </motion.div>
      <motion.div
        ref={benefitsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
      >
        <Benefits />
      </motion.div>
      <motion.div
        ref={testimonialsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
}

Homepage.propTypes = {
  submitSubscription: PropTypes.func,
};

export default Homepage;
