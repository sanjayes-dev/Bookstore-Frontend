import { Button } from 'flowbite-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function AdminHeader() {
  //  const naviagte =useNavigate();
  // const signout =()=>{
  // sessionStorage.removeItem("token")
  // sessionStorage.removeItem("existingUser")
  // naviagte('/')
  // }
  return (
    <div>
      {/* header */}
        <section className='bg-black'>
                <div className="flex justify-between ...">
                    <div>
                        <img width="64" height="64" src="https://img.icons8.com/nolan/64/open-book.png" alt="open-book"/>
                    </div>
                    <div>
                             <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
        
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
                BOOK
              </span>
              <span className="text-white">VERSE</span>
            </h1>
                </div>
                </div>
                <div className="flex gap-2 p-1">
                 <Link to='/'><Button  color="purple" className="text-white px-2 py-2 rounded-lg hover:transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
           LogOut
          </Button></Link>   
          </div>
           </div>
      </section>
    </div>
  )
}

export default AdminHeader
