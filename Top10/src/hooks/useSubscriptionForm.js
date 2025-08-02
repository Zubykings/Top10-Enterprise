import { useState } from "react";

// Default submit function
const defaultSubmitSubscription = async (formData) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/subscribe`, {
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

export function useSubscriptionForm(
  submitSubscription = defaultSubmitSubscription
) {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSubmitted(false);

    try {
      await submitSubscription(formData);
      setSubmitted(true);
      setFormData({ email: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setErrors({ email: "Failed to subscribe. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return {
    formData,
    errors,
    submitted,
    loading,
    handleSubmit,
    handleChange,
  };
}
