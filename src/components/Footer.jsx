import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaGit, FaGitAlt, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About ShoppyGlobe</h2>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for the best online shopping experience. We bring you quality products at the best prices.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Categories</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Electronics</a></li>
              <li><a href="#" className="hover:text-white">Fashion</a></li>
              <li><a href="#" className="hover:text-white">Home & Kitchen</a></li>
              <li><a href="#" className="hover:text-white">Sports</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Support</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#"target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaFacebookF />
              </a>
              <a href="https://github.com/SandyBhai03?tab=repositories" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/sandybhai0003/?hl=en" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/sandeepyadav03/" target="_blank" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
