import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const[isloginbtnclicked,setIsloginbtnclicked]=useState(false);
  const[logininfo,setLogininfo]=useState({uname:'',upassword:''});
  const[err,setErr]=useState("");
  const[err1,setErr1]=useState("");
  const togglebtn = () => {
    setIsClicked(!isClicked);
  };
  const handleLogin=()=>{
    setIsloginbtnclicked(!isloginbtnclicked);
  }
  const handleChange = (e) => {
    setLogininfo(prevState=>({...prevState,[e.target.name]: e.target.value}));
}
const handleSubbmit=(e)=>{
  e.preventDefault();
 if(logininfo.uname.length===0){
  setErr("username cannot be empty");
  return;
 }
 if(logininfo.uname.length<3){
  setErr("username cannot be less than 3");
  return;
 }
 setErr("");
 if(logininfo.upassword.length===0){
  setErr1("password cannot be empty");
  return;
 }
 if(logininfo.upassword.length<=8){
  setErr1("password must be atleast 8 digit");
  return;
 }
 console.log("Submitted")

 
 setErr1("");
 setLogininfo({
  uname:'',upassword:''
 })
}
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
          <button onClick={handleLogin} className="bg-gray-300 rounded px-4 py-1 text-yellow-800 font-bold hover:bg-gray-200">
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
            <button onClick={handleLogin} className="bg-yellow-700 rounded px-4 py-2 text-gray-200 font-bold w-24">
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
          <button  className="bg-yellow-700 rounded px-4 py-2 text-gray-200 font-bold w-24">
            Login
          </button>
        </div>
      )}
      
     { isloginbtnclicked?( <div className='p-8 w-96 bg-gray-200 my-14 md:my-64 mx-auto rounded'>
           <form onSubmit={handleSubbmit}>
            <div className="flex gap-6 mb-1">
            <label className="font-semibold text-lg ">Username</label>
            <input name="uname" value={logininfo.uname} onChange={handleChange} className="rounded p-2 focus:outline-none placeholder:p-2" type="text" placeholder="Enter your username"/>
            </div>
            <p className="mb-4 text-red-700 text-sm">{err}</p>
            <div className="flex gap-8 mb-1">
            <label className="font-semibold text-lg">Password</label>
            <input name="upassword" value={logininfo.upassword} onChange={handleChange} className="rounded p-2 focus:outline-none placeholder:p-2" type="password" placeholder="Enter your password"/>
            </div>
            <p className="mb-6 text-red-700 text-sm">{err1}</p>
            <div className="flex justify-center gap-4">
              <button  className="font-semibold text-lg bg-yellow-600 text-white rounded px-4 py-2 hover:bg-yellow-500" type="submit" >Login</button> 
              <button onClick={handleLogin} className="font-semibold text-lg bg-yellow-600 text-white rounded px-4 py-2 hover:bg-yellow-500"  >Cancel</button>
            </div>
            
             
           
           </form>
      </div>):(<div className='p-8 w-96 bg-gray-200 my-64 mx-auto rounded hidden'>
          
      </div>)}
    </div>
  );
};

export default Header;
