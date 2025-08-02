import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../../common/Hero";
import ProductGrid from "./ProductGrid";
import Benefits from "./Benefits";
import { chain } from "../../../assets";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Products() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="font-sans">
      <motion.div
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <Hero
          title="Premium Motorcycle, Keke & Powersaw Spare Parts"
          description="Explore our high-quality, durable spare parts imported from India & China, trusted across Liberia’s wholesale market."
          ctaText="View Products"
          ctaLink="#products"
          ctaStyle="bg-red-900 hover:bg-red-800"
          backgroundImage={chain}
         
        />
      </motion.div>
      <motion.div
        ref={gridRef}
        variants={sectionVariants}
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
      >
        <ProductGrid />
      </motion.div>
      <motion.div
        ref={benefitsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
      >
        <Benefits />
      </motion.div>
    </div>
  );
}
