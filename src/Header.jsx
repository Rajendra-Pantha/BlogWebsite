import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const togglebtn = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className=" w-screen h-14 bg-black text-white flex items-center justify-between px-8 ">
        <Link to="/" className="text-white font-bold text-2xl">
          Read<span className="text-yellow-400 font-bold text-2xl">Blogs</span>
        </Link>
        {/* navitem for big device */}
        <div className=" gap-11 font-semibold md:flex hidden">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"}`
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-yellow-500" : "text-white"}`
            }
            to="/service"
          >
            Service
          </NavLink>
        </div>

        <div className="md:flex gap-2 h-full items-center hidden">
          <button className="bg-gray-300 rounded px-4 py-1 text-yellow-800 font-bold hover:bg-gray-200">
            Login
          </button>
          <Icon
            className="text-2xl"
            icon="basil:facebook-solid"
            style={{ color: "white" }}
          />
          <Icon
            className="text-2xl"
            icon="icon-park-outline:telegram"
            style={{ color: "white" }}
          />
          <Icon
            className="text-2xl"
            icon="uiw:twitter"
            style={{ color: "white" }}
          />
        </div>
        {/* 3 bar and cross icon */}
        <div onClick={togglebtn} className="md:hidden text-3xl">
          {isClicked ? (
            <Icon icon="maki:cross" style={{ color: "white" }} />
          ) : (
            <Icon icon="heroicons:bars-3-16-solid" style={{ color: "white" }} />
          )}
        </div>
      </div>
      {/* nav item for mobile */}

      {isClicked ? (
        <div className=" bg-white  font-semibold flex flex-col text-xl gap-2 md:hidden px-8 py-2">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : "text-black"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : "text-black"}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : "text-black"}`
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : "text-black"}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-red-400" : "text-black"}`
            }
            to="/service"
          >
            Service
          </NavLink>
          <div className="flex gap-4 pt-4">
            <button className="bg-yellow-700 rounded px-4 py-2 text-gray-200 font-bold w-24">
              Login
            </button>
            <button className="bg-yellow-700 rounded px-4 py-2 text-gray-200 font-bold w-24">
              Signup
            </button>
          </div>
        </div>
      ) : (
        <div className="   hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Service</NavLink>
          <button className="bg-yellow-700 rounded px-4 py-2 text-gray-200 font-bold w-24">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
