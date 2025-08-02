import { useState, useEffect } from "react";
import {
  fetchPageData,
  submitContactForm,
  submitSubscription,
} from "./api/api";
import Homepage from "./components/pages/homePage/HomePage";
import Products from "./components/pages/productPage/Products";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      try {
        const data = await fetchPageData(window.location.pathname);
        setPageData(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load page");
        setLoading(false);
      }
    };
    loadPage();
  }, []);

  const renderComponent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!pageData) return <div>Page not found</div>;

    switch (pageData.component) {
      case "Homepage":
        return <Homepage submitSubscription={submitSubscription} />;
      case "Products":
        return <Products />;
      case "ContactUs":
        return <ContactUs submitContactForm={submitContactForm} />;
      case "AboutUs":
        return <AboutUs submitContactForm={submitContactForm} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      <Header />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default App;
