import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Users/Pages/Home';
import Auth from './Pages/Auth';
import Allbooks from './Users/Pages/Allbooks';
import Viewbook from './Users/Pages/Viewbook';
import Contact from './Users/Pages/Contact';
import Careers from './Users/Pages/Careers';
import Profile from './Users/Pages/Profile';
import Paymentsucess from './Users/Pages/Paymentsucess';
import Paymenterror from './Users/Pages/Paymenterror';
import AdminHome from './Admin/Pages/AdminHome';
import AdminBooks from './Admin/Pages/AdminBooks';
import AdminCareers from './Admin/Pages/AdminCareers';
import AdminSettings from './Admin/Pages/AdminSettings';
import Pagenotfound from './Pages/Pagenotfound';
import Preloader from './Components/Preloader';

function App() {
const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(true)
  },1000)
},[isLoading])

  return (
    <>
      <Routes>
        {/* user part */}
        <Route path='/' element={isLoading?<Home/>:<Preloader/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/allbooks' element={<Allbooks/>}/>
        <Route path='/viewbook/:id' element={<Viewbook/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/profile' element={<Profile/>}/>
        {/* Payment part */}
        <Route path='/paymentsucess' element={<Paymentsucess/>}/>
        <Route path='/paymenterror' element={<Paymenterror/>}/>
        {/* Admin part */}
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='/admin-books' element={<AdminBooks/>}/>
        <Route path='/admin-careers' element={<AdminCareers/>}/>
        <Route path='/admin-settings' element={<AdminSettings/>}/>

        <Route path='*' element={<Pagenotfound/>}/>


      </Routes>
    </>
  )
}

export default App
