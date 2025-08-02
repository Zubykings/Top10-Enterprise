import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import Hero from "../../common/Hero";
import CompanyOverview from "./CompanyOverview";
import OurStory from "./OurStory";
import Team from "./Team";
import Values from "./Values";
import ContactForm from "../ContactUs/ContactForm";
import { chainsaw } from "../../../assets";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AboutUs({ submitContactForm }) {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-100px",
  });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <motion.div
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <Hero
          title="About Us"
          description="Your Trusted Partner in Motorcycle and Keke Spare Parts Wholesale in Liberia"
          backgroundImage={chainsaw}
        />
      </motion.div>
      <motion.div
        ref={overviewRef}
        variants={sectionVariants}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
      >
        <CompanyOverview />
      </motion.div>
      <motion.div
        ref={storyRef}
        variants={sectionVariants}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
      >
        <OurStory />
      </motion.div>
      <motion.div
        ref={teamRef}
        variants={sectionVariants}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
      >
        <Team />
      </motion.div>
      <motion.div
        ref={valuesRef}
        variants={sectionVariants}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
      >
        <Values />
      </motion.div>
      <motion.div
        ref={contactRef}
        variants={sectionVariants}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <ContactForm submitContactForm={submitContactForm} />
      </motion.div>
    </div>
  );
}

AboutUs.propTypes = {
  submitContactForm: PropTypes.func,
};

export default AboutUs;
