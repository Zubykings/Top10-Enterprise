import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSubscriptionForm } from "../../../hooks/useSubscriptionForm";
import Button from "../../common/Button";

// Animation variants
const messageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const inputVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
};

function SubscriptionForm({ submitSubscription }) {
  const { formData, errors, submitted, loading, handleSubmit, handleChange } =
    useSubscriptionForm(submitSubscription);

  return (
    <section className="py-4 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-12 h-12 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex justify-center gap-4 flex-col sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              {submitted && (
                <motion.p
                  className="text-green-600 text-center mb-2"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Subscription successful!
                </motion.p>
              )}
              {errors.email && (
                <motion.p
                  className="text-red-200 text-center mb-2"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {errors.email}
                </motion.p>
              )}
              <motion.input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-900"
                value={formData.email}
                onChange={handleChange}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
            <Button type="submit" disabled={loading}>
              Get Updates
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

SubscriptionForm.propTypes = {
  submitSubscription: PropTypes.func,
};

export default SubscriptionForm;
