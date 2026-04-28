import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { Button, TabItem, Tabs } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

function AdminCareers() {
  return (
    <div className='bg-black min-h-screen'>
      <AdminHeader/>
       <div className='flex'>
      <div className=' w-64 h-screen fixed '> 
      <AdminSidebar/>
      </div>
      <div className='ml-64 flex-1 p-5 '>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl text-center mb-10'>Careers</h1>
        {/* tabs */}
          <Tabs aria-label="Pills" variant="pills" className='justify-center'>
      <TabItem active title="Job Post">
        {/* Search bar and add buttion  */}
        <div className='flex justify-between items-center'>
            <div className='relative border w-full max-w-md'>
                  <input type="text" name="q" className="w-full max-w-md border h-10 shadow p-4 rounded-full " placeholder="search"/>
                              <Button type="submit" className='absolute top-0 right-0 justify-items-center rounded-full h-10 bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out'>
                                     <CiSearch size={20}  />
                                  </Button>
                </div>
                <div className=''>
                   <Button type="submit" className=' rounded-full h-10 bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:-translate-y-1 hover:scale-105 hover:transition duration-150 ease-in-out'>
                                    Add
                                  </Button>
                </div>
        </div>
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Full-time</span>
                    </div>
                    <span className="text-sm text-white">$140k - $180k</span>
                </div>
                <div className='text-white'>Experience-2 year</div>
                <div className='text-white'>Description</div>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod rerum maxime aliquid nihil qui, rem quia labore eligendi inventore minus? Culpa, nisi! Accusamus ex eius explicabo, adipisci illo amet.</p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-sm text-white">100+ applicants</span>
                    <Button  onClick={() => setOpenModal(true)} className="group relative px-2 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white overflow-hidden transform transition-all duration-300 hover:scale-105">
                       <span className="relative z-10"> <FaTrash />Delete </span>
                       <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-[400%] transition-all duration-700"></div>
                    </Button>
                   
                </div>
            </div>
        </div>
      </TabItem>
      <TabItem title="View Applicant">
     <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table className="w-full table-fixed border-collapse">
        <thead>
            <tr className="bg-black text-white border">
               <th className="w-1/4 py-4 px-6 text-left border font-bold uppercase">sl</th>
                <th className="w-1/4 py-4 px-6 text-left border font-bold uppercase">Job Tittle</th>
                <th className="w-1/4 py-4 px-6 text-left border  font-bold uppercase">Name</th>
                <th className="w-1/2 py-4 px-6 text-left border font-bold uppercase">Qualification</th>
                <th className="w-1/4 py-4 px-6 text-left border font-bold uppercase">Email</th>
                <th className="w-1/4 py-4 px-6 text-left border  font-bold uppercase">Phone</th>
                 <th className="w-1/2 py-4 px-6 text-left border  font-bold uppercase">coverletter</th>
                  <th className="w-1/4 py-4 px-6 text-left border  font-bold uppercase">Resume</th>
            </tr>
        </thead>
        <tbody className="bg-black text-white border">
            <tr>
              <td className="py-4 px-6 border border-gray-200">1</td>
              <td className="py-4 px-6 border border-gray-200">Frontend Developer</td>
                <td className="py-4 px-6 border border-gray-200">John Doe</td>
                <td className="py-4 px-6 border border-gray-200 truncate">Btech CS</td>
                <td className="py-4 px-6 border border-gray-200 wrap-break-word">ken@gmail.com</td>
                 <td className="py-4 px-6 border border-gray-200 break-all">46854685478</td>
                  <td className="py-4 px-6 border border-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta aliquid iste laborum, eaque aliquam vero expedita dolorem assumenda beatae dolorum magni sint, voluptatem suscipit natus repellat molestias labore officia.</td>
                  <td className="py-4 px-6 border border-gray-200">
              <Button className="text-white px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:scale-105 transition text-xs">
              Resume
            </Button>
                </td> 
            </tr>
             <tr>
              <td className="py-4 px-6 border border-gray-200">1</td>
              <td className="py-4 px-6 border border-gray-200">Frontend Developer</td>
                <td className="py-4 px-6 border border-gray-200">John Doe</td>
                <td className="py-4 px-6 border border-gray-200 truncate">Btech CS</td>
                <td className="py-4 px-6 border border-gray-200 wrap-break-word">ken@gmail.com</td>
                 <td className="py-4 px-6 border border-gray-200 break-all">46854685478</td>
                  <td className="py-4 px-6 border border-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta aliquid iste laborum, eaque aliquam vero expedita dolorem assumenda beatae dolorum magni sint, voluptatem suscipit natus repellat molestias labore officia.</td>
                  <td className="py-4 px-6 border border-gray-200">
              <Button className="text-white px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:scale-105 transition text-xs">
              Resume
            </Button>
                </td> 
            </tr>
           <tr>
              <td className="py-4 px-6 border border-gray-200">1</td>
              <td className="py-4 px-6 border border-gray-200">Frontend Developer</td>
                <td className="py-4 px-6 border border-gray-200">John Doe</td>
                <td className="py-4 px-6 border border-gray-200 truncate">Btech CS</td>
                <td className="py-4 px-6 border border-gray-200 wrap-break-word">ken@gmail.com</td>
                 <td className="py-4 px-6 border border-gray-200 break-all">46854685478</td>
                  <td className="py-4 px-6 border border-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta aliquid iste laborum, eaque aliquam vero expedita dolorem assumenda beatae dolorum magni sint, voluptatem suscipit natus repellat molestias labore officia.</td>
                  <td className="py-4 px-6 border border-gray-200">
              <Button className="text-white px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:scale-105 transition text-xs">
              Resume
            </Button>
                </td> 
            </tr>
             <tr>
              <td className="py-4 px-6 border border-gray-200">1</td>
              <td className="py-4 px-6 border border-gray-200">Frontend Developer</td>
                <td className="py-4 px-6 border border-gray-200">John Doe</td>
                <td className="py-4 px-6 border border-gray-200 truncate">Btech CS</td>
                <td className="py-4 px-6 border border-gray-200 wrap-break-word">ken@gmail.com</td>
                 <td className="py-4 px-6 border border-gray-200 break-all">46854685478</td>
                  <td className="py-4 px-6 border border-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae soluta aliquid iste laborum, eaque aliquam vero expedita dolorem assumenda beatae dolorum magni sint, voluptatem suscipit natus repellat molestias labore officia.</td>
                  <td className="py-4 px-6 border border-gray-200">
              <Button className="text-white px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:scale-105 transition text-xs">
              Resume
            </Button>
                </td> 
            </tr>
            {/* <!-- Add more rows here --> */}
        </tbody>
    </table>
</div>
      </TabItem>
      </Tabs>
        </div>
        </div>
    </div>
  )
}

export default AdminCareers
