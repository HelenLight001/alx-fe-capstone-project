import {Link} from "react-router-dom";
import {
  FaTasks,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <FaTasks className="text-yellow-400" />
          <span>ProjectMaster</span>
        </div>

        {/* Nav Links (same as Navbar) */}
        <div className="space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/ProjectForm" className="hover:text-yellow-300">
            Add Project
          </Link>
          <Link to="/signup" className="hover:text-yellow-300">
            SignUp
          </Link>
          <Link to="/login" className="hover:text-yellow-300">
            Login
          </Link>
          <Link to="/contact" className="hover:text-yellow-300">
            Contact Us
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://youtube.com/YourChannel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/HelenLight_01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm py-4 bg-gray-900">
        &copy; {new Date().getFullYear()} ProjectMaster. All rights reserved.
      </div>
    </footer>
  );
}
