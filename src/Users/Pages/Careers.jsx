import React from 'react'
import Header from '../Components/Header'
import { Button } from 'flowbite-react'
import { CiSearch } from "react-icons/ci";
import {  Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput ,Textarea } from "flowbite-react";
import { useState } from "react";


function Careers() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  
  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div className='bg-black min-h-screen'>
      <Header/>
      {/* heading and an sentance */}
      <section className='mt-10'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-3xl font-extrabold text-center'>Careers</h1>
        <p className='text-justify text-white font-bold text-2xl p-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius ipsam distinctio, ipsa animi nisi. Illo, excepturi ducimus repudiandae dolorem minus eveniet nam itaque corrupti odit incidunt adipisci animi voluptate?
        Dolore explicabo, consequatur repudiandae quis corporis error tempora, amet vel repellendus hic veritatis. Temporibus quibusdam dolorem atque facere modi ducimus voluptates, sit aliquid maxime exercitationem repellendus, doloribus similique accusamus odit!
        Natus beatae est corporis quidem ullam amet. Consequuntur perferendis quam eum neque animi reprehenderit totam voluptates deserunt nemo? Quaerat dignissimos et id odit cumque iusto, vitae deleniti quas numquam autem.</p>
        {/* search bar */}
        <div className='relative text-center '>
          <input type="text" name="q" className="w-full max-w-md border h-10 shadow p-4 rounded-full mb-5" placeholder="search"/>
                      <Button type="submit" className='absolute top-0 right-105 justify-items-center rounded-full h-11 bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out'>
                             <CiSearch size={20}  />
                          </Button>
        </div>
      </section>
      {/* current openings */}
      <section className='mt-10'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-3xl font-extrabold'>Current Openings</h1>
        {/* <!-- Job Card 3 --> */}
<div className="job-card bg-purple-700 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:transition duration-150 ease-in-out hover:bg-gradient-to-r from-purple-500 to-pink-600   mt-10">
    
    
    <div className="pt-12 px-4 pb-4">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-lg dark:text-white">Hr Assistant</h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">Book Verse</p>
            </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-sm text-white">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Full-time</span>
            </div>
            <span className="text-sm text-white">$140k - $180k</span>
        </div>
        <div className='text-white'>Experience-2 year</div>
        <div className='text-white'>Description</div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm text-white">100+ applicants</span>
            <Button  onClick={() => setOpenModal(true)} className="group relative px-2 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white overflow-hidden transform transition-all duration-300 hover:scale-105">
               <span className="relative z-10">Apply Now</span>
               <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-[400%] transition-all duration-700"></div>
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Apply Form</h3>
             <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Name</Label>
              </div>
              <TextInput id="username" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Qualification</Label>
              </div>
              <TextInput id="qualification" type="text" required />
            </div>
             <div>
              <div className="mb-2 block">
                <Label htmlFor="password">Phone</Label>
              </div>
              <TextInput id="qualification" type="text" required />
            </div>
             <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment">Cover Letter</Label>
      </div>
      <Textarea id="comment" placeholder="Write Here..." required rows={4} />
    </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              <Button onClick={() => setOpenModal(false)} color="green" className='mx-4'>Submit</Button>
                <Button color="alternative" onClick={() => setOpenModal(false)}>Cancel</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
        </div>
    </div>
</div>



      </section>
    </div>
  )
}

export default Careers
