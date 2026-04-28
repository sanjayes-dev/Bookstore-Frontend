import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminHome() {
  return (
    <div className='bg-black  min-h-screen'>
       
           <AdminHeader/>
      
      <div className='flex'>
      <div className=' w-64 h-screen fixed '> 
      <AdminSidebar/>
      </div>
      <div className='ml-64 flex-1 p-5 text-white'>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
      {/* dash board */}

<div className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 rounded-xl shadow-sm border p-6">
<p className="text-xs text-white font-bold">Total Number Of Books</p>
<p className="text-3xl font-semibold text-slate-800 mt-2">100+</p>
</div>

<div className=" bg-gradient-to-r from-cyan-400 to-fuchsia-600 rounded-xl shadow-sm border p-6">
<p className="text-xs text-white font-bold">Total Number of Users</p>
<p className="text-3xl font-semibold text-slate-800 mt-2">100+</p>
</div>

<div className="bg-gradient-to-r from-cyan-400 to-fuchsia-600 rounded-xl shadow-sm border p-6">
<p className="text-xs text-white font-bold">Total Number of Employes</p>
<p className="text-3xl font-semibold text-slate-800 mt-2">100+</p>
</div>

</div>
      </div>
      </div>
      
      
    </div>
  )
}

export default AdminHome
