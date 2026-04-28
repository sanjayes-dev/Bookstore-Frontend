import React from 'react'
import Header from '../Components/Header'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from 'flowbite-react';
import { SiMinutemailer } from "react-icons/si";
function Contact() {
  return (
    <div className='bg-black min-h-screen'>
      <Header/>
        {/* contact */}
        
        <section className='mt-10'>
            <div>
              <h2 className='text-center  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl'>Contact Us</h2>
              <p className='mt-4 text-white text-2xl text-justify p-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste reiciendis quam totam corrupti neque dolor voluptatum, dolorum illo dicta dolore pariatur ratione. Aut vel deserunt error nisi eveniet modi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, corporis quaerat! Sint, quas, tempore unde nihil quod nemo mollitia odit enim modi, consequuntur beatae fuga ut perferendis dolor ullam inventore.
              Earum vitae eos voluptatum? Aspernatur, ullam, ad animi minus ex accusamus hic exercitationem odio aperiam repellat ipsum consequatur quod facere nostrum! Consequuntur, vitae aliquid itaque dolore corrupti aut ullam corporis.</p>
            </div>
            {/* icons for contacts */}
            <div>
              <div className="row flex justify-evenly">
                <div className="col flex">
                  <HiOutlineLocationMarker size={50} className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-white mx-5' />
                  <p className='text-2xl text-white'>123 main street.apt.4b <br /> london CA2344</p>
                </div>
                <div className="col flex">
                   <FaPhoneAlt size={50} className='text-white mx-5' />
                  <p className='text-2xl text-white'>48486954658</p>
                </div>
                <div className="col flex">
                   <MdEmail size={50} className='text-white mx-5' />
                  <p className='text-2xl text-white'>bookverse@gmail.com </p>
                </div>
              </div>
            </div>
            {/* map and sent me message */}
            <div className='mt-10'>
              
<section className="text-gray-600 body-font relative">
    <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
        <div
            className="w-[500px]  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="500px" height="550px" className="absolute inset-0" frameborder="0" title="map" marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
           
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gradient-to-r from-cyan-400 to-fuchsia-600 flex flex-col md:ml-auto w-1/2 md:py-8 mt-8 md:mt-0 p-5">
            <h2 className="text-gray-900 text-lg mb-1 font-extrabold">Feedback</h2>
            <p className="leading-relaxed mb-5 text-white font-bold">enter your feedback
            </p>
            <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-800 font-bold">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-800 font-bold">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-800 font-bold">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>

                <Button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                    <span class="relative z-10 flex"> <span className='mx-3'>Send</span> <SiMinutemailer size={20}/></span>
                    <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
        </div>
    </div>
</section>
            </div>
        </section>
    </div>
  )
}

export default Contact
