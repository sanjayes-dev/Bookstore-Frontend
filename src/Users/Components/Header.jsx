import { Button, ButtonGroup } from "flowbite-react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useEffect } from 'react'
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  // creating two state to get token from session storage
  const [token,setToken]=React.useState("")
  const [userDetails,setuserDetails]=React.useState({})

  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
    setuserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
  },[token])

  const naviagte =useNavigate();
  const signout =()=>{
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("existingUser")
  setToken("")
  setuserDetails({})
  naviagte('/')
  }
  return (
    <div>
      {/* heading */}
      <section className='bg-black'>
        <div className="flex justify-between ...">
            <div>
                <img width="64" height="64" src="https://img.icons8.com/nolan/64/open-book.png" alt="open-book"/>
            </div>
            <div>
                     <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>

  <div className="relative max-w-4xl mx-auto text-center">
    <h1 className="w-full flex justify-center text-6xl md:text-8xl font-black mb-8 tracking-tighter">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
        BOOK
      </span>
      <span className="text-white">VERSE</span>
    </h1>
        </div>
        </div>
        <div className="flex gap-2 p-1">
            <Button color="#111827" className="text-white px-2 py-2 rounded-lg hover:transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
   <FaXTwitter className="text-2xl" />
  </Button>

  <Button color="#111827" className="text-white px-2 py-2 rounded-lg hover:transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110" >
   <FaFacebook className="text-2xl" />
  </Button>

  <Button color="#111827" className="text-white px-2 py-2 rounded-lg hover:transition duration-150 ease-in-out  hover:-translate-y-1 hover:scale-110">
    <FaInstagram className="text-2xl" />
  </Button>
        </div>
        </div>
      </section>
      {/* nav bar */}
      <section>
        {/* <!-- Navbar with Mega Menu --> */}
  <nav className="bg-black shadow-lg">
    <div className="max-w px-2 ">
      <div className="relative flex items-center justify-between h-16">
        <div className="mx-auto flex items-center sm:items-stretch sm:justify-start">
          
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" color="secondary" className="px-3 py-2 rounded-md bg-transparent text-white flex items-center 
                hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-600
                hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">Home</a>

              {/* <!-- Products Dropdown Trigger --> */}
              <div className="relative group">
                <a href="#">
                    
                </a>
                <Button  className="px-3 py-2 bg-transparent text-white flex items-center 
                hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-600
                hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">
                                    Products
                                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Button>

                {/* <!-- Mega Menu --> */}
                <div
                  className="absolute left-0 mt-2 w-225 max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Software</h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Web Development</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Mobile Apps</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Desktop Software</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Enterprise Solutions</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">API Services</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hardware</h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Laptops</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Desktops</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Tablets</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Accessories</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Networking</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured</h3>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Product" className="rounded-lg mb-3"/>
                        <h4 className="font-medium text-gray-900">New Release</h4>
                        <p className="text-sm text-gray-600 mb-2">Check out our latest product offering with advanced
                          features.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn more →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="px-3 py-2 rounded-md bg-transparent text-white flex items-center 
                hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-600
                hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">Services</a>
              <a href="#" className="px-3 py-2 rounded-md bg-transparent text-white flex items-center 
                hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-600
                hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">About</a>
              <a href="#" className="px-3 py-2 rounded-md bg-transparent text-white flex items-center 
                hover:bg-gradient-to-r hover:from-cyan-400 hover:to-fuchsia-600
                hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">Contact</a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {
              token ?

               <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={userDetails.profile} referrerPolicy="origin" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{userDetails.username}</span>
            <span className="block truncate text-sm font-medium">{userDetails.email}</span>
          </DropdownHeader>
          <Link to="/profile"><DropdownItem>Dashboard</DropdownItem></Link>
          <DropdownDivider />
          <DropdownItem onClick={signout}>Sign out</DropdownItem>
        </Dropdown>
        :
              <div className="hidden sm:flex sm:items-center">
            <a  href="/login" className="text-white outline hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out
            ">Login</a>
            <a href="/register"
              className="outline ml-4  text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 hover:-translate-y-1 hover:scale-110 transition duration-150 ease-in-out">Sign
              Up</a>
              </div>
            }
          
          
        </div>
      </div>
    </div>
  </nav>

 
      </section>
      
    </div>
  )
}

export default Header
