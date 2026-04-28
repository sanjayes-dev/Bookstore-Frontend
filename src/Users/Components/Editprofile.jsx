import React from 'react'
import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import {  Textarea } from "flowbite-react";
import { useEffect } from 'react';
import {updateUserProfileAPI} from "../../services/allAPIs"
import { serverURL } from '../../services/serverURL';

function EditProfile() {
 // holds image url
  const [preview,setPreview] = React.useState("")
   const[userDetails,setUserDetails]=React.useState({
    username:"",
    password:"",
    cpass:"",
    bio:"",
    profile:""
   })


   const handleUpload = async(e)=>{
    console.log(e.target.files[0]);

   
      // show the uploaded image in image section
    let imgUrl = URL.createObjectURL(e.target.files[0])
    console.log(imgUrl);
      //saving the image url to preview section
      setPreview(imgUrl)
       // to store to state
    setUserDetails({...userDetails,profile:imgUrl})
   }
      console.log(userDetails);

    useEffect(()=>{
      if(sessionStorage.getItem("existingUser")){
        const userData = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserDetails({...userDetails,id:userData._id,
          username:userData.username,
          password:userData.password,
          bio:userData.bio,
          profile:userData.profile
        })
      }
},[])




// Upload Button Function

const handleUpdate =async()=>{
  console.log(userDetails);
  const{id,username,password,cpass,bio,profile}= userDetails
  if(password && password !== cpass){
    alert("Password Mismatch")
  }
  const token =sessionStorage.getItem("token")
  const reqHeader ={
    Authorization:`bearer ${token}`
  }
  const reqBody = new FormData()
  if(username) reqBody.append("username",username)
  if(password) reqBody.append("password",password)
     if(cpass) reqBody.append("cpass",cpass)
       if(bio) reqBody.append("bio",bio)
        // instance of file : send the profile only if it's a new uploaded file otherwise skips it
         if(profile instanceof File) reqBody.append("profile",profile)
          try{
            const response= await updateUserProfileAPI(id,reqBody,reqHeader)
            console.log(response);
            alert(response.data.message)
            // To store updated content in session storage
            sessionStorage.setItem("exisitingUser",JSON.stringify(response.data.updateProfile))
            
        
          }
          catch(err){
            console.log(err);
            
          }
}




    const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);



  return (
    <div>
     <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Edit  Profile</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="Edit User Profile" />
        <DrawerItems>
            <div  className='text-center mt-10'>
               <Label>
                       <div className="">
                      
                    <div className="flex flex-col items-center">
                     
                    <span className="block text-gray-400 font-normal"></span>
                    </div>
                  </div>
                        <input onChange={(e)=>handleUpload(e)} type="file" className="h-full w-full hidden" name=""/>
                        <img
              src={
                preview
                  ? preview
                  : userDetails.profile
                  ? `${serverURL}/uploads/${userDetails.profile}`
                  : "https://i.pinimg.com/originals/5c/bc/f4/5cbcf42384e992638df32657f7de7469.png"
              }
              alt="profile"
              className="w-40 h-40 mx-auto pt-2 rounded-full object-cover cursor-pointer"
            />
                        </Label>
                        
                          <h5>{userDetails.username}</h5>
                         
    
  </div>
  <div >
    
      <TextInput onChange={e=>setUserDetails({...userDetails,username:e.target.value})}
      value={userDetails.username} className='mb-2' id="base" type="text" sizing="md" placeholder='username' />
       <TextInput onChange={e=>setUserDetails({...userDetails,password:e.target.value})}    value={userDetails.password} className='mb-2'  id="base" type="password" sizing="md" placeholder='password' />
        <TextInput onChange={e=>setUserDetails({...userDetails,cpass:e.target.value})}  value={userDetails.cpass}className='mb-2' id="base" type="password" sizing="md" placeholder=' confirm password' />
        
        <Textarea onChange={e=>setUserDetails({...userDetails,bio:e.target.value})}   value={userDetails.bio} id="comment" placeholder="BookStore User" required rows={4} />
  </div>
  <div className='flex gap-2 ms-35 mt-5'>
      <Button color="red">Reset</Button>
         <Button onClick={handleUpdate} color="green">Update</Button>
    
  </div>
         
        </DrawerItems>
      </Drawer>
    </div>
  )
}

export default EditProfile