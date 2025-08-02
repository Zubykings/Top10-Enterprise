export async function fetchPageData(path) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/page?path=${path}`);
  if (!response.ok) {
    throw new Error("Failed to fetch page data");
  }
  return response.json();
}

export async function submitContactForm(formData) {
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
}

export async function submitSubscription(formData) {
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
}
