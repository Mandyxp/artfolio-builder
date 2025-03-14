
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold">
              <span className="text-gray-900">Artist</span>
              <span className="text-indigo-500">Portfolio</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Creating unique art pieces that tell stories and evoke emotions.
              Available for commissions and collaborations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-indigo-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
                  Get in touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@artistportfolio.com" className="text-gray-600 hover:text-indigo-600 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@artistportfolio.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Artist Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
