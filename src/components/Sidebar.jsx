import {Hamburger, Menu, X} from "lucide-react";
import React from "react";
import {useState} from "react";

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
            <ul>
                <li>Home</li>
                <li>Add Project</li>
                <li>Sign Up</li>
                <li>Login</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
      }
    </div>
  );
};

export default Sidebar;
