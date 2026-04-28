import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
function AdminSidebar() {
  return (
    <div>
        <Sidebar   aria-label="Sidebar with logo branding example">
          <div className='flex justify-center my-5'>
             <img width={60} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="image" srcSet="" className='rounded-full'/>
          </div>
          
      <SidebarLogo href="#" img="https://img.icons8.com/nolan/64/open-book.png" imgAlt="Book Verse logo">
        Book Verse
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="admin-home" icon={FaHome}>
            Home
          </SidebarItem>
          <SidebarItem href="admin-books" icon={RiBookShelfLine}>
            All Books
          </SidebarItem>
          <SidebarItem href="admin-careers" icon={IoBagCheckSharp}>
            Careers
          </SidebarItem>
          <SidebarItem href="admin-settings" icon={IoMdSettings}>
            Settings
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  

    </div>
  )
}

export default AdminSidebar
