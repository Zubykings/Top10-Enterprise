import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../../common/Hero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapPlaceholder from "./MapPlaceholder";
import { keke } from "../../../assets";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ContactUs({ submitContactForm }) {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <motion.div
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <Hero
          title="Contact Us"
          description="Reach out for all your motorcycle and keke spare parts needs in Liberia. Join our WhatsApp community for instant updates and wholesale deals!"
          ctaText="Join Our WhatsApp Group"
          ctaLink="https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c"
          ctaIcon={<FaWhatsapp className="text-2xl" />}
          backgroundImage={keke}
        />
      </motion.div>
      <motion.div
        ref={formRef}
        variants={sectionVariants}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
      >
        <ContactForm submitContactForm={submitContactForm} />
      </motion.div>
      <motion.div
        ref={infoRef}
        variants={sectionVariants}
        initial="hidden"
        animate={infoInView ? "visible" : "hidden"}
      >
        <ContactInfo />
      </motion.div>
      <motion.div
        ref={mapRef}
        variants={sectionVariants}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
      >
        <MapPlaceholder />
      </motion.div>
    </div>
  );
}

ContactUs.propTypes = {
  submitContactForm: PropTypes.func,
};

export default ContactUs;
