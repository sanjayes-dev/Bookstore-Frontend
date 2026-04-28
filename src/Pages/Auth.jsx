import React from 'react'
import { Button, TextInput, Card } from "flowbite-react";
import bgImage from "../assets/banner2.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { googleloginAPI, registerAPI } from '../services/allAPIs';
import { loginAPI } from '../services/allAPIs';
 import { ToastContainer, toast } from 'react-toastify';
 import { GoogleLogin } from '@react-oauth/google';
 import { jwtDecode } from "jwt-decode";

function Auth({register}) {
  console.log(register);
  const navigate = useNavigate()
  
  const[userDetails,setuserDetails]=React.useState({
    username:"",
    email:"",
    password:""
  })
  const handleRegister= async()=>{
    console.log(userDetails);
    if(userDetails.username && userDetails.email && userDetails.password){
    try{
      const response = await registerAPI(userDetails)
      console.log(response);
      if(response.status===201){
        toast(response.data.message)
         setTimeout(()=>{
        navigate("/login");
      },4000);
      setuserDetails({
          username:"",
          email:"",
         password:""
      })
      }
      else{
      console.log(response);
      
      }
      
    }
    catch(err){
    console.log(err.response.data.message);
    
      toast.error(err.response.data.message)

      
    }
    
  }
  else{
    toast.error('Please Fill the form...')
  }
  }
 const handleLogin = async()=>{
  console.log(userDetails);
  if( userDetails.email && userDetails.password){
    try{
      const response = await loginAPI(userDetails)
      console.log(response);
      if(response.status===200){
        sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser))
        toast(response.data.message)
         if(response.data.existingUser.role=="user"){
      setTimeout(()=>{
        navigate("/");
      },4000);
       setuserDetails({
          email:"",
         password:""
      })
     }else{
       setTimeout(()=>{
        navigate("/admin-home");
      },4000);
       setuserDetails({
          email:"",
         password:""
      })
     }
      }
    }
    
    catch(err){
    console.log(err.response.data.message);
    
     toast.error(err.response.data.message)
      
    }
    
  }
  else{
   toast('Please Fill the form...')
  }
 
 }
 const handleGoogleLogin = async(credential)=>{
  console.log(credential);
  
  const decoded = jwtDecode(credential.credential);

console.log(decoded);
try{
  const response = await googleloginAPI({
    email: decoded.email,
    password:"googlepxd",
    username:decoded.name,
    profile: decoded.picture
  })
  console.log(response);
  if(response.status===200){
    sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser))
  }else if(response.status===201){
    sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("existingUser",JSON.stringify(response.data.newUser))
  }
  
}
catch(err){
  console.log(err);
}
 }
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md">

        
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 font-extrabold text-3xl mb-6">
          Book Verse
        </h1>

        {
          register ?
           <Card className=" text-black shadow-xl">
          <h2 className="text-center text-white font-extraboild text-2xl mb-4">Register</h2>

          <TextInput
            onChange={e=>setuserDetails({...userDetails,username:e.target.value})}
            placeholder="User Name"
            required
          />
          <TextInput
          onChange={e=>setuserDetails({...userDetails,email:e.target.value})}
            type="email"
            placeholder="Email Id"
            required
          />

          <TextInput
          onChange={e=>setuserDetails({...userDetails,password:e.target.value})}
            type="password"
            placeholder="Password"
            required
          />
          <Button onClick={handleRegister} className="bg-green-600 hover:bg-green-700">
            Register
          </Button>
           <ToastContainer />
         

          <p className="text-center text-sm text-black">
            Already a member ?{" "}
            <Link to={'/login'}>
             <span className="">
              Login
            </span>
            </Link>
           
          </p>

        </Card>
         : <Card className="bg-[#EAD7C5] text-black shadow-xl">
          <h2 className="text-center text-2xl mb-4">Login</h2>

          
          <TextInput
          onChange={e=>setuserDetails({...userDetails,email:e.target.value})}
            type="email"
            placeholder="Email Id"
            required
          />

          <TextInput
          onChange={e=>setuserDetails({...userDetails,password:e.target.value})}
            type="password"
            placeholder="Password"
            required
          />
          <Button onClick={handleLogin} className="bg-green-600 hover:bg-green-700 ">
            Login
          </Button>
           <ToastContainer />
            <GoogleLogin
 onSuccess={credentialResponse => {
    console.log(credentialResponse);
    handleGoogleLogin(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        

          <p className="text-center text-sm text-black">
            Are you a New User ?{" "}
            <Link to={'/register'}>
            <span className="text-blue-400 cursor-pointer">
              Register
            </span>
            </Link>
           
          </p>

        </Card>
        }


        
      </div>
    </div>
  )
}

export default Auth