import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Button({
  children,
  className = "bg-red-900 text-white hover:bg-red-800",
  href,
  target,
  rel,
  onClick,
  ...props
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={`px-4 py-2 rounded-xl font-semibold transition ${className}`}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
