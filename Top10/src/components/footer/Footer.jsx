import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Top10 Enterprise</h3>
          <p className="text-gray-300">
            Liberia’s trusted wholesaler of motorcycle and keke spare parts,
            delivering quality and reliability.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/top10enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/top10enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://chat.whatsapp.com/IyyFIikPLVcJLIITqXFsLg?mode=r_c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:info@top10enterprise.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+231881700559"
              className="text-gray-400 hover:text-white"
            >
              <FaPhone />
            </a>
          </div>
          <p className="text-gray-300 mt-4">Phone: +231 881-700-559</p>
          <p className="text-gray-300">Email: info@top10enterprise.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} Top10Enterprise. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
