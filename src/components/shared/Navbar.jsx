import React from 'react';
import logo from '../../assets/logo.png'
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineAccessTime } from 'react-icons/md';
import { IoStatsChartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
         <nav className="bg-white border-b border-gray-100 px-4 py-3 md:px-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
             
                <div className="flex items-center">
                    <img src={logo} alt="KeenKeeper" className="h-8 w-auto object-contain" />
                </div>

                
                <div className="flex items-center space-x-6">
                    
        <NavLink 
    to={"/"} 
    className={({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isActive 
            ? "bg-[#244D3F] text-white" 
            : "text-gray-500 hover:text-gray-800"
        }`
    }
     >
    <HiOutlineHome className="text-xl" />
    <span className="hidden sm:inline">Home</span>
   </NavLink>
                
<NavLink 
    to={"/timeline"} 
    className={({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isActive 
            ? "bg-[#244D3F] text-white" 
            : "text-gray-500 hover:text-gray-800"
        }`
    }
>
    <MdOutlineAccessTime className="text-xl" />
    <span className="hidden sm:inline">Timeline</span>
</NavLink>


<NavLink 
    to={"/status"} 
    className={({ isActive }) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isActive 
            ? "bg-[#244D3F] text-white" 
            : "text-gray-500 hover:text-gray-800"
        }`
    }
>
    <IoStatsChartOutline className="text-xl" />
    <span className="hidden sm:inline">Status</span>
</NavLink>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;