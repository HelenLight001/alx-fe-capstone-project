import {Hamburger, Menu, X} from "lucide-react";
import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom"

const Sidebar = () => {
  const [Sidebar, setSidebar] = useState(false);
  const ToggleSidebar = () => {
    setSidebar(!Sidebar);
  };
  return (
    <div className="h-full w-[80%] relative">
        <button onClick={ToggleSidebar} className="">
          { !Sidebar && <Menu />}
        </button>
      {Sidebar && 
        <div className="bg-gray-500/50 w-full h-full fixed right-0 top-0 flex justify-end">
            <div className="text-white bg-blue-800 space-x-4 w-[85%] h-full flex flex-col p-2">
            <button onClick={ToggleSidebar} className="self-end mt-5">
                <X className="w-8 h-8"/>
            </button>
            <div className="w-full mt-10">
                <input type="text" placeholder="search..." 
                className="w-full"/>
            </div>
            <ul className="space-y-2 my-4">
                <li><Link to="/" className="hover:text-yellow-300">
              Home
            </Link></li>
                <li><Link to="/ProjectForm" className="hover:text-yellow-300">
              Add Project
            </Link></li>
                <li><Link to="/signup" className="hover:text-yellow-300">
              SignUp
            </Link></li>
                <li><Link to="/login" className="hover:text-yellow-300">
              Login
            </Link></li>
                <li><Link to="/contact" className="hover:text-yellow-300">
              Contact Us
            </Link></li>
            </ul>
        </div>
        </div>
      }
    </div>
  );
};

export default Sidebar;
