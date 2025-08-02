import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContactForm } from "../../../hooks/useContactForm";
import Button from "../../common/Button";

// Default submit function as a fallback
const defaultSubmitContactForm = async (formData) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Submission failed");
  }
  return data;
};

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const formVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const messageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function ContactForm({ submitContactForm = defaultSubmitContactForm }) {
  const { formData, errors, submitted, loading, handleSubmit, handleChange } =
    useContactForm(submitContactForm);

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
          Send Us a Message
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {submitted && (
            <motion.p
              className="text-green-600 text-center"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
          {errors.form && (
            <motion.p
              className="text-red-600 text-center"
              variants={messageVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.form}
            </motion.p>
          )}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

ContactForm.propTypes = {
  submitContactForm: PropTypes.func,
};

export default ContactForm;
