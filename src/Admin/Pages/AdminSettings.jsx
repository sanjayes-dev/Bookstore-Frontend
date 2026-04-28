import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaRegEdit } from "react-icons/fa";
function AdminSettings() {
  return (
    <div className='bg-black min-h-screen'>
       <AdminHeader/>
       <div className='flex'>
      <div className=' w-64 h-screen fixed '> 
      <AdminSidebar/>
      </div>
      <div className='ml-64 flex-1 p-5 '>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl text-center mb-10'>Settings</h1>
        {/* section */}
        <div className="row flex justify-between gap-6">

  {/* Left Content */}
  <div className="col text-white text-justify w-1/2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quidem laboriosam adipisci quod reprehenderit eius earum, possimus facilis obcaecati tempora doloribus dolor dolorem. Aliquid, quasi? Impedit necessitatibus dicta dolorem nesciunt.
    Eaque sapiente animi ipsam possimus voluptates cupiditate vero iusto officia commodi. Quas, dolorem. Harum ipsa nesciunt dolore amet quae quos, dolorum blanditiis nobis placeat voluptas doloribus, eligendi veniam! Sunt, itaque.
    Sapiente odit dolore architecto, impedit, veritatis inventore reiciendis iusto voluptatibus quaerat consequuntur quas sunt nobis error, numquam nisi? Autem, ipsam tempore. Delectus deleniti harum ullam iure vitae nihil eligendi. Iure.
    Aspernatur neque dolores doloremque sint nesciunt ad vero ea harum, minima quia eos praesentium architecto natus officia, voluptas perferendis consequuntur, repellendus iure voluptatum omnis quisquam! Molestias aspernatur iste deleniti eaque!
    Sapiente placeat nam voluptate illo facilis, vel sunt in minima nemo fugiat tempore labore accusamus, suscipit repellat aut nisi enim unde eius fuga qui, dicta pariatur! Quam, repellat. Veritatis, corrupti!
  </div>

  {/* Right Profile Section */}
  <div className="col w-1/2 flex justify-center">

    <div className="w-full max-w-md bg-gray-800 shadow-md rounded-xl p-6">

      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/120"
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border"
          />

          {/* Edit Icon Button */}
          <button className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-400 to-fuchsia-600 p-2 rounded-full text-white hover:scale-105 transition">
            <FaRegEdit />
          </button>
        </div>
      </div>

     
      <form className="mt-6 space-y-4">

        <input
          type="text"
          placeholder="Admin Name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="text"
          placeholder="admin 123 "
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Submit
          </button>

          <button
            type="button"
            className="bg-gray-300 text-black px-5 py-2 rounded-lg hover:scale-105 transition"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>

  </div>

</div>
      </div>
    </div>
    </div>
  )
}

export default AdminSettings
