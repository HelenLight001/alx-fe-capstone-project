import {Link} from "react-router-dom";
import {FaTasks} from "react-icons/fa"; // project/task icon
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <FaTasks className="text-yellow-400" /> {/* Icon */}
          <span>ProjectMaster</span>
        </Link>

        {/* Nav Links */}
        <div>
          <div className="md:hidden">
            <Sidebar />
          </div>
          <div className="space-x-4 hidden md:inline-block">
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
        </div>
      </div>
    </nav>
  );
}
