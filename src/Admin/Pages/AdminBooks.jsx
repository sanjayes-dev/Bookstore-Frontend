import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { Button, Card, TabItem, Tabs } from "flowbite-react";
import { approveABooksAPI, deleteABooksAPI, getAllBooksAPI, getAllUsersAPI, rejectABooksAPI } from '../../services/allAPIs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serverURL } from '../../services/serverURL';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AdminBooks() {
   const [token, setToken] = React.useState("")
    const [allBooks, setAllBooks] = React.useState([])
    const [allUsers, setAllUsers] = React.useState([])
    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
        viewAllBooks()
        viewAllUsers()
      }, [token])

      const viewAllBooks = async () => {
          try {
            const reqHeader = {
              Authorization: `Bearer ${token}`
      
            }
            const response = await getAllBooksAPI(reqHeader)
            console.log(response);
            setAllBooks(response.data.book)
          }
          catch (err) {
            console.log(err);
      
          }
        }

         const viewAllUsers = async () => {
          try {
            const reqHeader = {
              Authorization: `Bearer ${token}`
      
            }
            const response = await getAllUsersAPI(reqHeader)
            console.log(response);
            setAllUsers(response.data.user)
          }
          catch (err) {
            console.log(err);
      
          }
        }

      // Delete Book 

      const handleDelete=async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
              Authorization: `Bearer ${token}`
      
            }
            try{
              const response = await deleteABooksAPI(id,reqHeader)
              console.log(response);
              viewAllBooks()
              
            }catch(err){
              console.log(err);
              
            }
      }
        const handleApprove=async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
              Authorization: `Bearer ${token}`
               
      
            }
            try{
              const response = await approveABooksAPI(id,reqHeader)
              console.log(response);
               viewAllBooks()
              
            }catch(err){
              console.log(err);
              
            }
      }
        const handleReject=async(id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
              Authorization: `Bearer ${token}`
      
            }
            try{
              const response = await  rejectABooksAPI(id,reqHeader)
              console.log(response);
               viewAllBooks()
              
            }catch(err){
              console.log(err);
              
            }
      }
  return (
    <div className='bg-black min-h-screen'>
          <AdminHeader/>
      
      <div className='flex'>
      <div className=' w-64 h-screen fixed '> 
      <AdminSidebar/>
      </div>
      <div className='ml-64 flex-1 p-5 '>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl text-center mb-10'>All Books</h1>
        {/* tabs */}
          <Tabs aria-label="Pills" variant="pills" className='justify-center'>
      <TabItem active title="Book List" >
        {/* cards */}
              <div className="row grid grid-cols-3 gap-14  justify-evenly">
                {
                  allBooks.length > 0 ?
                    allBooks.map(item => (
                      // 
                        <div className="col ">
                          <Card
                          
                            className="w-70  hover:scale-105 transition"
                            imgAlt="No BookCover"
                            imgSrc={
                              item.imageUrl ?
                               item.imageUrl
                                  :
                                "https://neelkanthpublishers.com/assets/bookcover_cover.png" }
                                 theme={{
                          img: {
                            base: "w-full h-105 object-cover",
                          },
                        }}
                          >
                          <Link to={`/viewbook/${item._id}`}>
                              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                              </h5>
                              </Link>
                          
                           
                           
                            {item.status==="pending"? 
                             <div className="flex items-center justify-between">
                             <Button onClick={()=>handleApprove(item._id)}
                                
                                className="rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                              >
                                <FaRegThumbsUp size={20} />
                              </Button>
                                 <Button onClick={()=>handleReject(item._id)}  className=' bg-gradient-to-r from-cyan-400 to-fuchsia-600'><FaRegThumbsDown size={20}/>
                              </Button>
                               <Button onClick={()=>handleDelete(item._id)} className=' bg-red-600'><MdDelete size={20} />
                               </Button>
                                </div>
                                  : item.status ==="Approved"? 
                                    <Button onClick={()=>handleApprove(item._id)}
                                
                                className="rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-medium text-white"
                              >
                               Approved
                              </Button>
                              :
                                 <Button onClick={()=>handleReject(item._id)}  className=' bg-gradient-to-r from-cyan-400 to-fuchsia-600'>Rejected
                              </Button>}
                             

                           


                              
                            
                              
                             
                              
                          
                            
                          </Card>
                        </div>

                     
                    ))
                    : "no Books Found..."
                }


              </div>
      </TabItem>
      <TabItem title="Users">
        {/* users */}
        
        <div>
          <div className="row flex flex-wrap gap-6 justify-center">
            {/* user 1 */}
            {
              allUsers.length>0?
              allUsers.map(item=>(
               <div className="col ">
               <div
        className=" relative  flex xl:w-[400px] md:w-[50%] sm:w-[80%] xs:w-[96%] gap-4 items-center p-2 border dark:border-gray-400/30 border-gray-400/30 rounded  shadow shadow-purple-500 ">

          
        <div className=" rounded shrink-0"  href="https://tailwindflex.com/@sammytg7">
                {
                  item.profile?  <img className="object-cover my-auto rounded w-28 h-28" width="200" height="200" src={`${serverURL}/uploads/${item.profile}`} alt="No Profile"/>
                  :
                  <img className="object-cover my-auto rounded w-28 h-28" width="200" height="200" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="No Profile"/>
                }
           
        </div>


        <div className="flex flex-col justify-between flex-grow gap-3 px-2">
            <div className="w-full">
                <a href="https://tailwindflex.com/@sammytg7" className="font-semibold md:text-xl text-gray-200 dark:text-black">
                    {item.username}
                </a>
                <p className="pt-1 text-sm dark:text-gray-700 two-lines text-gray-300">
                   {item.email}
                </p>
                <p className='pt-1 text-sm dark:text-gray-700 two-lines text-gray-300 flex flex-wrap'>{item._id}</p>
            </div>

        </div>
    </div>
            </div>
              ))
              :
              "No Users Found"
            }
           
          
          </div>
        </div>
      </TabItem>
      </Tabs>
      </div>
    </div>
    </div>
  )
}

export default AdminBooks
