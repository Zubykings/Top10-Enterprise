import { useState } from "react";

// Default submit function
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

export function useContactForm(submitContactForm = defaultSubmitContactForm) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message is required";
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
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setErrors({ form: "Failed to submit form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
